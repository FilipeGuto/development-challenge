const express = require('express');
const {
  controllerCreateUser,
  controllerFindUsers,
  controllerLogin,
  controllerDeleteUser,
} = require('../src/controller/users.controller');

const usersRoutes = express.Router();

usersRoutes.post('/users', controllerCreateUser);
usersRoutes.post('/login', controllerLogin);
usersRoutes.get('/users', controllerFindUsers);
usersRoutes.delete('/user/:id', controllerDeleteUser);

module.exports = usersRoutes;