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
    throw errorMessage(badRequest, 'Dados invalidos, tente novamente');
  }

  const users = await fetchUsersLogin(email);
  const emailByUSers = users.map(user => user.email);
  const emailExists = emailByUSers.find(e => e === email);
  if (emailExists) throw errorMessage(conflict, 'Email já cadastrado');
  const createUser = await fetchCreateUser(user);

  return createUser;
};

const serviceFindUsers = async () => {
  const users = await fetchFindUsers();

  return users;
};

const serviceUserById = async (id) => {
  const users = await fetchUserById(id);

  return users;
};

const serviceLogin = async (user) => {
  const { email, password } = user

  const userInfo = await fetchUsersLogin(email, password);
  const passwordByUser = userInfo.map(user => user.password);
  const passwordCorrect = passwordByUser.find(e => e === password);
  const emailByUSers = userInfo.map(user => user.email);
  const emailCorrect = emailByUSers.find(e => e === email);

  const allUsers = userInfo.map(user => user);
  const userLogin = allUsers.find(e => e.email === email);

  const {password: _password, ...useWithoutPassword } = userLogin;

  if (
    !emailCorrect ||
    emailCorrect !== email ||
    !passwordCorrect ||
    passwordCorrect !== password
  ) {
    throw errorMessage(unauthorized, 'Email ou senha incorretos');
  }

  

  return (useWithoutPassword);
};

const serviceDeleteUser = async (id) => {
  const userById = await fetchUserById(id);

  if (!userById) {
    throw errorMessage(unauthorized, 'Usuario não encontrado');
  } else {
    await fetchDeleteUser(id);
  };
};

const serviceUpdateUser = async (id, user) => {
  const userById = await fetchUserById(id);
  if (!userById) {
    throw errorMessage(unauthorized, 'Usuario não encontrado');
  } else {
    const users = await fetchFindUsers();
    const emailByUSers = users.map(user => user.email);
    const emailExists = emailByUSers.find(e => e === user.email);
    if (emailExists) {
      throw errorMessage(conflict, 'Email já cadrastrado')
    } else {
      const response = await fetchUpdateUser(id, user);

      return response;
    }
  };
};

module.exports = {
  serviceCreateUser,
  serviceFindUsers,
  serviceLogin,
  serviceDeleteUser,
  serviceUpdateUser,
  serviceUserById,
};
