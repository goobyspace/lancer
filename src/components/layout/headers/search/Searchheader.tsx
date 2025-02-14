import { useState } from "react";
import "./Searchheader.scss";
import Search from "@/assets/search.svg";

function Searchheader({
  className,
  setSearch,
}: {
  className: string;
  setSearch: (search: string) => void;
}) {
  const [text, setText] = useState("");
  const [input, setInput] = useState<HTMLInputElement | null>(null);
  return (
    <form
      className="search-header"
      onSubmit={(e) => {
        e.preventDefault();
        setSearch(text);
        setText("");
        if (input) input.focus(); //incase we clicked the button, set focus to text so they can start typing again
      }}
    >
      <input
        className={`header search ${className}`}
        type="text"
        placeholder="Search keyword..."
        value={text}
        ref={(input) => setInput(input)}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="search-button">
        <img src={Search}></img>
      </button>
    </form>
  );
}

export default Searchheader;
