import axios from 'axios';

const baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

export const getUsers = async (page = 1) => {
  try {
    const data = await axios.get(`${baseURL}users?page=${page}&count=6`);
    return data.data.users;
  } catch (error) {
    throw new Error(error);
  }
};

export const getPositions = async () => {
  try {
    const data = await axios.get(`${baseURL}positions`);
    return data.data.positions;
  } catch (error) {
    throw new Error(error);
  }
};

export const postUser = async formData => {
  try {
    const tokenData = await axios.get(`${baseURL}token`);
    if (tokenData.data.success) {
      const { token } = tokenData.data;
      const postResponse = await axios.post(`${baseURL}users`, formData, {
        headers: {
          Token: token,
        },
      });
      return postResponse;
    }
    return tokenData;
  } catch (error) {
    throw new Error(error);
  }
};
