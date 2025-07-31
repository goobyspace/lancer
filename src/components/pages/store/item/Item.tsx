import dropdown from "@/assets/dropdown.svg";
import dropup from "@/assets/dropup.svg";
import { useState } from "react";
import "./Item.scss";

function Store({
  name,
  tags,
  description,
  flavour,
  price,
  rank,
}: {
  name: string;
  tags?: string[];
  description: string;
  flavour?: string;
  price: number;
  rank?: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`store-item ${isOpen ? "open" : "closed"}`}>
      <div className="store-item-header" onClick={() => toggleSection()}>
        <h2 className="store-item-title">
          {name} {tags?.map((tag) => `[${tag}]`).join(" ") || ""}
        </h2>
        <div className="store-item-right">
          <span className="store-item-price">
            {price.toLocaleString("en", { useGrouping: true })}{" "}
            <span className="manna">M</span>
          </span>
          <img
            src={isOpen ? dropdown : dropup}
            alt="dropdown"
            className="section-dropdown"
          />
        </div>
      </div>
      <div
        className={`store-item-details ${
          rank === 1 ? "one" : rank === 2 ? "two" : ""
        }`}
      >
        <div className="store-item-container">
          {rank && <p className="store-item-rank">{rank}</p>}
          <p className="store-item-description">{description}</p>
          {flavour && <p className="store-item-flavour">{flavour}</p>}
        </div>
      </div>
    </div>
  );
}

export default Store;
