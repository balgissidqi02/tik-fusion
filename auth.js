require('dotenv').config();
const express = require('express');
const session = require('express-session');
const crypto = require('crypto');
const axios = require('axios');
const qs = require('qs');
const Token = require('./models/Token');

const router = express.Router();

const clientKey = process.env.APP_KEY;
const clientSecret = process.env.APP_SECRET;
const redirectUri = process.env.REDIRECT_URI;

// Step 1: Redirect seller ke TikTok OAuth login
router.get('/auth/tiktok', (req, res) => {
  const state = crypto.randomUUID();
  req.session.oauthState = state;

  const authUrl = `https://auth.tiktok-shops.com/oauth/authorize?app_key=${clientKey}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&state=${state}&scope=product.list,order.list,seller.info.basic`;

  req.session.save((err) => {
    if (err) {
      console.error("❌ Gagal simpan session:", err);
      return res.status(500).send("Internal Server Error");
    }
    console.log("🔐 Redirecting ke TikTok dengan state:", state);
    res.redirect(authUrl);
  });
});

// Step 2: Callback dari TikTok
router.get('/auth/tiktok/callback', async (req, res) => {
  const { code, state } = req.query;
  
  if (!code) return res.status(400).send("❌ Code hilang dari query.");
  if (state !== req.session.oauthState) return res.status(403).send("⛔ State tidak cocok.");

  try {
        const tokenResponse = await axios.post(
      'https://auth.tiktok-shops.com/api/v2/token/create',
      qs.stringify({
        app_key: clientKey,
        app_secret: clientSecret,
        auth_code: code,
        grant_type: 'authorized_code'
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
     
    const result = tokenResponse.data?.data;

    if (!result?.access_token) {
      console.error("❌ Token tidak diterima:", tokenResponse.data);
      return res.status(500).send("❌ Gagal dapatkan token.");
    }

    const { access_token, refresh_token, seller_id, expire_in } = result;

    await Token.upsert({
      seller_id,
      access_token,
      refresh_token,
      expired_at: new Date(Date.now() + expire_in * 1000),
    });

    res.json({
      message: "✅ Autentikasi berhasil!",
      seller_id,
      access_token,
      expired_at: new Date(Date.now() + expire_in * 1000)
    });

  } catch (err) {
    console.error("❌ Gagal tukar token. Response:", err.response?.data || err.message);
    res.status(500).send("❌ Gagal menukar code dengan token.");
  }
});

module.exports = router;
