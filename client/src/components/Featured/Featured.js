import { useState, useEffect } from "react";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";
import axios from "axios";

export default function Featured({ type }) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const getRandomMovie = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWY0ZmU0MjBmYTEyYzUzMWRhM2QxZSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTk4NjQxNTIsImV4cCI6MTY2MDI5NjE1Mn0.nY6OZkPWO5EQHujN2nxpNmFmmYVu6xKXn_VI3AbPKJc",
          },
        });

        // console.log("featured data : ", res.data); [res.data]
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };

    getRandomMovie();
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={content?.img} alt="" />

      <div className="info">
        <img src={content?.imgTitle} alt="" />
        <span className="title">{content?.title}</span>
        <span className="desc">{content?.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
