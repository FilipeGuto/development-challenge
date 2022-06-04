const express = require('express');
const {
  controllerCreateUser,
  controllerFindUsers,
  controllerLogin,
} = require('../src/controller/users.controller');

const usersRoutes = express.Router();

usersRoutes.post('/users', controllerCreateUser);
usersRoutes.post('/login', controllerLogin);
usersRoutes.get('/users', controllerFindUsers);

module.exports = usersRoutes;