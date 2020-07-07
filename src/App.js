import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";

import Login from "./pages/Login/Login";
import PrivateRoute from "./helper/PrivateRoute/PrivateRoute";
import UserPage from "./pages/UserPage/UserPage";
import DetailPokemon from "./pages/DetailPokemon/DetailPokemon";

function App() {
  // let activeUser = localStorage.getItem("user");
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <PrivateRoute exact path="/userpage">
            <UserPage />
          </PrivateRoute>

          <PrivateRoute exact path="/pokemon/:name">
            <DetailPokemon />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
