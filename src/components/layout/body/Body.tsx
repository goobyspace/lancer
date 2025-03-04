import "./Body.scss";
import Player from "@/pages/player/Player";
import DM from "@/pages/dm/DM";
import Searchresults from "@/pages/search/Searchresults";
function Body({ page, search }: { page: string; search: string }) {
  return (
    <div className="body">
      {page === "player" && <Player />}
      {page === "dm" && <DM />}
      {page === "search" && <Searchresults search={search} />}
    </div>
  );
}

export default Body;
