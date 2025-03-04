import Section from "@/components/layout/section/Section";
import "./Turns.scss";
import { Categories } from "lancer-keyword";

function Turns() {
  return (
    <Section title="Turns" className="turns" colour="black">
      <div className="turns-turn">
        <p>PLAYERS START: PICK FIRST PLAYER</p>
        <div className="turns-turn-options">
          <div className="arrows end" />
          <p className="player">ALLY</p>
        </div>
      </div>
      <div className="turns-turn">
        <p>DM PICKS:</p>
        <div className="turns-turn-options">
          <div className="arrows end" />
          <p className="enemy">ENEMY</p>
        </div>
      </div>
      <div className="turns-turn">
        <div className="turns-turn-options">
          <div className="arrows middle" />
          <p className="text">previous player picks:</p>
        </div>
        <div className="turns-turn-options">
          <div className="arrows middle" />
          <p className="player">ALLY</p>
        </div>
        <div className="turns-turn-options">
          <div className="arrows middle" />
          <p className="text">dm picks:</p>
        </div>
        <div className="turns-turn-options">
          <div className="arrows middle" />
          <p className="enemy">ENEMY</p>
        </div>
        <div className="turns-turn-options">
          <div className="arrows end" />
          <p className="text">Repeat until one side runs out</p>
        </div>
      </div>
      <div className="turns-turn">
        <p>
          NEXT ROUND: OPPOSITE SIDE OF LAST{" "}
          <lancer-keyword keyword={Categories.combat.keywords.turn} /> STARTS
        </p>
        <div className="turns-turn-options">
          <div className="arrows-margin" />
          <p className="enemy">ENEMY</p>
          <span>/</span>
          <p className="player">ALLY</p>
        </div>
      </div>
    </Section>
  );
}

export default Turns;
