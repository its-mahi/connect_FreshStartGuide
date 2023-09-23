const initialState = {
  user: null,
  isAuthanticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        isAuthanticated: true,
      };
    case "CLEAR_USER":
      return {
        ...state,
        user: null,
        isAuthanticated: false,
      };
  }
};

export default userReducer;
