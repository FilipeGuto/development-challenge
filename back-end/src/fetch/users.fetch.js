const axios = require('axios');
const baseURL = "https://mgcbq4vjte.execute-api.us-east-1.amazonaws.com/v1"

const fetchCreateUser = async (user) => {
  try {
    const options = {
      method: 'POST',
      url: `${baseURL}/users`,
      headers: { 'Content-Type': 'application/json' },
      data:
      {
        fullName: user.fullName,
        email: user.email,
        password: user.password,
        birthDate: user.birthDate,
        address: {
          country: user.address.country,
          state: user.address.state,
          city: user.address.city
        },
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
    const { data } = await axios.get(`${baseURL}/users`);
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

const fetchDeleteUser = async (id) => {
  try {
    const options = {
      method: 'DELETE',
      url: `${baseURL}/users/${id}`,
    };

    const { data } = await axios.request(options);

    return data;
  } catch (error) {
    console.error(error);
  }
}

const fetchUserById = async (id) => {
  try {
    const options = {
      method: 'GET',
      url: `${baseURL}/users/${id}`,
    };

    const { data } = await axios.request(options);

    return data;
  } catch (error) {
    console.error(error);
  }
}

const fetchUpdateUser = async (id, user) => {
  try {
    const options = {
      method: 'PUT',
      url: `${baseURL}/users/${id}`,
      headers: { 'Content-Type': 'application/json' },
      data:
      { ...user }
    };

    const { data } = await axios.request(options);

    return data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  fetchCreateUser,
  fetchFindUsers,
  fetchUsersLogin,
  fetchDeleteUser,
  fetchUserById,
  fetchUpdateUser,
};
