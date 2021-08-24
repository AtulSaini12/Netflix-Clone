import React, { useEffect } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../Firebase/firebase";

import "./App.css";
import {
  Navbar,
  Row,
  Home,
  Page404,
  LoginPage,
  ProfilePage,
  MoviePage,
} from "./index";
import { login, logout, selectUser } from "../features/userSlice";

// const PrivateRoute = (privateRouteProps) => {
//   const { isLoggedin, path, component: Component } = privateRouteProps;

//   return (
//     <Route
//       path={path}
//       render={(props) => {
//         console.log("props", props);
//         console.log("isLoggedin", isLoggedin);
//         return isLoggedin ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: {
//                 from: props.location,
//               },
//             }}
//           />
//         );
//       }}
//     />
//   );
// };

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //logged out
        dispatch(logout);
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/home" component={Home} />
            <Route path="/movie" component={MoviePage} />
            <Route path="/profile" component={ProfilePage} />

            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
