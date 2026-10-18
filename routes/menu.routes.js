const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menu.controller');

router.get('/', (req, res) => res.redirect('/menu'));

router.get('/menu', menuController.daftarMenu);

router.get('/menu/:id', menuController.detailMenu);

module.exports = router;