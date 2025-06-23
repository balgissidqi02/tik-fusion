require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const authRoutes = require('./auth');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.set('trust proxy', 1); 

app.use(cookieParser());
app.use(session({
  name: 'tik-session',
  secret: process.env.SESSION_SECRET || 'rahasiaBanget',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  }
}));

app.use((req, res, next) => {
  console.log("📦 Incoming session:", req.session);
    if (!req.session.visited) {
    req.session.visited = true;
    console.log("🆕 Pertama kali kunjungan, session disetel.");
  }
  next();
});

// Health check endpoint
app.get("/", (req, res) => {
  res.send("✅ TikTok API Server aktif dan berjalan.");
});

// OAuth Routes
const authRouter = require('./auth');
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
