var express = require('express');
var users = require('../models/usersModel');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {
    users: users,
    title: "Пользователи",
    header: "Список пользователей"
  });
});

module.exports = router;
