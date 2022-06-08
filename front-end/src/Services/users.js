import axios from "axios";
const baseURL = "http://localhost:3001";

const userCreate = async (user) => {
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
          country: user.country,
          state: user.state,
          city: user.city,
        }
      }
    };

    const { data } = await axios.request(options);

    return data;
  } catch (error) {
    if (error) {
      const errorLog = error.response.data;
      return errorLog;
    }
  }
};

const userLogin = async (user) => {
  try {
    const options = {
      method: 'POST',
      url: `${baseURL}/login`,
      headers: { 'Content-Type': 'application/json' },
      data: { email: user.email, password: user.password }
    };

    const { data } = await axios.request(options);

    return data;
  } catch (error) {
    if (error) {
      const errorLog = error.response.data;
      return errorLog;
    }
  }
};

const userById = async (user) => {
  try {
    const options = {
      method: 'GET',
      url: `${baseURL}/users/${user}`,
    };

    const { data } = await axios.request(options);

    return data;
  } catch (error) {
    return console.log(error);
  }
};

const deleteUserById = async (user) => {
  try {
    const options = {
      method: 'DELETE',
      url: `${baseURL}/users/${user}`,
    };

    const { data } = await axios.request(options);

    return data;
  } catch (error) {
    return console.log(error);
  }
};

const userUpdateById = async (user) => {
  try {
    const options = {
      method: 'PUT',
      url: `${baseURL}/users/${user.id}`,
      headers: {
        'Content-Type': 'application/json',
      },
      data:
      {
        ...user
      }
    };

    const { data } = await axios.request(options);

    return data;
  } catch (error) {
    return console.log(error);
  }
};


export {
  userLogin,
  userCreate,
  userById,
  deleteUserById,
  userUpdateById,
};
