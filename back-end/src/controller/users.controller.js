const {
  serviceCreateUser,
  serviceFindUsers,
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

module.exports = {
  controllerCreateUser,
  controllerFindUsers,
};
