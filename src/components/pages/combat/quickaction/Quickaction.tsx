import Section from "@/components/layout/section/Section";
import Tag from "@/components/layout/tag/Tag";
import { ActionType } from "@/components/layout/tag/TypeEnum";

function Quickaction() {
  return (
    <Section className="quickaction" title="quick actions" colour="brown">
      <p>
        All quick actions can only be taken once per turn, except for quick
        tech.
      </p>
      <ul>
        <li>
          <Tag type={ActionType.Quick} />
          [k]Boost: Move up to your mech's [speed], on top of your [k]standard
          move.
        </li>
        <li>
          <Tag type={ActionType.Quick} />
          [k]Grapple: Grapple an [k]adjacent character, disabling their
          [k]reactions and potentially [k]immobilizing them. Multiple characters
          allowed.
        </li>
        <li>
          <Tag type={ActionType.Quick} />
          [k]Hide: When not [k]engaged or in [k]line of sight, attempt to become
          [k]hidden.
        </li>
        <li>
          <Tag type={ActionType.Quick} />
          [k]Quick tech: Perform electronic warfare, countermeasures or other
          system boosting activities. (Such as [k]scan or [k]lock on.)
        </li>
        <li>
          <Tag type={ActionType.Quick} />
          [k]Ram: Make a melee attack to knock a target down or back.
        </li>
        <li>
          <Tag type={ActionType.Quick} />
          [k]Search: Attempt to identify characters with the [k]hidden status
          within [k]sensor range.
        </li>
        <li>
          <Tag type={ActionType.Quick} />
          [k]Skirmish: Attack with a single [k]weapon.
        </li>
      </ul>
    </Section>
  );
}

export default Quickaction;
