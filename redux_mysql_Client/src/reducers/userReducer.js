import { initUser } from '../utils/init';
//ctl + space to get initLogin
//reducer simple javascript Method
//which it takes 2 argument
//current data, NewData--Object from dispatch
const userReducer = (state = initUser, newData) => {
    //we need type to diffetenticate the actions
    //some time we need to update the msg,isLogin
    switch (newData.type) {
        case 'USER_INFO':
            state={
                ...state,
                userInfo:newData.payload //have to pass true
            }
            break;
            
        default:
            break;
    }
    return state;
}

export default userReducer;