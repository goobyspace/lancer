import Section from "@/components/layout/section/Section";
import { useState } from "react";
import "./Otheraction.scss";
import { ActionType } from "@/components/layout/tag/TypeEnum";
import Tag from "@/components/layout/tag/Tag";

function Otheraction() {
  const [showFull, setShowFull] = useState(true);
  const [showQuick, setShowQuick] = useState(true);

  const toggleFull = () => {
    setShowFull(!showFull);
  };

  const toggleQuick = () => {
    setShowQuick(!showQuick);
  };

  return (
    <Section
      title="Other Actions"
      colour="red"
      className={`otheraction ${showFull ? "full" : ""} ${
        showQuick ? "quick" : ""
      }`}
    >
      <div className="otheraction-filter">
        <button onClick={toggleFull} className="otheraction-button button-full">
          Full
        </button>
        <button
          onClick={toggleQuick}
          className="otheraction-button button-quick"
        >
          Quick
        </button>
      </div>
      <div className="otheraction-body">
        <div className="otheraction-action full quick">
          <div>
            <Tag type={ActionType.Full} />
            <Tag type={ActionType.Quick} />
            [k]Activate: Activate a [k]system or [k]piece of gear, full or quick
            depending on its' [k]tag.
          </div>
        </div>
        <div className="otheraction-action full">
          <div>
            <Tag type={ActionType.Full} />
            [k]Boot up: Start up a mech that has been [k]shut down.{" "}
          </div>
        </div>
        <div className="otheraction-action full">
          <div>
            <Tag type={ActionType.Full} />
            [k]Mount & [k]dismount: Mount or dismount a mech.
          </div>
        </div>
        <div className="otheraction-action quick">
          <div>
            <Tag type={ActionType.Quick} />
            [k]Eject: Eject from your mech in an emergency. Careful! It leaves
            your mech [k]impaired.
          </div>
        </div>
        <div className="otheraction-action quick">
          <div>
            <Tag type={ActionType.Quick} />
            [k]Prepare: Spend a [k]quick action to turn another [k]quick action
            into a [k] reaction until your next [k]turn.
          </div>
        </div>
        <div className="otheraction-action quick">
          <div>
            <Tag type={ActionType.Quick} />
            [k]Self-destruct: Set your mech's reactor to explode within the next
            three [k]turns.
          </div>
        </div>
        <div className="otheraction-action quick">
          <div>
            <Tag type={ActionType.Quick} />
            [k]Shut down: Shut down your mech to prevent [k]tech attacks, [k]NHP
            [k]cascading or prevent [k]overheating.
          </div>
        </div>
        <div className="otheraction-action full">
          <div>
            <Tag type={ActionType.Full} />
            [k]Skill check: Decide on a skill check with the DM for actions not
            covered by any other [k]action.
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Otheraction;
