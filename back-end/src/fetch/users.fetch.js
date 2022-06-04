const axios = require('axios');
const baseURL = "https://9kdozamc2d.execute-api.us-east-1.amazonaws.com"

const fetchCreateUser = async (user) => {
  try {
    const options = {
      method: 'POST',
      url: `${baseURL}/users`,
      headers: { 'Content-Type': 'application/json' },
      data:
      {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        password: user.password,
        birthDate: user.birthDate,
        address: user.address,
      }
    };

    const { data } = await axios.request(options);

    return data;
  } catch (error) {
    if (error) {
      return console.log(error);
    }
  }
}

const fetchFindUsers = async () => {
  try {
    const options = {
      method: 'GET',
      url: `${baseURL}/users`,
    };

    const { data } = await axios.request(options);
    const users = data.Items;

    return users;
  } catch (error) {
    return console.log(error);
  }
};

const fetchUsersLogin = async () => {
  const myUsers = await fetchFindUsers();
  const usersByEmail = myUsers.map(user => user);

  return usersByEmail;
}

module.exports = {
  fetchCreateUser,
  fetchFindUsers,
  fetchUsersLogin,
};
