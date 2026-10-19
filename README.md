# Aetheria: Tugas 2 Pemrograman Web

Aplikasi katalog menu kafe sederhana berbasis Node.js, Express, dan EJS (Server-Side Rendering).

- **Nama**: Diandra Maharani
- **NIM**: 42530031
- **Mata Kuliah**: Pemrograman Web, Universitas Pendidikan Nasional
- **Tema**: Tema A (Daftar Menu Kafe)

## Video Penjelasan
https://youtu.be/lJdbtvnCZzc

## Fitur
- `/menu`: daftar semua menu
- `/menu?kategori=coffee`: filter menu per kategori (`req.query`)
- `/menu/:id`: detail satu menu (`req.params`)
- ID yang tidak ada menampilkan halaman "tidak ditemukan" (status 404)
- Tampilan modular dengan EJS partials (header dan footer)

## Cara Menjalankan
```bash
npm install
npm run dev
```
Lalu buka http://localhost:3000

## Struktur Folder
```
app.js
data/         (data menu)
routes/       (alamat URL)
controllers/  (logika)
views/        (tampilan EJS: pages dan partials)
public/       (CSS dan gambar)
```