import { createReducer } from '@reduxjs/toolkit';
import { signinAction } from '../actions/authentication';

const initialState = [

];
const authenticationReducer = createReducer(initialState, {
  [signinAction.fulfilled]: (state, action) => ({ ...state, ...action.payload }),
});


export default authenticationReducer;
