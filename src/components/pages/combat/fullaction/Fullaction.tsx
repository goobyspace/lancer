import Section from "@/components/layout/section/Section";
import Tag from "@/components/layout/tag/Tag";
import { ActionType } from "@/components/layout/tag/TypeEnum";
import { Categories } from "lancer-keyword";

function Fullaction() {
  return (
    <Section className="fullaction" title="full actions" colour="teal">
      <ul>
        <li>
          <Tag type={ActionType.Full} />
          <lancer-keyword
            keyword={Categories.fullAction.keywords.barrage}
          />: <lancer-keyword keyword={Categories.combat.keywords.attack} />{" "}
          with two{" "}
          <lancer-keyword keyword={Categories.mech.keywords.weapon}>
            weapons
          </lancer-keyword>{" "}
          or one{" "}
          <lancer-keyword keyword={Categories.mech.keywords.superheavy_mount}>
            superheavy weapon
          </lancer-keyword>
          .
        </li>
        <li>
          <Tag type={ActionType.Full} />
          <lancer-keyword
            keyword={Categories.fullAction.keywords.disengage}
          />:{" "}
          <lancer-keyword keyword={Categories.combat.keywords.movement}>
            move
          </lancer-keyword>{" "}
          without triggering{" "}
          <lancer-keyword keyword={Categories.movement.keywords.engagement} />{" "}
          or <lancer-keyword keyword={Categories.combat.keywords.reactions} />.{" "}
        </li>
        <li>
          <Tag type={ActionType.Full} />
          <lancer-keyword keyword={Categories.fullAction.keywords.full_tech} />:
          Perform two different{" "}
          <lancer-keyword
            keyword={Categories.quickAction.keywords.quick_tech}
          />{" "}
          options or a single{" "}
          <lancer-keyword keyword={Categories.mech.keywords.systems}>
            system
          </lancer-keyword>{" "}
          or{" "}
          <lancer-keyword keyword={Categories.fullAction.keywords.full_tech} />{" "}
          option.
        </li>
        <li>
          <Tag type={ActionType.Full} />
          <lancer-keyword
            keyword={Categories.fullAction.keywords.improvised_attack}
          />
          : Make a{" "}
          <lancer-keyword keyword={Categories.attacks.keywords.melee_attack} />{" "}
          with your mech's fist, or any kind of improvised weapon. Get creative!
        </li>
        <li>
          <Tag type={ActionType.Full} />
          <lancer-keyword
            keyword={Categories.fullAction.keywords.stabilize}
          />: <lancer-keyword keyword={Categories.mech.keywords.repair} />,
          reload & cool down your mech of excess{" "}
          <lancer-keyword keyword={Categories.harm.keywords.heat} /> or clear
          any <lancer-keyword keyword={Categories.combat.keywords.status} />{" "}
          condition.
        </li>
      </ul>
    </Section>
  );
}

export default Fullaction;
