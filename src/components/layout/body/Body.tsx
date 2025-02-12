import "./Body.scss";
import Combat from "@/pages/combat/Combat";
import Mech from "@/pages/mech/Mech";
import Pilot from "@/pages/pilot/Pilot";
import Setting from "@/pages/setting/Setting";

function Body({ page }: { page: string }) {
  return (
    <div className="body">
      {page === "combat" && <Combat />}
      {page === "pilot" && <Pilot />}
      {page === "mech" && <Mech />}
      {page === "setting" && <Setting />}
    </div>
  );
}

export default Body;
