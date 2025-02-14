import "./Body.scss";
import Combat from "@/pages/combat/Combat";
import Mech from "@/pages/mech/Mech";
import Pilot from "@/pages/pilot/Pilot";
import Setting from "@/pages/setting/Setting";
import Searchresults from "@/pages/search/Searchresults";
function Body({ page, search }: { page: string; search: string }) {
  return (
    <div className="body">
      {page === "combat" && <Combat />}
      {page === "pilot" && <Pilot />}
      {page === "mech" && <Mech />}
      {page === "setting" && <Setting />}
      {page === "search" && <Searchresults search={search} />}
    </div>
  );
}

export default Body;
