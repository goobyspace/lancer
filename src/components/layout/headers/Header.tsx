import Searchheader from "@/components/layout/headers/search/Searchheader";
import "./Headers.scss";

function Header({
  headers,
  selected,
  setHeader,
  setSearch,
}: {
  headers: string[];
  selected: string;
  setHeader: (header: string) => void;
  setSearch: (search: string) => void;
}) {
  return (
    <div className="headers">
      {headers.map((header) => (
        <button
          className={`header ${header === selected ? "selected" : ""}`}
          key={header}
          onClick={() => setHeader(header)}
        >
          {header}
        </button>
      ))}
      <Searchheader
        setSearch={setSearch}
        className={`${"search" === selected ? "selected" : ""}`}
      />
    </div>
  );
}

export default Header;
