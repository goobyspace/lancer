import Section from "@/components/layout/section/Section";
import "./Reactions.scss";
import { Categories } from "lancer-keyword";

function Reactions() {
  return (
    <Section title="Reactions" className="reactions" colour="teal">
      <p>
        <lancer-keyword keyword={Categories.combat.keywords.reactions} /> are
        special actions that can be made outside of the usual{" "}
        <lancer-keyword keyword={Categories.combat.keywords.turn} /> order,
        generally as a response to incoming{" "}
        <lancer-keyword keyword={Categories.combat.keywords.attack}>
          attacks
        </lancer-keyword>
        , enemy <lancer-keyword keyword={Categories.combat.keywords.movement} />{" "}
        or other events, specified in the reaction.
      </p>
      <p>
        <lancer-keyword keyword={Categories.combat.keywords.reactions} /> can
        only be taken once per turn (So you cannot{" "}
        <lancer-keyword keyword={Categories.reaction.keywords.brace} /> &{" "}
        <lancer-keyword keyword={Categories.reaction.keywords.overwatch} /> the
        same enemy in one turn), but there is no limit overall to how many
        reactions can be taken.
      </p>
      <div>
        <p>Everyone has access to two, arguably three reactions:</p>
        <ul>
          <li>
            <lancer-keyword keyword={Categories.reaction.keywords.brace} />:
            When hit by an{" "}
            <lancer-keyword keyword={Categories.combat.keywords.attack} />, gain{" "}
            <lancer-keyword keyword={Categories.harm.keywords.resistance} /> to
            all <lancer-keyword keyword={Categories.harm.keywords.damage} />{" "}
            from that{" "}
            <lancer-keyword keyword={Categories.combat.keywords.attack} />, but
            you lose several{" "}
            <lancer-keyword keyword={Categories.combat.keywords.actions} /> next{" "}
            <lancer-keyword keyword={Categories.combat.keywords.turn} />.
          </li>
          <li>
            <lancer-keyword keyword={Categories.reaction.keywords.overwatch} />:
            A hostile character starts movement whilst within your{" "}
            <lancer-keyword keyword={Categories.combat.keywords.threat} />, use{" "}
            <lancer-keyword
              keyword={Categories.quickAction.keywords.skirmish}
            />{" "}
            against them before they move.
          </li>
          <li>
            Finally,{" "}
            <lancer-keyword keyword={Categories.otherAction.keywords.prepare} />{" "}
            is a{" "}
            <lancer-keyword keyword={Categories.combat.keywords.quick_action} />{" "}
            available to everyone that lets you prepare any other quick action
            as a reaction.
          </li>
        </ul>
      </div>
      <p>
        Other <lancer-keyword keyword={Categories.combat.keywords.reactions} />{" "}
        are given out by{" "}
        <lancer-keyword keyword={Categories.mech.keywords.systems} /> &
        <lancer-keyword keyword={Categories.pilot.keywords.talents} />.
      </p>
    </Section>
  );
}

export default Reactions;
