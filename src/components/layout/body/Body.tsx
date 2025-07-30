import "./Body.scss";
import Player from "@/pages/player/Player";
import Store from "@/pages/store/Store";
import Searchresults from "@/pages/search/Searchresults";
function Body({ page, search }: { page: string; search: string }) {
  console.log(page);
  console.log(search);
  return (
    <div className="body">
      {page === "player" && <Player />}
      {page === "store" && <Store />}
      {page === "search" && <Searchresults search={search} />}
    </div>
  );
}

export default Body;
