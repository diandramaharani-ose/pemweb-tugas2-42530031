const menu = require('../data/menu');

exports.daftarMenu = (req, res) => {
  const kategori = req.query.kategori;
  let hasil = menu;

  if (kategori) {
    hasil = menu.filter(item => item.kategori === kategori.toLowerCase());
  }

  res.render('pages/menu-list', {
    pageTitle: 'Daftar Menu',
    daftar: hasil,
    kategoriAktif: kategori || 'semua'
  });
};

exports.detailMenu = (req, res) => {
  const id = Number(req.params.id);
  const item = menu.find(m => m.id === id);

  if (!item) {
    return res.status(404).render('pages/not-found', {
      pageTitle: 'Menu Tidak Ditemukan',
      pesan: 'Menu yang kamu cari tidak ada.'
    });
  }

  res.render('pages/menu-detail', {
    pageTitle: item.nama,
    item: item
  });
};