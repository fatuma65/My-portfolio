import Footer from "../components/Footer";
import HeroImage2 from "../components/HeroImage2";
import NavBar from "../components/NavBar";
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <NavBar />
      <HeroImage2 heading="PROJECTS" text="Some of my recent works." />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Project;
