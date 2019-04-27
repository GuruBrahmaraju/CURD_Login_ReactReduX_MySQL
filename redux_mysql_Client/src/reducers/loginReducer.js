import { initLogin } from '../utils/init';
//ctl + space to get initLogin
//reducer simple javascript Method
//which it takes 2 argument
//current data, NewData--Object from dispatch
const loginReducer = (state = initLogin, newData) => {
    //we need type to diffetenticate the actions
    //some time we need to update the msg,isLogin
    switch (newData.type) {
        case 'LOGIN_SUCCESS':
            state={
                ...state,
                isLoggedIn:newData.payload //have to pass true
            }
            break;
        case 'LOGIN_FAIL':
                state={
                    ...state,
                    msg:newData.payload 
                }

            break;

        default:
            break;
    }
    return state;
}

// {
//     'type':'LOGIN_SUCESS',

// }

export default loginReducer;