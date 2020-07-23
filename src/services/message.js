import apiService from '../utils/axios.config';



export const GetHistoryMessage = async ({friend_id}) => {
    const repsponse  = await apiService({
        url : "/api/message/get-history",
        method : "POST",
        data : {friend_id : Number.parseInt(friend_id)}

    })
    return repsponse
}