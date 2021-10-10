export const initialState = {
  user: null,
  isAuthenticated: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    default:
      return {
        ...state,
        user: action.payload,
      };
  }
};
