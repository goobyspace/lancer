import Section from "@/components/layout/section/Section";
import "./Heat.scss";

function Heat() {
  return (
    <Section title="Heat" className="heat" colour="red">
      <p>
        [k]Heat is a type of [harm] that doesn't count as damage & ignores
        [k]armor, though it can be affected by [k]resistance.
      </p>
      <p>
        Mechs gain [k]heat either from [k]electronic warfare, or via its own
        [k]systems.
      </p>
      <p>
        Mechs have a [k]heat cap, which when reaches will cause the mech to
        [k]overheat. When this happens, a mech takes 1 [k]stress, rolls on the
        [k]overheating table & clears its [k]heat cap.
      </p>
      <p>
        Mechs can be cooled via [k]stabilize, [k]resting, [k]full repairs as
        well as certain [k]systems.
      </p>
      <p>
        [k]Danger zone is a state the mech is in when it is at half its total
        [k]heat cap, certain [k] weapons & [k]talents can only be used in this
        state!
      </p>
      <h5 className="overcharge">Overcharge</h5>
      <p>
        [k]Overcharging is one of the ways mechs intentionally gain [k]heat, by
        pushing their mech beyond its limits to gain one extra [k]quick action.
      </p>
      <p>
        This free [k]quick action can be anything, including actions you have
        already taken this turn!
      </p>
    </Section>
  );
}

export default Heat;
