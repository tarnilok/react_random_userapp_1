import email from "./assets/email.svg";
import location from "./assets/location.svg";
import phone from "./assets/phone.svg";
import "./Card.css"
import axios from "axios";
import { useState, useEffect } from "react";

const Card = () => {
const [person, setPerson] = useState(false)

const fetcher = () => {
    axios.get("https://randomuser.me/api/")
    .then(response => {
        // console.log(response.data.results[0])
        setPerson(response.data.results[0])
    })
}

useEffect(() => {
    fetcher();
}, []);


  return (
    <>
      <div className="container">
        <div className="image Box">
          <img src= {person?.picture?.large} alt="passport" className="image" />
          <p className="name text">{person?.name?.title} {person?.name?.first} {person?.name?.last}</p>
        </div>
        <div className="email Box">
          <img src={email} alt="email" className="email svg"  />
          <p className="email text">{person?.email}</p>
        </div>
        <div className="phone Box">
          <img src={phone} alt="phone" className="phone svg" />
          <p className="phone text">{person?.phone}</p>
        </div>
        <div className="location Box">
          <img src={location} alt="location" className="location svg"/>
          <p className="location text">{person?.location?.country}/{person?.location?.city} </p>
        </div>
        <div className="age Box">
            <p className="age text2"><strong>Age :</strong> {person?.dob?.age}</p>
        </div>
        <div className="registerDate Box">
            <p className="registerDate text2"><strong>Register Date :</strong> {person?.registered?.date.slice(0,10)}</p>
        </div>
      </div>
      <button className="button" onClick={fetcher}>Random User</button>
    </>
  );
};

export default Card;
