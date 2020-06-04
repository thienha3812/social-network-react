import { createReducer } from "@reduxjs/toolkit"
import {getUserOnlineAction} from '../actions/user_online'


const initialState  = []

export const getUserOnlineReducer = createReducer(initialState,{
    [getUserOnlineAction.fulfilled] : (state, action) => ([...action.payload]),
})