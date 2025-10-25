import dropdown from "@/assets/dropdown.svg";
import dropup from "@/assets/dropup.svg";
import "./Item.scss";
import * as React from "react";

export default function Item({
  name,
  tags,
  description,
  flavour,
  price,
  rank,
  id,
}: {
  name: string;
  tags?: string[];
  description: string;
  flavour?: string;
  price: number;
  rank?: number;
  id: number;
  key?: string;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  if (!name || !description || !price) {
    return null;
  }

  return (
    <div className={`store-item ${isOpen ? "open" : "closed"}`}>
      <div className="store-item-header" onClick={() => toggleSection()}>
        <h2 className="store-item-title">
          {id}. {name} {tags?.map((tag) => `[${tag}]`).join(" ") || ""}
        </h2>
        <div className="store-item-right">
          <span className="store-item-price">
            {price.toString()} <span className="manna">M</span>
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
