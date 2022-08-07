import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
import { useLocation, Link } from "react-router-dom";

export default function Watch() {
  const location = useLocation();

  const movie = location.movie;
  console.log(movie);

  return (
    <div className="watch">
      <div className="back">
        <Link to="/">
          <ArrowBackOutlined />
          Home
        </Link>
      </div>
      <video className="video" autoPlay progress controls src={movie?.video} />
    </div>
  );
}
