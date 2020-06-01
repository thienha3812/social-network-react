/* eslint-disable */
import apiService from '../utils/axios.config';

export const signinService = async ({ username, password }) => {
  const response = await apiService({
    url: '/api/account/signin',
    method: 'POST',
    data: { username, password },
  });
  return response;
};


export const signoutService = async ({}) => {

};
