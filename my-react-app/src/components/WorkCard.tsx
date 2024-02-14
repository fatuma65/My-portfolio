import { NavLink } from "react-router-dom";
import "./WorkCardStyles.css";

interface props {
  imgsrc: string;
  title: string;
  text: string;
  view: string;
}
const WorkCard = ({ imgsrc, title, text, view }: props) => {
  // we are fetching data from workcarddata.tsx file
  return (
    <div className="project-card">
      <img src={imgsrc} alt="image"></img>
      <h2 className="project-title">{title}</h2>
      <div className="pro-details">
        <p>{text}</p>
        <div className="pro-btns">
          <NavLink to={view} className="btn">
            View
          </NavLink>
          <NavLink to="url.com" className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
