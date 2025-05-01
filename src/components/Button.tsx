import React from "react";

interface ButtonProps {
    className?: string;
    id?: string;
    text: string;
}

const Button: React.FC<ButtonProps> = ({ className = "", id, text }) => {
    return (
        <a
            href="#"
            className={`${className} cta-wrapper`}
            id={id}
            onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("counter");
                if (target && id) {
                    const offset = window.innerWidth * 0.15;

                    const top =
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        offset;
                    target.scrollTo({ top, behavior: "smooth" });
                }
            }}
        >
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
