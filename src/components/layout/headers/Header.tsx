import "./Headers.scss";

function Header({
  headers,
  selected,
  setHeader,
}: {
  headers: string[];
  selected: string;
  setHeader: (header: string) => void;
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
    </div>
  );
}

export default Header;
