const { createContext, useReducer, useContext } = require("react");

const AUTH_ACTIONS_TYPES = {
  LOGIIN: "LOGIN",
  LOGOUT: "LOGOUT",
  SIGNUP: "SIGNUP",
};

const defaultState = {
  isLoggedIn: false,
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case AUTH_ACTIONS_TYPES.LOGIIN: {
      return { isLoggedIn: true, user: action.user };
    }
    case AUTH_ACTIONS_TYPES.LOGOUT: {
      return defaultState;
    }
    case AUTH_ACTIONS_TYPES.SIGNUP: {
      return { isLoggedIn: true, user: action.user };
    }
    default:
      return defaultState;
  }
}

const Context = createContext(defaultState);
const useAuthContext = () => useContext(Context);

function AuthContext({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export { AuthContext, useAuthContext, AUTH_ACTIONS_TYPES };
