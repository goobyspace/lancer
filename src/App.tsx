import { useEffect, useState } from "react";
import "./sass/App.scss";
import Header from "./components/layout/headers/Header";
import License from "./components/layout/license/License";
import Cookies from "universal-cookie";
import Body from "./components/layout/body/Body";
import { headers } from "./components/layout/headers";

function App() {
  const [page, setPage] = useState(headers[0]);
  const [cookies, setCookies] = useState<Cookies>();
  const [search, setSearch] = useState("");

  const setHeader = (header: string) => {
    setPage(header);
    cookies?.set("header", header, { path: "/" });
  };

  const onSearch = (search: string) => {
    setSearch(search);
    setPage("search");
  };

  useEffect(() => {
    const header = cookies?.get("header");
    if (header) {
      setPage(header);
    }
  }, [cookies]);

  useEffect(() => {
    setCookies(new Cookies(null, { path: "/", sameSite: "strict" }));
  }, []);

  return (
    <>
      <div className="page">
        <Header
          headers={headers}
          setHeader={setHeader}
          selected={page}
          setSearch={onSearch}
        />
        <div className="content">
          <Body page={page} search={search} />
          <License />
        </div>
      </div>
    </>
  );
}

export default App;
