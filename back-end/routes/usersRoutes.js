const express = require('express');
const {
  controllerCreateUser,
  controllerFindUsers,
  controllerLogin,
  controllerDeleteUser,
  controllerUpdateUser,
  controllerUserById,
} = require('../src/controller/users.controller');

const usersRoutes = express.Router();

usersRoutes.post('/users', controllerCreateUser);
usersRoutes.post('/login', controllerLogin);
usersRoutes.get('/users', controllerFindUsers);
usersRoutes.delete('/users/:id', controllerDeleteUser);
usersRoutes.put('/users/:id', controllerUpdateUser);
usersRoutes.get('/users/:id', controllerUserById);

module.exports = usersRoutes;