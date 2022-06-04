const express = require('express');
const {
  controllerCreateUser,
  controllerFindUsers,
} = require('../src/controller/users.controller');

const usersRoutes = express.Router();

usersRoutes.post('/users', controllerCreateUser);
usersRoutes.get('/users', controllerFindUsers);

module.exports = usersRoutes;