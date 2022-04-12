import {
  login,
  logout,
  register,
  resetPassword,
  getToken,
  getRepo,
} from './actions';

const initialState = {
  Login: [],
  authToken: null,
  Register: [],
  ResetPassword: {},
  repo: {},
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case getRepo:
      return {
        ...state,
        repo: action.payload,
      };
    case login:
      return {
        ...state,
        Login: action.payload,
      };
    case getToken: {
      return {
        ...state,
        authToken: action.payload,
      };
    }
    case logout:
      return {
        Login: null,
      };
    case register:
      return {
        Register: action.payload,
      };
    case resetPassword: {
      return {
        ResetPassword: action.payload,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
