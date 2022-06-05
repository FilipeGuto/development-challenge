const errorMessage = require('../../utils/errorMessage');
const { userSchema } = require('../schema/userSchema');
const {
  badRequest,
  conflict,
  unauthorized,
} = require('../../utils/dictionary/statusCode');

const {
  fetchCreateUser,
  fetchFindUsers,
  fetchUsersLogin,
  fetchDeleteUser,
  fetchUpdateUser,
  fetchUserById,
} = require('../fetch/users.fetch');

const serviceCreateUser = async (user) => {
  const {
    fullName,
    email,
    password,
    birthDate,
    address,
  } = user;

  const { error } = userSchema.validate({
    fullName,
    email,
    password,
    birthDate,
    address,
  });

  if (error) {
    throw errorMessage(badRequest, 'Invalid entries. Try again.');
  }

  const users = await fetchUsersLogin(email);
  const emailByUSers = users.map(user => user.email);
  const emailExists = emailByUSers.find(e => e === email);
  if (emailExists) throw errorMessage(conflict, 'Email already registered');
  const createUser = await fetchCreateUser(user);

  return createUser;
};

const serviceFindUsers = async () => {
  const users = await fetchFindUsers();

  return users;
};

const serviceLogin = async (user) => {
  const { email, password } = user

  const userInfo = await fetchUsersLogin(email, password);
  const passwordByUser = userInfo.map(user => user.password);
  const passwordCorrect = passwordByUser.find(e => e === password);
  const emailByUSers = userInfo.map(user => user.email);
  const emailCorrect = emailByUSers.find(e => e === email);

  if (
    !emailCorrect ||
    emailCorrect !== email ||
    !passwordCorrect ||
    passwordCorrect !== password
    ) {
    throw errorMessage(unauthorized, 'Incorrect username or password');
  }

  return (user);
};

const serviceDeleteUser = async (id) => {
  await fetchDeleteUser(id);
};

const serviceUpdateUser = async (id, user) => {
  const updated = await fetchUpdateUser(id, user)

  return updated;
};

module.exports = {
  serviceCreateUser,
  serviceFindUsers,
  serviceLogin,
  serviceDeleteUser,
  serviceUpdateUser,
};
