/* eslint-disable */
import apiService from '../utils/axios.config';



export const LoadProfile = async ({ account_id }) => {
    const response = await apiService({
        url: "/api/user/load-profile",
        method: "POST",
        data: { account_id: parseInt(account_id) }

    });
    return response
}
export const AddFriend = async ({ user_id }) => {
    const response = await apiService({
        url: "/api/user/add-friend",
        method: "POST",
        data: { user_id : Number.parseInt(user_id) }
    })
    return response

}
export const LoadRequest = async () => {
    const response = await apiService({
        url: "/api/user/load-request",
        method: "GET"
    })
    return response
}

export const GetUserOnline = async () =>{ 
    const response = await apiService({
        url : "/api/user/user-online",
        method : "GET"
    })
    return response
}
export const CancleAcept = async ({user_id}) =>{ 
    const response = await apiService({
        url : "/api/user/cancle-request",
        method : "POST",
        data : {user_id : Number.parseInt(user_id)}
    })
    return response
}
export const AcceptFriend = async ({ user_id }) => {
    const response = await apiService({
        url: "/api/user/accept-friend",
        method: "POST",
        data : {user_id}
    })
    return response
}