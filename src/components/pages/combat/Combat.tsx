import TurnActions from "./turnactions/Turnactions";
import Movement from "./movement/Movement";
import Fullaction from "./fullaction/Fullaction";
import Quickaction from "./quickaction/Quickaction";
import Otheraction from "./otheraction/Otheraction";
import Reactions from "./reactions/Reactions";
import Heat from "./heat/Heat";
import Turns from "./turns/Turns";
import "./Combat.scss";

function Combat() {
  return (
    <>
      <div className="column">
        <TurnActions />
        <Fullaction />
        <Quickaction />
        <Otheraction />
      </div>
      <div className="column">
        <Movement />
        <Reactions />
        <Heat />
        <Turns />
      </div>
    </>
  );
}

export default Combat;
