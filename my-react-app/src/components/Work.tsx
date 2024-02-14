import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import "./WorkCardStyles.css";

const Work = () => {
  return (
    // this will come from the work card.tsx file
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val, index) => {
          return (
            <WorkCard
              key={index}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
