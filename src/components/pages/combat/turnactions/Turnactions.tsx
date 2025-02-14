import "./Turnactions.scss";
import Section from "@/components/layout/section/Section";

function TurnActions() {
  return (
    <Section title="Turn Actions" colour="red" className="turn-actions">
      <div className="turn-action">
        <p>GET 1:</p>
        <div className="turn-action-options">
          <div className="arrows end" />
          <p className="move">[K]MOVE</p>
        </div>
      </div>
      <div className="turn-action">
        <p>CHOOSE 1:</p>
        <div className="turn-action-options">
          <div className="arrows middle" />
          <p className="full">[k]FULL</p>
        </div>
        <div className="turn-action-options">
          <div className="arrows end" />
          <p>[k]QUICK</p>
          <span>+</span>
          <p>[k]QUICK</p>
        </div>
      </div>
      <div className="turn-action">
        <p>ONCE PER TURN, [k]OVERCHARGE FOR:</p>
        <div className="turn-action-options">
          <div className="arrows-margin" />
          <p>[k]QUICK</p>
          <span>+</span>
          <p className="heat">[k]HEAT</p>
        </div>
      </div>
      <div className="turn-action">
        <p>EXTRA:</p>
        <div className="turn-action-options">
          <div className="arrows end" />
          <p className="free">[k]FREE</p>
        </div>
      </div>
      <div className="turn-action">
        <p>ONCE FOR EACH TURN IN THE ROUND:</p>
        <div className="turn-action-options">
          <div className="arrows end" />
          <p className="reaction">[k]REACTION</p>
        </div>
      </div>
    </Section>
  );
}

export default TurnActions;
