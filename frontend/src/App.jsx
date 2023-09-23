import "../styles/App.css";
import PaticlesBackground from "./components/PaticlesBackground";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import BlogPage from "./components/blog/BlogPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// import Blog from "./components/Blog";
// import Modal from "./components/Modal"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <PaticlesBackground />
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Nav />
      <main className="flex-grow">
        <BlogPage />
      </main>
      <Footer /> */}
    </div>
  );
}

export default App;
