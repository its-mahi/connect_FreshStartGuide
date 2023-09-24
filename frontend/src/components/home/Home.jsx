import React from "react";
import Cards from "./Cards";
import explore from "../../assets/explore.jpeg";
import videoChat from "../../assets/video_chat.jpg";
import noteShare from "../../assets/notes.jpeg";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const cardData = [
    {
      title: "Explore Blogs",
      disc: "Explore our diverse collection of blogs created by students for students. Dive into a world of insights, knowledge, and experiences that cover a wide range of topics, from academic tips and career advice to lifestyle hacks and personal growth stories. Whether you're seeking inspiration, guidance, or simply a break from your studies, our blog section is a hub of valuable content crafted to enrich your student journey. ",
      imgSrc: explore,
    },
    {
      title: "Query rooms",
      disc: "Query Rooms, our innovative video chat system, offers students a versatile and secure space for meaningful interactions. With Query Rooms, students can effortlessly create video chat rooms tailored to their specific needs, whether it's for collaborative study sessions, virtual classrooms, or social gatherings. Our platform prioritizes user privacy and data protection, ensuring a safe and confidential environment. ",
      imgSrc: videoChat,
    },
    {
      title: "Share your Notes",
      disc: "In our Notes section, students have access to a powerful tool for efficient organization and retention of their study materials. With a user-friendly interface, students can easily create, upload, and manage their notes, ensuring that their valuable study resources are always at their fingertips. Whether it's class lecture notes, research findings , study materials, our Notes section allows students to categorize, search, and review their notes conveniently.",
      imgSrc: noteShare,
    },
  ];

  return (
    <>
      <div className="mt-24 mb-10">
        <div className="text-white text-sm mb-6">
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              1000,
              "Welcome to Connect: Where Students Collaborate.",
              1000,
              "Welcome to Connect: Where Students Inspire.",
              1000,
              "Welcome to Connect: Where Students Explore.",
              1000,

            ]}
            speed={1}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </div>
        <h1 className="text-xl text-red-500 font-extrabold">Why Connect?</h1>
        <h2 className="text-2xl text-white w-1/3 font-bold m-auto">
          Making learning easier and more convenient for you.
        </h2>
      </div>

      <div className="flex flex-wrap ">
        {cardData.map((item, i) => {
          return (
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <Cards title={item.title} disc={item.disc} imgSrc={item.imgSrc} />
            </div>
          );
        })}
      </div>
    </>
  );
}
