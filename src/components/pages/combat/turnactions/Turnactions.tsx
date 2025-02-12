import "./Turnactions.scss";

function TurnActions() {
  return (
    <div className="turn-actions">
      <h6 className="turn-actions-title">Turn Actions</h6>
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
    </div>
  );
}

export default TurnActions;
