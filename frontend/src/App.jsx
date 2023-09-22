import "../styles/App.css";
import PaticlesBackground from "./components/PaticlesBackground";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import BlogPage from "./components/blog/BlogPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import BlogCard from "./components/BlogCard";
// import Blog from "./components/Blog";
// import Modal from "./components/Modal"

function App() {
  return (
    <>
      <PaticlesBackground />
      <Nav />
      <Footer />
      {/* <Login /> */}
      {/* <Register /> */}
    </>
  );
}

export default App;
