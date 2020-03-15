import request from './../ultis/request'


export async function register(form) {
    const data = await request.post("/account/register",form)    
    return data
}


export async function login(form){
    const data = await request.post("/account/login",form)
    return data
}