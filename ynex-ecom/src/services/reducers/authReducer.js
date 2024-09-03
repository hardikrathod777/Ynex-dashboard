const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isLogin: JSON.parse(localStorage.getItem('user')) ? true : false,
    err: null
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {

      case "REGISTER":

          return {
              ...state,
              user: action.payload,
              isLogin: false
          }

      case "LOGIN":

      
          return {
              ...state,
              user: action.payload,
              isLogin: true
          }

      case "SIGNUPERR":
          return {
              ...state,
              err: action.payload
          }
      default:
          return state
  }
}

export default authReducer;