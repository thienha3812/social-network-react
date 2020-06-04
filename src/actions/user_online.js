import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { GetUserOnline } from '../services/user'


const LOAD_USER_ONLINE = "LOAD_USER_ONLINE"
export const getUserOnlineAction = createAsyncThunk(LOAD_USER_ONLINE, async () => {
    try { 
        const response = await GetUserOnline()
        return response.data.list_user
    }catch(err){
        return err.message
    }
})

