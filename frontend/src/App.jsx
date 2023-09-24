import "../styles/App.css";
import { useState } from "react";
import PaticlesBackground from "./components/PaticlesBackground";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import BlogPage from "./components/blog/BlogPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NotesPage from "./components/notes/NotesPage";
import Profile from "./components/profile/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => {
    console.log("Hey");
    setIsLoggedIn(!isLoggedIn);
  };

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
