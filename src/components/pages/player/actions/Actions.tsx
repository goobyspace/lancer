import Section from "@/components/layout/section/Section";
import { useState } from "react";
import "./Actions.scss";
import { ActionType } from "@/components/layout/tag/TypeEnum";
import Tag from "@/components/layout/tag/Tag";
import { Categories } from "lancer-keyword";

function Actions() {
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
      title="Actions"
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
        <div className="otheraction-action full">
          <div>
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
              superheavy weapon.
            </lancer-keyword>
          </div>
        </div>
        <div className="otheraction-action full">
          <div>
            <Tag type={ActionType.Full} />
            <lancer-keyword
              keyword={Categories.fullAction.keywords.disengage}
            />
            :{" "}
            <lancer-keyword keyword={Categories.combat.keywords.movement}>
              move
            </lancer-keyword>{" "}
            without triggering{" "}
            <lancer-keyword keyword={Categories.movement.keywords.engagement} />{" "}
            or <lancer-keyword keyword={Categories.combat.keywords.reactions} />
            .
          </div>
        </div>
        <div className="otheraction-action full">
          <div>
            <Tag type={ActionType.Full} />
            <lancer-keyword
              keyword={Categories.fullAction.keywords.full_tech}
            />
            : Perform two different{" "}
            <lancer-keyword
              keyword={Categories.quickAction.keywords.quick_tech}
            />{" "}
            options or a single{" "}
            <lancer-keyword keyword={Categories.mech.keywords.systems}>
              system
            </lancer-keyword>{" "}
            or{" "}
            <lancer-keyword
              keyword={Categories.fullAction.keywords.full_tech}
            />{" "}
            option.
          </div>
        </div>
        <div className="otheraction-action full">
          <div>
            <Tag type={ActionType.Full} />
            <lancer-keyword
              keyword={Categories.fullAction.keywords.improvised_attack}
            />
            : Make a{" "}
            <lancer-keyword
              keyword={Categories.attacks.keywords.melee_attack}
            />{" "}
            with your mech's fist, or any kind of improvised weapon. Get
            creative!
          </div>
        </div>
        <div className="otheraction-action full">
          <div>
            <Tag type={ActionType.Full} />
            <lancer-keyword
              keyword={Categories.fullAction.keywords.stabilize}
            />
            : <lancer-keyword keyword={Categories.mech.keywords.repair} />,
            reload & cool down your mech of excess{" "}
            <lancer-keyword keyword={Categories.harm.keywords.heat} /> or clear
            any <lancer-keyword keyword={Categories.combat.keywords.status} />{" "}
            condition.
          </div>
        </div>
        <div className="otheraction-action quick">
          <div>
            <Tag type={ActionType.Quick} />
            <lancer-keyword keyword={Categories.quickAction.keywords.boost} />:
            Move up to your mech's{" "}
            <lancer-keyword keyword={Categories.mech.keywords.speed} />, on top
            of your{" "}
            <lancer-keyword keyword={Categories.combat.keywords.movement}>
              standard movement.
            </lancer-keyword>
          </div>
        </div>
        <div className="otheraction-action quick">
          <div>
            <Tag type={ActionType.Quick} />
            <lancer-keyword keyword={Categories.quickAction.keywords.grapple} />
            : Grapple an{" "}
            <lancer-keyword keyword={Categories.movement.keywords.adjacency}>
              adjacent
            </lancer-keyword>{" "}
            character, disabling their{" "}
            <lancer-keyword keyword={Categories.combat.keywords.reactions} />{" "}
            and potentially{" "}
            <lancer-keyword keyword={Categories.condition.keywords.immobilized}>
              immobilizing
            </lancer-keyword>{" "}
            them. Multiple characters allowed.
          </div>
        </div>
        <div className="otheraction-action quick">
          <div>
            <Tag type={ActionType.Quick} />
            <lancer-keyword keyword={Categories.quickAction.keywords.hide} />:
            When not{" "}
            <lancer-keyword keyword={Categories.movement.keywords.engagement}>
              engaged
            </lancer-keyword>{" "}
            or in{" "}
            <lancer-keyword
              keyword={Categories.combat.keywords.line_of_sight}
            />
            , attempt to become{" "}
            <lancer-keyword keyword={Categories.status.keywords.hidden} />.
          </div>
        </div>
        <div className="otheraction-action quick">
          <div>
            <Tag type={ActionType.Quick} />
            <lancer-keyword
              keyword={Categories.quickAction.keywords.quick_tech}
            />
            : Perform{" "}
            <lancer-keyword
              keyword={Categories.combat.keywords.electronic_warfare}
            />
            , countermeasures or other system boosting activities. (Such as{" "}
            <lancer-keyword keyword={Categories.techAction.keywords.scan} /> or{" "}
            <lancer-keyword keyword={Categories.techAction.keywords.lock_on} />
            .)
          </div>
        </div>
        <div className="otheraction-action quick">
          <div>
            <Tag type={ActionType.Quick} />
            <lancer-keyword keyword={Categories.quickAction.keywords.ram} />:
            Make a{" "}
            <lancer-keyword
              keyword={Categories.attacks.keywords.melee_attack}
            />{" "}
            to knock a target down or back.
          </div>
        </div>
        <div className="otheraction-action quick">
          <div>
            <Tag type={ActionType.Quick} />
            <lancer-keyword keyword={Categories.quickAction.keywords.search} />:
            Attempt to identify characters with the{" "}
            <lancer-keyword keyword={Categories.status.keywords.hidden} />{" "}
            status within{" "}
            <lancer-keyword keyword={Categories.mech.keywords.sensors} /> range.
          </div>
        </div>
        <div className="otheraction-action quick">
          <div>
            <Tag type={ActionType.Quick} />
            <lancer-keyword
              keyword={Categories.quickAction.keywords.skirmish}
            />
            : Attack with a single{" "}
            <lancer-keyword keyword={Categories.mech.keywords.weapon} />.
          </div>
        </div>
        <div className="otheraction-action full quick">
          <div>
            <Tag type={ActionType.Full} />
            <Tag type={ActionType.Quick} />
            <lancer-keyword
              keyword={Categories.otherAction.keywords.activate}
            />
            : Activate a{" "}
            <lancer-keyword keyword={Categories.mech.keywords.systems}>
              system
            </lancer-keyword>{" "}
            or{" "}
            <lancer-keyword keyword={Categories.pilotGear.keywords.gear}>
              piece of gear
            </lancer-keyword>
            , full or quick depending on its'{" "}
            <lancer-keyword keyword={Categories.gear.keywords.tags}>
              tag.
            </lancer-keyword>
          </div>
        </div>
        <div className="otheraction-action full">
          <div>
            <Tag type={ActionType.Full} />
            <lancer-keyword keyword={Categories.otherAction.keywords.boot_up} />
            : Start up a mech that has been{" "}
            <lancer-keyword keyword={Categories.status.keywords.shut_down} />.
          </div>
        </div>
        <div className="otheraction-action full">
          <div>
            <Tag type={ActionType.Full} />
            <lancer-keyword keyword={Categories.otherAction.keywords.mount}>
              mount{" "}
            </lancer-keyword>{" "}
            &{" "}
            <lancer-keyword
              keyword={Categories.otherAction.keywords.dismount}
            />
            : Mount or dismount a mech.
          </div>
        </div>
        <div className="otheraction-action quick">
          <div>
            <Tag type={ActionType.Quick} />
            <lancer-keyword keyword={Categories.otherAction.keywords.eject} />:
            Eject from your mech in an emergency. Careful! It leaves your mech
            <lancer-keyword keyword={Categories.condition.keywords.impaired} />.
          </div>
        </div>
        <div className="otheraction-action quick">
          <div>
            <Tag type={ActionType.Quick} />
            <lancer-keyword keyword={Categories.otherAction.keywords.prepare} />
            : Spend a{" "}
            <lancer-keyword keyword={Categories.combat.keywords.quick_action} />{" "}
            to turn another into a{" "}
            <lancer-keyword keyword={Categories.combat.keywords.reactions}>
              reaction
            </lancer-keyword>{" "}
            until your next{" "}
            <lancer-keyword keyword={Categories.combat.keywords.turn} />.
          </div>
        </div>
        <div className="otheraction-action quick">
          <div>
            <Tag type={ActionType.Quick} />
            <lancer-keyword
              keyword={Categories.otherAction.keywords.self_destruct}
            />
            : Set your mech's reactor to explode within the next three{" "}
            <lancer-keyword keyword={Categories.combat.keywords.turn}>
              turns.
            </lancer-keyword>
          </div>
        </div>
        <div className="otheraction-action quick">
          <div>
            <Tag type={ActionType.Quick} />
            <lancer-keyword
              keyword={Categories.otherAction.keywords.shut_down}
            />
            : Shut down your mech to prevent{" "}
            <lancer-keyword keyword={Categories.attacks.keywords.tech_attack}>
              tech attacks
            </lancer-keyword>
            , <lancer-keyword keyword={Categories.ai.keywords.nhp} />{" "}
            <lancer-keyword keyword={Categories.ai.keywords.cascade}>
              cascading
            </lancer-keyword>{" "}
            or prevent{" "}
            <lancer-keyword keyword={Categories.harm.keywords.overheating} />.
          </div>
        </div>
        <div className="otheraction-action full">
          <div>
            <Tag type={ActionType.Full} />
            <lancer-keyword
              keyword={Categories.otherAction.keywords.skill_check}
            />
            : Decide on a skill check with the DM for actions not covered by any
            other{" "}
            <lancer-keyword keyword={Categories.combat.keywords.actions} />.
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Actions;
