import { useState, useEffect } from "react";
import { Visibility } from "@material-ui/icons";
import "./widgetSm.css";
import axios from "axios";

export default function WidgetSm() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWQyZmFkYTZmNzhlOWIwOTc3NDBlZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTg0NDMxMywiZXhwIjoxNjYwMjc2MzEzfQ.x0pq288WdL6Ubb_y7pm2IFkt9MGnjcrilgzNIEg1cok",
          },
        });
        setUserData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {userData?.map((user) => {
          return (
            <li className="widgetSmListItem">
              <img
                src={
                  user.profilePic ||
                  "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
                }
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{user.username}</span>
                <span className="widgetSmUserTitle">{user.email}</span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
