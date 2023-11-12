import React, { useEffect, useState } from "react";
import ProfileBlog from "./ProfileBlog";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import ProfileTabs from "./ProfileTabs";
import ProfileNotes from "./ProfileNotes";
import ProfileRooms from "./ProfileRooms";

export default function Profile(props) {
  const { user } = useSelector((state) => state);
  const [blogData, setBlogs] = useState([]);
  const [notes, setNotes] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [toggler, setToggler] = useState(true);
  const [loader, setLoader] = useState(false);

  const [activeTab, setActiveTab] = useState('blogs');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const getData = () => {
      setLoader(true);
      axios
        .get("https://connect-qbpn.onrender.com/api/v1/profile/" + user._id, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((response) => {
          // console.log(user._id);
          setLoader(false);
          setBlogs(response.data.user.blogs);
        })
        .catch((err) => {
          console.log("Error" + err.message);
        });
    };

    const getNotesData = ()=>{
      setLoader(true);
      axios
        .get("https://connect-qbpn.onrender.com/api/v1/getAllNotes" ,{
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((response) => {
          // console.log(user._id);
          setLoader(false);
          const userNotes = response.data.notes.filter((note) => note.author._id === user._id);
          setNotes(userNotes);
          // console.log(response.data.notes)
        }) 
        .catch((err) => {
          console.log("Error" + err.message);
        });
      }


      const getRoomsData=()=>{
        setLoader(true);
      axios
        .get("https://connect-qbpn.onrender.com/api/v1/AllLink" ,{
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((response) => {
          // console.log(user._id);
          setLoader(false);
          // console.log(response)
          const userRooms = response.data.links.filter((room) => room.user._id === user._id);
          setRooms(userRooms);
          // console.log(response.data.notes)
        }) 
        .catch((err) => {
          console.log("Error" + err.message);
        });
      }

      getData();
      getNotesData();
      getRoomsData();
  }, [toggler]);

  const toggleToggler = () => {
    setToggler(!toggler);
  };

  const [currUser, setCurrUser] = useState(user.name);
  // const blogData = user.blogs;
  // console.log(blogData);

  return (
    <>
      {!props.isLoggedIn && <Navigate to="/login" />}

      <div>
        <div className="p-4 md:p-8 lg:p-16 ">
          <div className=" mt-8 md:mt-24 bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 border border-gray-100 p-10 shadow-[0_0px_5px_rgba(8,_140,_150,_0.7)] md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="order-2 md:order-1 text-center md:mt-4 mt-10 ">
                <div>
                  <h1 className="text-4xl font-medium text-white md:mt-0 mt-[100px]">
                    {currUser}
                  </h1>
                  <p className="font-light text-white mt-3">{user.email}</p>
                </div>
              </div>
              <div className="relative ">
                <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                  <img
                    src={user.avtar.url}
                    className="rounded-3xl shadow-2xl"
                    alt=""
                  />
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="space-x-8 flex justify-between mt-6  md:justify-center">
              <button className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 text-md">
                {" "}
                Logout
              </button>{" "}
            </div>{" "}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ThreeDots
                height="100"
                width="100"
                radius="7"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={loader}
              />
            </div>
            <ProfileTabs activeTab={activeTab} onTabChange={handleTabChange} />
            <div className="profile-content">
              {activeTab === "blogs" && blogData.map((item, i) => {
              return (
                <div className="m-4" key={item._id}>
                  <ProfileBlog
                    title={item.title}
                    description={item.description}
                    createdAt={item.createdAt}
                    id={item._id}
                    toggleToggler={toggleToggler}
                    key={i}

                  />
                </div>
              );
            })} 
              {activeTab === "notes" &&  <ProfileNotes notes={notes} />}
              {activeTab === "rooms" && <ProfileRooms rooms={rooms} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
