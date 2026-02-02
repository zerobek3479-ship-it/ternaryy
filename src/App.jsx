import React from "react";
import Left from "./components/left/Left";


const data = [
  {
    icon: "⬜",
    title: "Dashboard",
  },
  {
    icon: "📔",
    title: "Dashboard",
  },
  {
    icon: "📃",
    title: "Dashboard",
  },
  {
    icon: "👥",
    title: "Discussion",
  },
  {
    icon: "📆",
    title: "Calendar",
  },
  {
    icon: "🎇",
    title: "Settings",
  },
];
const second = [
  {
    url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ2bf826R9VHcNH3g8Blzf50TCT90v38FV9PjrNe98-cY-SxfVZ",
    title: "Design 3D",
    subtitle: "Art and Design",
    icons: "👥",
    button: ">",
  },
  {
    url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ2bf826R9VHcNH3g8Blzf50TCT90v38FV9PjrNe98-cY-SxfVZ",
    title: "Interactive Sosial",
    subtitle: "Art and Design",
    icons: "👥",
    button: ">",
  },
  {
    url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ2bf826R9VHcNH3g8Blzf50TCT90v38FV9PjrNe98-cY-SxfVZ",
    title: "Calculating Data",
    subtitle: "Art and Design",
    icons: "👥",
    button: ">",
  },
];
const tasks = [
  {
    id: 1,
    title: "Natural science",
    date: "24 April 2024, 12.30",
  },
  {
    id: 2,
    title: "Basic Mathematic",
    date: "24 April 2024, 12.30",
  },
  {
    id: 3,
    title: "English Lessons",
    date: "24 April 2024, 12.30",
  },
];
const datanumber = [
  {
    date: "Mon, April 29 2024",
    time: "8.00",
    subject: "Plant Research",
    room: "Science Laboratory",
  },
  {
    date: "Tue, April 30 2024",
    time: "9.00",
    subject: "English",
    room: "Classroom",
  },
  {
    date: "Wed, May 1 2024",
    time: "8.00",
    subject: "Mathematics",
    room: "Classroom",
  },
];

const two = [{}];

const App = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "start",
      }}
    >
      <Left datas={datanumber} tasks={tasks} two={two} second={second} data={data} />
      <Middle />
      <Right />
    </div>
  );
};

export default App;
