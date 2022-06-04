const errorMessage = require('../../utils/errorMessage');
const { userSchema } = require('../schema/userSchema');
const {
  badRequest,
  conflict,
} = require('../../utils/dictionary/statusCode');

const {
  fetchCreateUser,
  fetchFindUsers,
  fetchUsersEmail,
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

  const emailExists = await fetchUsersEmail(email);
  if (emailExists) throw errorMessage(conflict, 'Email already registered');
  const createUser = await fetchCreateUser(user);

  return createUser;
};

const serviceFindUsers = async () => {
  const users = await fetchFindUsers();

  return users;
};

module.exports = {
  serviceCreateUser,
  serviceFindUsers,
};
