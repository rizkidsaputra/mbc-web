# 🌐 MBC Web Frontend

Landing page untuk **MBC Laboratory**, dikembangkan sebagai bagian dari technical test MBC 2025. Website ini dibangun menggunakan **React** dengan **Vite** dan **Tailwind CSS** untuk memberikan pengalaman pengguna yang cepat dan modern.

---

## 🚀 Tech Stack

- ⚛️ React
- ⚡ Vite
- 🎨 Tailwind CSS
- 🔗 React Router DOM

---

## 📁 Struktur Proyek

```
mbc_web/
├── public/
├── src/
│   ├── components/
│   │   ├── DivisionLayout.jsx
│   │   ├── Footer.jsx
│   │   ├── Form.jsx
│   │   ├── Navbar.jsx
│   │   └── ScrollToTop.jsx
│   ├── pages/
│   │   ├── division/
│   │   │   ├── bigdata.jsx
│   │   │   ├── cybersecurity.jsx
│   │   │   ├── gametech.jsx
│   │   │   └── gis.jsx
│   │   ├── Contact.jsx
│   │   ├── Developer.jsx
│   │   ├── Division.jsx
│   │   ├── Home.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.local
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Instalasi & Menjalankan Lokal

### 1. Jalankan Backend Terlebih Dahulu

Sebelum menjalankan frontend ini, pastikan Anda sudah menjalankan backend dari repositori berikut:

👉 [https://github.com/rizkidsaputra/mbc-backend](https://github.com/rizkidsaputra/mbc-backend)

Setelah dijalankan backend akan berjalan di `http://localhost:5000`.

### 2. Clone dan Jalankan Frontend

```bash
git clone https://github.com/username/mbc_web.git
cd mbc_web
npm install
```

### 3. Buat file `.env.local`

```env
VITE_API_URL=http://localhost:5000
```
>Ganti ke URL backend jika anda sudah mendeploynya

### 4. Jalankan Aplikasi

```bash
npm run dev
```

Frontend akan berjalan di `http://localhost:5173`.

---
