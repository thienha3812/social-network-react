
/* eslint-disable */
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';
import { signinService } from '../services/authentication';

const SIGNIN = 'SIGNIN';
const SIGNOUT = 'SIGNOUT';
export const signinAction = createAsyncThunk(SIGNIN, async ({ username, password }) => {
  try {
    console.log(username, password);
    const response = await signinService({ username, password });
    message.success('Đăng nhập thành công');
    return response.data;
  } catch (err) {
    console.log(err);
    message.success('Đăng nhập thất bại');
    return err;
  }
});

export const signoutAction = createAction(SIGNOUT, ({ username, password }) => ({
  payload: {

  },
}));
