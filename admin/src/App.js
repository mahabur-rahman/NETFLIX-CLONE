import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import MovieList from "./pages/movieList/MovieList";
import Movie from "./pages/movie/Movie";
import NewMovie from "./pages/newMovie/NewMovie";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import ListOfList from "./pages/ListOfList/ListOfList";
import List from "./pages/list/List";
import NewList from "./pages/newList/newList";

function App() {
  const { user } = useContext(AuthContext);
  // console.log(user);

  return (
    <Router>
      <Route path="/login">
        {user ? <Redirect to="/" /> : <Login />}
        {/* <Login /> */}
      </Route>

      {user ? (
        <>
          <Topbar />

          <div className="container">
            <Sidebar />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/movies">
                <MovieList />
              </Route>
              <Route path="/product/:productId">
                <Movie />
              </Route>
              <Route path="/new-movie">
                <NewMovie />
              </Route>

              <Route path="/lists">
                <ListOfList />
              </Route>

              <Route path="/list/:listId">
                <List />
              </Route>

              <Route path="/new-list">
                <NewList />
              </Route>
            </Switch>
          </div>
        </>
      ) : (
        <Login />
      )}
    </Router>
  );
}

export default App;
