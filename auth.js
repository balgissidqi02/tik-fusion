require('dotenv').config();
const express = require('express');
const axios = require('axios');
const { Token } = require('./models/Token');

const router = express.Router();

const clientKey = process.env.APP_KEY;
const clientSecret = process.env.APP_SECRET;
const redirectUri = process.env.REDIRECT_URI;

// 🔐 1. Redirect seller ke halaman login TikTok
router.get('/auth/tiktok', (req, res) => {
  const state = '123'; // Opsional: bisa diganti jadi dinamis
  const authUrl = `https://auth.tiktok-shops.com/oauth/authorize?app_key=${clientKey}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&state=${state}`;
  res.redirect(authUrl);
});

// 🔁 2. Callback untuk menerima code dan tukar dengan token
router.get('/auth/callback', async (req, res) => {
  const { code } = req.query;
  console.log("✅ Code diterima:", code);

  if (!code) return res.status(400).send("❌ Authorization code missing.");

  try {
    const response = await axios.post('https://auth.tiktok-shops.com/api/token', {
      app_key: clientKey,
      app_secret: clientSecret,
      code,
      grant_type: 'authorization_code',
      redirect_uri: redirectUri
    });

    console.log("✅ Token response dari TikTok:", response.data);

    const { access_token, refresh_token, seller_id } = response.data.data;

    await Token.create({ seller_id, access_token, refresh_token });

    res.send("✅ Autentikasi berhasil! Token disimpan ke database.");
  } catch (err) {
    console.error("❌ Gagal tukar token:", err.response?.data || err.message || err);
    res.status(500).send("❌ Gagal menukar kode dengan token.");
  }
});



module.exports = router;
