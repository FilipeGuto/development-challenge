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

export {
  userLogin,
  userCreate,
};
