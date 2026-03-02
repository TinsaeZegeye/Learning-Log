import { createContext, useContext, useReducer } from "react";

const initialState = {
  user: null,
  isAuthenticated: false,
  error: "",
};

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { initialState };
    case "login/failed":
      return { ...state, initialState, error: action.payload };
    default:
      throw new Error("Unknown Action");
  }
}
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [{ user, isAuthenticated, error }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
    else
      dispatch({
        type: "login/failed",
        payload: "Incorrect email or password!",
      });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, error }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error(
      "Accessing AuthContext outside AuthProvider is not allowed",
    );
  return context;
}

export { AuthProvider, useAuth };
