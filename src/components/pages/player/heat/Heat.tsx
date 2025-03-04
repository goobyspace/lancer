import Section from "@/components/layout/section/Section";
import "./Heat.scss";
import { Categories } from "lancer-keyword";

function Heat() {
  return (
    <Section title="Heat" className="heat" colour="red">
      <p>
        <lancer-keyword keyword={Categories.harm.keywords.heat} /> is a type of{" "}
        <lancer-keyword keyword={Categories.harm.keywords.damage} /> that
        doesn't count as damage & ignores{" "}
        <lancer-keyword keyword={Categories.harm.keywords.armor} />, though it
        can be affected by{" "}
        <lancer-keyword keyword={Categories.harm.keywords.resistance} />.
      </p>
      <p>
        Mechs gain <lancer-keyword keyword={Categories.harm.keywords.heat} />{" "}
        either from{" "}
        <lancer-keyword
          keyword={Categories.combat.keywords.electronic_warfare}
        />
        , or via its own{" "}
        <lancer-keyword keyword={Categories.mech.keywords.systems} />.
      </p>
      <p>
        Mechs have a{" "}
        <lancer-keyword keyword={Categories.mech.keywords.heat_cap} />, which
        when reaches will cause the mech to{" "}
        <lancer-keyword keyword={Categories.harm.keywords.overheating}>
          overheat
        </lancer-keyword>
        . When this happens, a mech takes 1{" "}
        <lancer-keyword keyword={Categories.mech.keywords.stress} />, rolls on
        the{" "}
        <lancer-keyword keyword={Categories.harm.keywords.overheating_table} />{" "}
        & clears its{" "}
        <lancer-keyword keyword={Categories.mech.keywords.heat_cap} />.
      </p>
      <p>
        Mechs can be cooled via{" "}
        <lancer-keyword keyword={Categories.fullAction.keywords.stabilize} />,{" "}
        <lancer-keyword keyword={Categories.mech.keywords.rest}>
          resting
        </lancer-keyword>
        ,{" "}
        <lancer-keyword keyword={Categories.mech.keywords.full_repair}>
          full repairs
        </lancer-keyword>{" "}
        as well as certain{" "}
        <lancer-keyword keyword={Categories.mech.keywords.systems} />.
      </p>
      <p>
        <lancer-keyword keyword={Categories.status.keywords.danger_zone} /> is a
        state the mech is in when it is at half its total{" "}
        <lancer-keyword keyword={Categories.mech.keywords.heat_cap} />, certain
        <lancer-keyword keyword={Categories.mech.keywords.weapon}>
          weapons
        </lancer-keyword>{" "}
        & <lancer-keyword keyword={Categories.pilot.keywords.talents} /> can
        only be used in this state!
      </p>
      <h5 className="overcharge">Overcharge</h5>
      <p>
        <lancer-keyword keyword={Categories.combat.keywords.overcharge}>
          overcharging
        </lancer-keyword>{" "}
        is one of the ways mechs intentionally gain{" "}
        <lancer-keyword keyword={Categories.harm.keywords.heat} />, by pushing
        their mech beyond its limits to gain one extra{" "}
        <lancer-keyword keyword={Categories.combat.keywords.quick_action} /> as
        a <lancer-keyword keyword={Categories.combat.keywords.free_action} />.
      </p>
      <p>
        This free{" "}
        <lancer-keyword keyword={Categories.combat.keywords.quick_action} /> can
        be anything, including actions you have already taken this turn!
      </p>
    </Section>
  );
}

export default Heat;
