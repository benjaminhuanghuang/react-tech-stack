/*
  After long, save token to localStorage. (token is decoded)
  Load token from localStorage when app initialization.

  Check expired time of the token

  Used with React Context
*/

// libaray used to decode jwt
import jwtDecode from "jwt-decode";

interface AppState {
  user: any;
}

const initialState: AppState = {
  user: null,
};

interface JwtToken {
  exp: number;
}

if (localStorage.getItem("jwtToken")) {
  const decodedToken: JwtToken = jwtDecode(localStorage.getItem("jwtToken") as string);

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("jwtToken");
  } else {
    initialState.user = decodedToken;
  }
}

function login(userData: any) {
  localStorage.setItem("jwtToken", userData.token);
  // ...
}

function logout() {
  localStorage.removeItem("jwtToken");
  // ...
}
