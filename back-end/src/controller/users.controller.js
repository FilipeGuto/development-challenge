const {
  serviceCreateUser,
  serviceFindUsers,
  serviceLogin,
  serviceDeleteUser,
  serviceUpdateUser,
  serviceUserById,
} = require('../service/users.services');
const { created, sucess } = require('../../utils/dictionary/statusCode');

const controllerCreateUser = async (req, res, next) => {
  try {
    const newUser = await serviceCreateUser(req.body);

    return res.status(created).json(newUser);
  } catch (error) {
    console.log(`POST CREATE USER -> ${error.message}`);
    return next(error);
  }
};

const controllerFindUsers = async (req, res, next) => {
  try {
    const users = await serviceFindUsers();

    return res.status(sucess).json(users);
  } catch (error) {
    console.log(`GET ALL USERS -> ${error.message}`);
    return next(error);
  }
};

const controllerUserById = async (req, res, next) => {
  try {
    const users = await serviceUserById(req.params);

    return res.status(sucess).json(users);
  } catch (error) {
    console.log(`GET USER BY ID -> ${error.message}`);
    return next(error);
  }
};

const controllerLogin = async (req, res, next) => {
  try {
    const loginUser = await serviceLogin(req.body);

    return res.status(sucess).json(loginUser);
  } catch (error) {
    console.log(`POST LOGIN -> ${error.message}`);
    return next(error);
  }
};

const controllerDeleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    await serviceDeleteUser(id);

    return res.status(sucess).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.log(`DELETE USER BY ID -> ${error.message}`);
    return next(error);
  }
};

const controllerUpdateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const update = await serviceUpdateUser(id, req.body);

    return res.status(sucess).json(update);
  } catch (error) {
    console.log(`UPDATE USER BY ID -> ${error.message}`);
    return next(error);
  }
};

module.exports = {
  controllerCreateUser,
  controllerFindUsers,
  controllerLogin,
  controllerDeleteUser,
  controllerUpdateUser,
  controllerUserById,
};
