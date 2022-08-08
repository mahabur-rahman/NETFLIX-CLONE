import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState } from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import axios from "axios";

export default function Home() {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWY0ZmU0MjBmYTEyYzUzMWRhM2QxZSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTk4NjQxNTIsImV4cCI6MTY2MDI5NjE1Mn0.nY6OZkPWO5EQHujN2nxpNmFmmYVu6xKXn_VI3AbPKJc",
          },
        });

        const statsList = res.data.sort((a, b) => {
          return a._id - b._id;
        });

        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );

        // res.data.map((item) =>
        //   setUserStats((prev) => [
        //     ...prev,
        //     { name: MONTHS[item._id - 1], "New User": item.total },
        //   ])
        // );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  console.log(userStats);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        // data={userData}
        data={userStats}
        title="User Analytics"
        grid
        dataKey="New User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
