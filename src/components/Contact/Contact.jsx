import React,{useState} from "react";
import styles from "./contact.module.css";
import axios from "axios";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleName=(e)=>{
    setName(e.target.value)
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  const handleMessage=(e)=>{
    setMessage(e.target.value)
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const formData = {
      name: name,
      email: email,
      message: message
    }
    try{
      const response = await axios.post("http://localhost:3000/message",formData);
      if(response.status===200){
        setName("");
        setEmail("");
        setMessage("");
        alert("Message submitted successfully");
        console.log("working");
      }
    }
    catch(err){
      console.error(err);
    }
  }






  return (
    <section className={styles.container} id="contact">
      <div className={styles.leftContainer}>
        <h3 className={styles.title}>Contact</h3>
        <a className={styles.gmail} href="mailto:prabingiri922@gmail.com">
          prabingiri922@gmail.com
        </a>
        <div className={styles.socialIcons}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/prabeen-giri-2a8403203/"
          >
            <i id={styles.linkedin} className="fa-brands fa-linkedin-in"></i>
          </a>
          <a target="_blank" href="https://github.com/prabeen6260">
            <i id={styles.github} className="fa-brands fa-github"></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/prabingiri92/">
            <i id={styles.instagram} className="fa-brands fa-instagram"></i>
          </a>
          <a target="_blank" href="https://twitter.com/prabeen_giri92">
            <i id={styles.twitter} className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <form className={styles.formBox} action="/message" method="post">
          <input
            className={styles.name}
            type="text"
            placeholder="Your Name"
            required
            name="name"
            onChange={handleName}
          ></input>
          <input
            className={styles.email}
            type="email"
            placeholder="Your Email"
            required
            name="email"
            onChange={handleEmail}
          ></input>
          <textarea
            className={styles.textBox}
            placeholder="Your Message...."
            required
            name="message"
            onChange={handleMessage}
          ></textarea>
          <button className={styles.submitBtn} onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
