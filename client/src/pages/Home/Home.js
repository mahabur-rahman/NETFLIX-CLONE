import React, { useEffect, useState } from "react";
// home style
import "./home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Featured from "../../components/Featured/Featured";
import List from "../../components/List/List";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  // http:localhost:4000/api/lists?type=movie&genre=crime

  useEffect(() => {
    const getRandomlists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWY0ZmU0MjBmYTEyYzUzMWRhM2QxZSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTk4NjQxNTIsImV4cCI6MTY2MDI5NjE1Mn0.nY6OZkPWO5EQHujN2nxpNmFmmYVu6xKXn_VI3AbPKJc",
            },
          }
        );

        // console.log(res);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getRandomlists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists?.map((list) => (
        <List list={list} />
      ))}
      {/* <List />
      <List />
      <List /> */}
    </div>
  );
};

export default Home;
