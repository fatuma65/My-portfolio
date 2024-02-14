import Footer from "../components/Footer";
import FormContact from "../components/FormContact";
import HeroImage2 from "../components/HeroImage2";
import NavBar from "../components/NavBar";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroImage2 heading="CONTACT" text="Lets have a chat" />
      <FormContact />
      <Footer />
    </div>
  );
};

export default Contact;
