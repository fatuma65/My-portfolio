import { useState } from "react";
import "./FormStyle.css";

const FormContact = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const handlingChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formData),
      setFormData({
        Name: "",
        Email: "",
        Message: "",
      });
  };
  return (
    <div className="contact-form">
      <form className="contact" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          required
          name="Name"
          value={formData.Name}
          onChange={handlingChange}
        />

        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          required
          name="Email"
          value={formData.Email}
          onChange={handlingChange}
        />
        <label>Message</label>
        <textarea
          cols={25}
          rows={3}
          required
          placeholder="enter your message"
          name="Message"
          value={formData.Message}
          onChange={handlingChange}
        ></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default FormContact;
