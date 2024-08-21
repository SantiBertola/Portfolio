import React, { useEffect, useState } from "react";
import "../../styles/AboutMe.css";
import IMG from "../../assets/FotoCV.png";

const AboutMe = () => {
  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFullText(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
}, []);

  return (
    <>
      <div className="flex justify-between gap-10 mt-40">
        <div className="about-me-text">
          <h2 className="text-2xl">HELLO, I'M</h2>
          <h1 className={`text-4xl ${showFullText ? "text-intro" : "text-reveal"}`}>
          <div className={`text-content ${showFullText ? "show" : "hide"}`}>
            SANTINO BERTOLA
          </div>
          <div className={`text-content ${showFullText ? "hide" : "show"}`}>
            <div>Full Stack Web Dev</div>
            <div className="text-lg">Computer Engineer Student</div>
          </div>
        </h1>
        </div>

        <div>
          <div>
             <img src={IMG} alt="Santino Bertola" className="w-60 h-60 object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
