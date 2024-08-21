import React, { useEffect, useState } from "react";
import LetterPullup from "../../components/magicui/letter-pullup";
import IMG from "../../assets/FotoCV.png";

const AboutMe = ({ isDarkMode }) => {
  const [currentText, setCurrentText] = useState("SANTINO BERTOLA");

  useEffect(() => {
    const texts = [
      "Santino Bertola",
      "Full Stack Web Developer",
      "Computer Engineer Student",
    ];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setCurrentText(texts[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex justify-between gap-10 mt-40">
         <div className="w-full max-w-[600px]">
          <LetterPullup words="Hello, I'm" className={isDarkMode ? "text-white" : "text-black"} delay={0.05} />

          <div className="text-4xl">
            <LetterPullup words={currentText} key={currentText} delay={0.05} />
          </div>
        </div>

        <div>
        <div className="flex-shrink-0">
          <img
            src={IMG}
            alt="Santino Bertola"
            className={`w-80 h-80 object-cover rounded-xl border-4 ${isDarkMode ? 'border-gray-400' : 'border-black'} shadow-lg`}
          />
        </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
