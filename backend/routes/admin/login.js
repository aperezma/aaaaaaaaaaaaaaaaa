var express = require('express');
var session = require('express-session')
const req = require('express/lib/request');
const res = require('express/lib/response');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

router.get('/', function(req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout',
    usuario: req.session.usuario,
  });
});



module.exports = router;
router.post ('/', async (req, res, next) => {
  try {
    console.log(req.body)
    var usuario = req.body.usuario;
    var password = req.body.password;
    console.log(req.body)
    var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

    if (data != undefined) {
      console.log(req.session)
      req.session.usuario = data.usuario;
      req.session.id_usuario = data.id;
      
      res.redirect ('./articulos/')
    } else {
      res.render ('admin/login', {
        layout: 'admin/login',
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  }
})

router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.render('admin/login', {
    layout: 'admin/login',
  });
});
