import axios from '../ultis/axios.config';


export  async function postingService(payload){
  const request = await axios({
    url : "/api/user/posting",
    method : "POST",
    data : payload
  })
  return request
}

export async function loaddingProfileService({ id }){
    const request = await axios({
      url : "/api/user/loadprofile",
      method : "POST",
      data : {id : parseInt(id)}
    })
    return request
}

export async function friendRequestService({id}){
  const request = await axios({
    url : "/api/user/addfriend",
    method  : "POST", 
    data  : { id : parseInt(id) }
  })
  return request
}

export async function loadRequestService(){
  const request = await axios({
    url : "/api/user/loadrequest",
    method : "GET"
  })
  return request
}
export async function acceptFriendRequest({id}){
  const request = await axios({
    url : "/api/user/acceptfriend",
    method : "POST",
    data : { id  : parseInt(id)}
  })
  return request
}
export async function getUserOnline(){
    const request = await axios({
      url : '/api/user/useronline',
      method :'GET'
    })
    return request
}