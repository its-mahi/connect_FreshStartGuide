import Card from "react-animated-3d-card";
import { useState } from "react";
import "/styles/Model.css" ;

export default function Blog() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("Kris Patel");
  const [blog, setBlog] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis suscipit officia recusandae, eveniet quaerat assumenda id fugit, dignissimos maxime non natus placeat illo iusto! Sapiente dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora vitae enim incidunt porro fuga ea."
  );

  const [bloddate, setBlogdate] = useState("69-69-69");

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const [showFront, setShowFront] = useState("Max Verstappen");

  return (
    <div className="mt-24">
       <Card
        onClick={toggleModal}
        cursorPointer={false}
        shineStrength={0.75}
        style={{
          background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
          width: "600px",
          height: "300px",
          cursor: "pointer",
        }}
      >
        <p>test</p>
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: "30px",
              fontFamily: "Fira Code",
              color: "white",
            }}
            onClick={console.log("prova")}
          >
            <label>{blog.slice(0, 100)}</label>
          </div>
        </div>
        <div>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "60px",
              left: "25px",
              opacity: 0.5,
            }}
          ></label>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "60px",
              right: "25px",
              opacity: 0.5,
            }}
          >
            Date:
          </label>
        </div>

        <div>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "25px",
              left: "25px",
              opacity: 1,
              fontSize: "25px",
            }}
          >
            {showFront}
          </label>
          <label
            style={{
              color: "white",
              position: "absolute",
              bottom: "25px",
              right: "25px",
              opacity: 1,
              fontSize: "25px",
            }}
          >
            {bloddate}
          </label>
        </div>
      </Card>


      {modal && (
        <div className="modal ">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content ">
            <h2>Hello Modal</h2>
            <p>{blog}</p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
