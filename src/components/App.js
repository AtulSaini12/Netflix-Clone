import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

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
  return (
    <div className="app">
      <Router>
        <div>
          <Navbar />
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
