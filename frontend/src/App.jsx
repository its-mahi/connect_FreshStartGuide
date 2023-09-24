import "../styles/App.css";
import { useEffect, useState } from "react";
import PaticlesBackground from "./components/PaticlesBackground";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import BlogPage from "./components/blog/BlogPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NotesPage from "./components/notes/NotesPage";
import Profile from "./components/profile/Profile";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import QueryPage from "./components/queryroom/QueryPage";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const loadUser =  () => {
    axios
    .get("http://localhost:8000/api/v1/profilee/me", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((response) => {
        dispatch({ type: "SET_USER" ,payload:response.data.user});
        if(response.data.user)
        setIsLoggedIn(true);
      });
  }

  useEffect(()=>{
     loadUser()
    
  },[])

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <PaticlesBackground />
        <Nav toggleLogin={toggleLogin} isLoggedIn={isLoggedIn} />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<Home isLoggedIn={isLoggedIn} />}
            />
            <Route
              path="/query"
              element={<QueryPage isLoggedIn={isLoggedIn} />}
            />
            <Route
              path="/register"
              element={<Register isLoggedIn={isLoggedIn} />}
            />
            <Route
              path="/login"
              element={
                <Login toggleLogin={toggleLogin} isLoggedIn={isLoggedIn} />
              }
            />
            <Route
              path="/blogs"
              element={<BlogPage isLoggedIn={isLoggedIn} />}
            />
            <Route
              path="/notes"
              element={<NotesPage isLoggedIn={isLoggedIn} />}
            />
            <Route
              path="/profile"
              element={<Profile isLoggedIn={isLoggedIn} />}
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
