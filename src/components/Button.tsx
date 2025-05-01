import React from "react";

interface ButtonProps {
  className?: string;
  id?: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ className = "", id, text }) => {
  return (
    <a href="#" className={`${className} cta-wrapper`} id={id}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
