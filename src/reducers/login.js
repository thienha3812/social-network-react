const initState = {    
    accessToken: '',
    isLoading: false,
    error: '',
};

const loginReducer = (state = initState,{type , payload}) => {
    try {                  
        switch (type) {
            case 'HANDLE_LOGIN':
                return {
                    ...state,
                    isLoading: true,                    
                };  
            case 'LOGIN_SUCESS':                        
                return Object.assign({},state,{
                    accessToken : payload.data.token,
                    isLoading : false
                })          
            case 'LOGIN_FAILURE':
                return Object.assign({},state,{error:new Error("Lỗi không xác định")})
            default:
                return state;
        }
    }
    catch {
        return {}
    }
};
export default loginReducer;