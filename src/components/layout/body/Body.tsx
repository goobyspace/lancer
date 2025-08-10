import "./Body.scss";
import Player from "@/pages/player/Player";
import Store from "@/pages/store/Store";
import Searchresults from "@/pages/search/Searchresults";
import JobBoard from "@/pages/job-board/JobBoard";
import Upgrades from "@/pages/upgrades/Upgrades";
function Body({ page, search }: { page: string; search: string }) {
  return (
    <div className="body">
      {page === "player" && <Player />}
      {page === "store" && <Store />}
      {page === "upgrades" && <Upgrades />}
      {page === "job board" && <JobBoard />}
      {page === "search" && <Searchresults search={search} />}
    </div>
  );
}

export default Body;
