import Section from "@/components/layout/section/Section";
import Tag from "@/components/layout/tag/Tag";
import { ActionType } from "@/components/layout/tag/TypeEnum";

function Fullaction() {
  return (
    <Section className="fullaction" title="full actions" colour="teal">
      <ul>
        <li>
          <Tag type={ActionType.Full} />
          [k]Barrage: [k]Attack with two [k]weapons or one [k] superheavy
          weapon.
        </li>
        <li>
          <Tag type={ActionType.Full} />
          [k]Disengage: [k]Move without triggering [k]engagement or
          [k]reactions.{" "}
        </li>
        <li>
          <Tag type={ActionType.Full} />
          [k]Full Tech: Perform two different [k]quick tech options or a single
          [k]system or [k]full tech option.
        </li>
        <li>
          <Tag type={ActionType.Full} />
          [k]Improvised Attack: Make a [k]melee attack with your mech's fist, or
          any kind of improvised weapon. Get creative!
        </li>
        <li>
          <Tag type={ActionType.Full} />
          [k]Stabilize: [k]Repair, [k]reload & cool down your mech of excess [k]
          heat or clear any [k] status condition.
        </li>
      </ul>
    </Section>
  );
}

export default Fullaction;
