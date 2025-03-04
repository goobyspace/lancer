import "./Turnactions.scss";
import Section from "@/components/layout/section/Section";

function TurnActions() {
  return (
    <Section title="Turn Actions" colour="red" className="turn-actions">
      <div className="turn-action">
        <p>GET 1:</p>
        <div className="turn-action-options">
          <div className="arrows end" />
          <p className="move">MOVE</p>
        </div>
      </div>
      <div className="turn-action">
        <p>CHOOSE 1:</p>
        <div className="turn-action-options">
          <div className="arrows middle" />
          <p className="full">FULL</p>
        </div>
        <div className="turn-action-options">
          <div className="arrows end" />
          <p>QUICK</p>
          <span>+</span>
          <p>QUICK</p>
        </div>
      </div>
      <div className="turn-action">
        <p>ONCE PER TURN, OVERCHARGE FOR:</p>
        <div className="turn-action-options">
          <div className="arrows-margin" />
          <p>QUICK</p>
          <span>+</span>
          <p className="heat">HEAT</p>
        </div>
      </div>
      <div className="turn-action">
        <p>EXTRA:</p>
        <div className="turn-action-options">
          <div className="arrows end" />
          <p className="free">FREE</p>
        </div>
      </div>
      <div className="turn-action">
        <p>ONCE FOR EACH TURN IN THE ROUND:</p>
        <div className="turn-action-options">
          <div className="arrows end" />
          <p className="reaction">REACTION</p>
        </div>
      </div>
    </Section>
  );
}

export default TurnActions;
