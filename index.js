require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.set('trust proxy', 1); 

app.use(cookieParser());
app.use(session({
  name: 'tik-session',
  secret: 'rahasiaBanget',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, 
    httpOnly: true,
    sameSite: 'lax'
  }
}));


app.use((req, res, next) => {
  console.log("🧪 Incoming request...");
  console.log("🍪 Cookies:", req.headers.cookie);
  console.log("📦 Session content:", req.session);
  next();
});

// Health check endpoint
app.get("/", (req, res) => {
  res.send("✅ TikTok API Server aktif dan berjalan.");
});

// OAuth Routes
const authRoutes = require('./auth');
app.use('/', authRoutes);

// Database connection dan start server
sequelize.sync({ alter: true }) 
  .then(() => {
    console.log('📦 Database & tabel siap!');
    app.listen(PORT, () => {
      console.log(`🚀 Server aktif di http://localhost:${PORT}`);
      console.log(`🔐 Akses login TikTok: ${PORT}: https://5424-103-175-48-119.ngrok-free.app/auth/tiktok`);
    });
  })
  .catch((err) => {
    console.error('❌ Gagal koneksi ke database:', err);
    process.exit(1);
  });
