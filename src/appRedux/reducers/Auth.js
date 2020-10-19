const INIT_STATE = {
  loader: false,
  alertMessage: '',
  showMessage: false,
  initURL: 'admin',
  authUser: localStorage.getItem('user_id'),
};


export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case "USER_SIGN_UP": {
      localStorage.setItem("user_id",action.payload);
      return {
        ...state,
        loader: false,
        authUser: action.payload
      }
    }
    case "USER_SIGN_IN": {
      localStorage.setItem("user_id",action.payload);
      return {
        ...state,
        loader: false,
        authUser: action.payload
      }
    }
    // case SIGNUP_USER_SUCCESS: {
    //   return {
    //     ...state,
    //     loader: false,
    //     authUser: action.payload
    //   }
    // }
    // case SIGNIN_USER_SUCCESS: {
    //   return {
    //     ...state,
    //     loader: false,
    //     authUser: action.payload
    //   }
    // }
    // case INIT_URL: {
    //   return {
    //     ...state,
    //     initURL: action.payload
    //   }
    // }
    // case SIGNOUT_USER_SUCCESS: {
    //   return {
    //     ...state,
    //     authUser: null,
    //     initURL: '/admin',
    //     loader: false
    //   }
    // }
    default:
      return state;
  }
}
