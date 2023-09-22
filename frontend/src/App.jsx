import "../styles/App.css";
import PaticlesBackground from "./components/PaticlesBackground";
import Login from "./components/Login";
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
      {/* <Modal/> */}
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>

      <Footer />
      {/* <Login /> */}
    </>
  );
}

export default App;
