import React from "react";
import "./Card.scss";

import phonesvg from "../assets/phone.svg";
import emailsvg from "../assets/email.svg";
import locationsvg from "../assets/location.svg";


const Card = ({ user }) => {
  const {
    picture: { medium },
    name: { title, first, last },
    email,
    cell,
    location: { city, country },
    dob: { age },
    registered: { date },
  } = user;

  return (
    <div className="content">
      <div className="image">
        <img src={medium} alt="" />
      </div>
      <h3>
        <span>{title}</span> <span>{first}</span> <span>{last}</span>
      </h3>
      <div className="svg">
        <img src={emailsvg} alt="email" />
      </div>
      <h4>{email}</h4>
      <div className="svg">
        <img src={phonesvg} alt="email" />
      </div>
      <h4>{cell}</h4>
      <div className="svg">
        <img src={locationsvg} alt="email" />
      </div>
      <h4><span>{country}</span> <span>{city}</span></h4>
      <h4 className="age">Age: {age}</h4>
      <h4 className="regdate">Register Date: {date.substring(0,10)}</h4>
    </div>
  );
};

export default Card;
