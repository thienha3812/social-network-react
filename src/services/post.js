/* eslint-disable */
import apiService from '../utils/axios.config';






export const LikePost  = async ({post_id}) => {
    const response = await apiService({
        url: "/api/post/user-like",
        data  : { post_id},
        method : "POST"
    })
    return response
}


export const UserComment = async ({post_id,content}) => {
    const response  = await apiService({
        url : "/api/post/user-comment",
        data : {post_id,content},
        method : "POST"
    })
    return response
}