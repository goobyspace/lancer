import { useState } from "react";
import "./Section.scss";

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
      <h1 className="section-header" onClick={toggleSection}>
        {title}
      </h1>
      <div className="section-body">
        <div className="section-div">{children}</div>
      </div>
    </div>
  );
}

export default Section;
