import { createReducer } from '@reduxjs/toolkit';
import { signinAction } from '../actions/authentication';

export const initialState = []
const authenticationReducer = createReducer(initialState, {
  [signinAction.fulfilled]: (state, action) => ({ ...state, ...action.payload,is_logged : true }),
});


export default authenticationReducer;
