# Şef Kebap — V4 (Airy Elegant)

React (Vite) + Tailwind CSS + lucide-react

---

## 🚀 Kurulum & Çalıştırma

```bash
# 1. Bağımlılıkları kur
npm install

# 2. Geliştirme sunucusu → http://localhost:5173
npm run dev

# 3. Production build
npm run build

# 4. ZIP oluştur
npm install --save-dev archiver   # ilk seferinde
node zip-project.cjs
```

---

## 📁 Yapı

```
sef-kebap-v4/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── zip-project.cjs
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── assets/images/     ← logo.jpg buraya
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── PageHero.jsx
    │   └── QRModal.jsx
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── Menu.jsx
        ├── Gallery.jsx
        └── Contact.jsx
```

---

## 🖼️ Logo

Gerçek logo dosyasını şuraya koy:
`src/assets/images/logo.jpg`

---

## 🎨 Tasarım

- **Arka plan**: Off-white `#FAF7F2`
- **Altın aksan**: `#D4AF37`
- **Tipografi**: Charcoal `#2C2C2C`
- **Font**: Cormorant Garamond (display) + Inter (body) + Montserrat (accent)
