import "./HeroImage2Styles.css";

interface prop {
    heading: string;
    text: string
}

const HeroImage2 = ({heading, text} : prop) => {
  return (
    <div className="hero-img">
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HeroImage2;
