const express = require('express');
const path = require('path');
const menuRoutes = require('./routes/menu.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', menuRoutes);

app.use((req, res) => {
  res.status(404).render('pages/not-found', {
    pageTitle: 'Halaman Tidak Ditemukan',
    pesan: 'Halaman yang kamu cari tidak ada.'
  });
});

app.listen(3000, (err) => {
  if (err) throw err;
  console.log('Server Kafe aktif di http://localhost:3000');
});