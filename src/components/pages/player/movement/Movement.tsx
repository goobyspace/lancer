import Section from "@/components/layout/section/Section";
import { Categories } from "lancer-keyword";

function Movement() {
  return (
    <Section className="movement" title="movement" colour="black">
      <p>
        Move up to your mech's{" "}
        <lancer-keyword keyword={Categories.mech.keywords.speed} /> in any
        direction.
      </p>
      <ul>
        <li>
          You can{" "}
          <lancer-keyword
            keyword={Categories.movement.keywords.splitting_movement}
          >
            split movement
          </lancer-keyword>{" "}
          however you want with your{" "}
          <lancer-keyword keyword={Categories.combat.keywords.actions} />. You
          can move before, inbetween & after your{" "}
          <lancer-keyword keyword={Categories.combat.keywords.actions} />. As
          long as the total amount you've moved doesn't exceed your{" "}
          <lancer-keyword keyword={Categories.mech.keywords.speed} />, you're
          good.
        </li>
        <li>
          If you move{" "}
          <lancer-keyword keyword={Categories.movement.keywords.adjacency}>
            Adjacent
          </lancer-keyword>{" "}
          to another mech, you become{" "}
          <lancer-keyword keyword={Categories.movement.keywords.engagement}>
            Engaged
          </lancer-keyword>
          . If the mech is the same{" "}
          <lancer-keyword keyword={Categories.mech.keywords.size} /> or larger,
          you must stop. Trying to move away could trigger a{" "}
          <lancer-keyword keyword={Categories.combat.keywords.reactions}>
            reaction
          </lancer-keyword>{" "}
          like{" "}
          <lancer-keyword keyword={Categories.reaction.keywords.overwatch} />.
        </li>
        <li>
          Movement can pass through allies & smaller{" "}
          <lancer-keyword keyword={Categories.mech.keywords.size} />{" "}
          <lancer-keyword keyword={Categories.movement.keywords.obstruction}>
            obstructions
          </lancer-keyword>
          , including enemy mechs. Same size or larger objects block movement,
          though{" "}
          <lancer-keyword keyword={Categories.movement.keywords.obstruction}>
            obstructions
          </lancer-keyword>{" "}
          can be{" "}
          <lancer-keyword keyword={Categories.harm.keywords.damaging_objects}>
            destroyed
          </lancer-keyword>
          .
        </li>
      </ul>
    </Section>
  );
}

export default Movement;
