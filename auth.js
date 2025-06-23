const express = require('express');
const session = require('express-session');
const axios = require('axios');
const crypto = require('crypto');
const Token = require('./models/Token');
require('dotenv').config();

const router = express.Router();

const clientKey = process.env.APP_KEY;
const clientSecret = process.env.APP_SECRET;
const redirectUri = process.env.REDIRECT_URI;

// 1. Redirect seller ke TikTok Shop Login 
router.get('/auth/tiktok', (req, res) => {
  const state = crypto.randomUUID()
  req.session.oauthState = state;

  console.log("Generated state:", state);

  const authUrl = `https://auth.tiktok-shops.com/oauth/authorize?app_key=${clientKey}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&state=${state}&scope=all`;

  req.session.save((err) => {
    if (err) {
      console.error("❌ Error saving session:", err);
      return res.status(500).send("Internal Server Error");
    }
    console.log("📦 Session saved successfully. oauthState:", req.session.oauthState);
    res.redirect(authUrl);
  });
});

// 2. Callback dari TikTok Shop 
router.get('/auth/tiktok/callback', async (req, res) => {
  const { code, state } = req.query;

  console.log("State yang disimpan:", req.session.oauthState);
  console.log("State yang diterima:", state);

  if (!code || !state) {
    return res.status(400).send("❌ Kode atau state hilang.");
  }

  if (state !== req.session.oauthState) {
    return res.status(403).send("⛔ State tidak cocok.");
  }

  try {
    console.log("Client Key:", clientKey);
    console.log("Client Secret:", clientSecret);
    console.log("Redirect URI:", redirectUri);
    console.log("Authorization Code:", code);

    const response = await axios.post(
      'https://auth.tiktok-shops.com/api/v2/token/get',
      {
        app_key: clientKey,
        app_secret: clientSecret,
        auth_code: code,
        grant_type: 'authorization_code',
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status !== 200) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const result = response.data?.data;

    if (!result?.access_token) {
      console.error("Token tidak ditemukan dalam respons:", result);
      return res.status(500).send("❌ Gagal mendapatkan token dari TikTok.");
    }

    // const { access_token, refresh_token, seller_id, expire_in } = result;

    await Token.upsert({
      seller_id: result.seller_id,
      access_token: result.access_token,
      refresh_token: result.refresh_token,
      expired_at: new Date(Date.now() + result.expire_in * 1000),
    });

    res.send("Autentikasi berhasil! Token disimpan.");
  } catch (err) {
    console.error("❌ Gagal tukar token:", err.message);
    res.status(500).send("❌ Gagal menukar kode dengan token.");
  }
});

module.exports = router;