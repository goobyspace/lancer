import { useState } from "react";
import "./Section.scss";
import dropdown from "@/assets/dropdown.svg";
import dropup from "@/assets/dropup.svg";

function Section({
  title,
  colour,
  className,
  children,
}: {
  title: string;
  colour: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`section section-${colour} ${className} ${
        isOpen ? "open" : "closed"
      }`}
    >
      <div className="section-header" onClick={toggleSection}>
        <h1>{title}</h1>
        <img
          src={isOpen ? dropdown : dropup}
          alt="dropdown"
          className="section-dropdown"
        />
      </div>

      <div className="section-body">
        <div className="section-div">{children}</div>
      </div>
    </div>
  );
}

export default Section;
