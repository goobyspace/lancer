import Section from "@/components/layout/section/Section";
import "./Reactions.scss";

function Reactions() {
  return (
    <Section title="Reactions" className="reactions" colour="teal">
      <p>
        [k]Reactions are special actions that can be made outside of the usual
        [k]turn order, generally as a response to incoming [k]attacks, enemy
        [k]movement or other events, specified in the reaction.
      </p>
      <p>
        [k]Reactions can only be taken once per turn (So you cannot [k]Brace &
        [k] Overwatch the same enemy in one turn), but there is no limit overall
        to how many reactions can be taken.
      </p>
      <div>
        <p>Everyone has access to two reactions:</p>
        <ul>
          <li>
            [k]Brace: When hit by an [k]attack, gain [k]resistance to all
            [k]damage from that [k]attack, but you lose several [k]actions next
            [k]turn.
          </li>
          <li>
            [k]Overwatch: A hostile character starts movement whilst within your
            [k]threat, use [k]skirmish against them before they move.
          </li>
        </ul>
      </div>
      <p>Other [k]reactions are given out by [k]systems & [k]talents.</p>
    </Section>
  );
}

export default Reactions;
