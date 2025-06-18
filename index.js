require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./auth');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Health check endpoint
app.get("/", (req, res) => {
  res.send("✅ TikTok API Server aktif dan berjalan.");
});

// OAuth Routes
app.use('/', authRoutes);

// Database connection dan start server
sequelize.sync({ alter: true }) 
  .then(() => {
    console.log('📦 Database & tabel siap!');
    app.listen(PORT, () => {
      console.log(`🚀 Server aktif di http://localhost:${PORT}`);
      console.log(`🔐 Akses login TikTok: http://localhost:${PORT}/auth/tiktok`);
    });
  })
  .catch((err) => {
    console.error('❌ Gagal koneksi ke database:', err);
    process.exit(1);
  });
