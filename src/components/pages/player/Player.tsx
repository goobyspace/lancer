import TurnActions from "./turnactions/Turnactions";
import Movement from "./movement/Movement";
import Actions from "./actions/Actions";
import Reactions from "./reactions/Reactions";
import Heat from "./heat/Heat";
import Turns from "./turns/Turns";
import Range from "./range/Range";
import "./Player.scss";

function Player() {
  return (
    <>
      <div className="column">
        <TurnActions />
        <Actions />
        <Reactions />
      </div>
      <div className="column">
        <Movement />
        <Range />
        <Heat />
        <Turns />
      </div>
    </>
  );
}

export default Player;
