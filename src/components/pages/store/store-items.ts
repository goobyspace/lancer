export default [
  {
    id: 1,
    name: "snap hooks",
    tags: ["quick action", "limited 1"],
    price: 2000,
    description: "Automatically grapple an adjacent target.",
    flavour:
      "Cabled hooks launched from exterior-mounted ejection points for rapid, intimate engagement.",
    rank: 1,
  },
  {
    id: 2,
    name: "molecular whetstone",
    tags: ["free action", "1/round", "limited 1"],
    price: 1500,
    description:
      "After you successfully hit with a melee attack, but before damage is rolled, spend this reserve as a free action to Shred the target until the end of the current turn.",
    flavour:
      "A device installed in a weapon’s grip that sends an autophagic pulse up the blade, sharpening it before impact.",
    rank: 1,
  },
  {
    id: 3,
    name: "kinetic pulse coil",
    tags: ["quick action", "limited 1"],
    price: 2500,
    description: "Ram every character in Burst 1.",
    flavour:
      "Chassis-mounted woofers. Kinetic-absorbant coils gather latent energy from normal actions, such as walking, running, or fighting, until released with explosive force.",
    rank: 1,
  },
  {
    id: 4,
    name: "icarus multistage booster",
    tags: ["free action", "limited 1"],
    price: 2500,
    description:
      "When you make a standard move, spend this reserve as a free action to move your speed in a straight line.",
    flavour:
      "Dual break-away boosters that help close the distance; or increase it, as needed.",
    rank: 1,
  },
  {
    id: 5,
    name: "redundant cladding",
    tags: ["reaction", "limited 1"],
    price: 2500,
    description:
      "Trigger: You’re successfully hit by an attack. Effect: You gain resistance to that attack, but are impaired until the end of your next turn.",
    flavour:
      "Rough, but effective, armor plating that can take hits your normal armor might find disagreeable. Won’t protect you from cockpit whiplash as a result of said impacts.",
    rank: 1,
  },
  {
    id: 6,
    name: "concussive bracer",
    tags: ["free action", "limited 2"],
    price: 2000,
    description:
      "When you successfully hit with a Ram, spend this reserve as a free action to also Impair the target until the end of their next turn.",
    flavour:
      "An external-fit gauntlet of extraordinary weight. The stored concussive energy is expended almost as quickly as its victims fall to the ground.",
    rank: 1,
  },
  {
    id: 7,
    name: '"Cuirass" shield generator',
    tags: ["quick action", "1/round", "deployable", "limited 2"],
    price: 2000,
    description:
      "Deploy a Cuirass Shield Generator (Size: 1, HP: 10, Evasion: 5) in a free adjacent space.\nCreates a Burst 1 energy field upon deployment. The next 3 attacks that target any character or object within this shield treat each target as having hard cover.",
    flavour:
      "An emitter dish mounted on a rudimentary tripod. Its power supply is limited, but consistent enough to see frequent use in the field as a quick means of fortifying positions.",
    rank: 1,
  },
  {
    id: 8,
    name: "spare ammo",
    tags: ["quick action", "limited 1"],
    price: 2500,
    description: "Reload any Loading weapon.",
    flavour: "Bullet go in, bullet go out.",
    rank: 1,
  },
  {
    id: 9,
    name: "sand dispenser",
    tags: ["quick action", "limited 1"],
    price: 2000,
    description:
      "You or an allied character within Range 3 immediately clears all Burn.",
    flavour: "Sometimes a high tech problem needs a low tech solution.",
    rank: 1,
  },
  {
    id: 10,
    name: "adaptive rounds",
    tags: ["protocol", "limited 5"],
    price: 1000,
    description:
      "Change the damage type of your next ranged attack to either Kinetic, Energy, or Explosive.",
    flavour:
      "Each shell casing is helpfully color coded to prevent accidental incineration in volatile environments.",
    rank: 1,
  },
  {
    id: 11,
    name: "overpowered coils",
    tags: ["reaction", "limited 1"],
    price: 2000,
    description:
      "Trigger: Your attack deals bonus damage of any kind.\nEffect: The target is knocked back spaces equal to the bonus damage dealt.",
    flavour:
      "A cartridge mounted in convenient thumb reach for quick activation, bolstering the efficacy of existing weapon modifications. Burns out quick, so pick your moment.",
    rank: 1,
  },
  {
    id: 12,
    name: "reactive shunt",
    tags: ["free action", "limited 1"],
    price: 1000,
    description:
      "When you brace, automatically clear all heat as a free action. All characters adjacent to you take heat equal to half of what you cleared.",
    flavour:
      "An emergency vent built to disseminate excess reactor waste as quickly as possible. Make your choices everyone else’s problem.",
    rank: 1,
  },
  {
    id: 13,
    name: '"thumb" cannon',
    tags: ["protocol", "limited 2"],
    price: 1500,
    description: "You may Ram from up to range 5 until the end of this turn.",
    flavour:
      "Arm-mounted, bulky, and thunderous, pilots are recommended to wear ear plugs before they charge it up.",
    rank: 1,
  },
  {
    id: 14,
    name: "FUEL RESERVES",
    tags: ["protocol", "limited 2"],
    price: 1500,
    description:
      "All movement actions (Standard Move, Boost, etc.) you take this round may move 1 additional space.",
    flavour: "Keep a little extra in the tank.",
    rank: 1,
  },
  {
    id: 15,
    name: "ACHILLES ROUND",
    tags: ["limited 3"],
    price: 2000,
    description:
      "When you reload any weapon, that weapon’s next attack gains the Overkill tag.",
    flavour: "Someone carved a skull and crossbones into the shell casing.",
    rank: 1,
  },
  {
    id: 16,
    name: "DEMO CHARGE",
    tags: ["quick action", "limited 1"],
    price: 1000,
    description:
      "Immediately deal 40 kinetic damage to an adjacent object or piece of terrain.",
    flavour: "Clear the view.",
    rank: 1,
  },
  {
    id: 17,
    name: "EXPENDABLE RIFLING",
    tags: ["protocol", "limited 3"],
    price: 1000,
    description: "Your next ranged attack has its range extended by 5.",
    flavour:
      "A long barrel that screws to the end of your gun. Designed to fit all standard GMS munitions.",
    rank: 1,
  },
  {
    id: 18,
    name: "MASS-ECHO CHARGE",
    tags: ["limited 1"],
    price: 1500,
    description:
      "Whenever you successfully hit with a tech attack, roll 1D20. On a natural 20, the target is stunned after the attack resolves. This reserve persists until triggered.",
    flavour:
      "A small, silvery chip installed in your mech’s computer core. Contains enough malicious paracode to shut down a city block, so it can only be used in short bursts",
    rank: 1,
  },
  {
    id: 19,
    name: "SUPERMUNITIONS",
    tags: ["protocol", "limited 1"],
    price: 2500,
    description:
      "Your next ranged attack that isn’t a Cone, Line, or Burst gains Blast 1, in addition to its normal profile. If it’s already Blast 1, it becomes Blast 2, and so on.",
    flavour:
      "Volatile, modular charges that multiply the tactical and geographic scope of all standard munitions.",
    rank: 1,
  },
  {
    id: 20,
    name: "SILHOUETTE SCRAMBLERS",
    tags: ["protocol", "limited 3"],
    price: 1500,
    description:
      "Attacks originating from further than Range 3 treat you as having hard cover until the end of your next turn.",
    flavour:
      "A cyber warfare suite that scatters and distorts your image on all visual wavelengths. You’ll be less of a target and more of a cubist suggestion.",
    rank: 1,
  },
  {
    id: 21,
    name: "AUTO-FLACHETTES",
    tags: ["reaction", "limited 1"],
    price: 2500,
    description:
      "Trigger: You successfully hit an Immobilized character with an attack.\nEffect: Deal 1D6 bonus damage.",
    flavour:
      "Shoulder-mounted launchers that fire screaming bands of iron at speeds too slow to rely on in the heat of combat, but the trapped prey can do nothing but watch.",
    rank: 1,
  },
  {
    id: 22,
    name: "ICE OUT DEMO DISC",
    tags: ["quick action", "limited 2"],
    price: 2000,
    description:
      "Spend this reserve to gain immunity to all tech actions until the start of your next turn.",
    flavour:
      "Comes free in the mail with a subscription to any one of a number of exciting Smith Shimano services.",
    rank: 1,
  },
  {
    id: 23,
    name: "SPIDER TRAP",
    tags: ["quick action", "deployable", "limited 3"],
    price: 1500,
    description:
      "Deploy an electrified mesh that encompasses a free Blast 1 area within Range 5. Characters who start their turn in the Spider Trap or who enter it for the first time in a round must make an Engineering save or become Immobilized.",
    flavour:
      "Your parlor is the effective combat theater of the current engagement and the fly is a six ton somersaulting war robot with a nuclear reactor, but the principle isn’t too far off.",
    rank: 1,
  },
  {
    id: 24,
    name: "SERVO LIMITER BYPASS",
    tags: ["free action", "1/round", "limited 3"],
    price: 1500,
    description:
      "1/round, When you successfully hit with a melee attack, spend this reserve as a free action to deal 3 knockback, in addition to any other knockback effects. After the attack is resolved, roll 1D6; on a 5+, your mech is Impaired until the end of your next turn.",
    flavour:
      "This handy plug-n-play override lets you get around the factory-standard failsafes native to the original printing.",
    rank: 1,
  },
  {
    id: 25,
    name: "FREQUENCY ALIGNMENT NODE",
    tags: ["quick action", "limited 2"],
    price: 2000,
    description:
      "Clear the Jammed condition and gain immunity to Jammed until the end of your next turn.",
    flavour:
      "Ancillary nodes connected to your sensor array that broadcast constantly shifting, synchronistic frequencies. Trick hostile jamming technology into following a ghost of your mech down a dark alley",
    rank: 1,
  },
  {
    id: 26,
    name: "EMERGENCY HEAT TRAP",
    tags: ["reaction", "quick action", "limited 1"],
    price: 2000,
    description:
      "The next time you would gain Heat from a hostile source, spend this reserve as a reaction to reduce the amount to 0 and gain a Firecracker Charge. The Firecracker Charge lasts until used, but expires at the end of the scene.\n\nAs a quick action on any of your turns, you may lob the Firecracker Charge at a hostile enemy character within Range 5. They must pass an Agility save or take energy damage equal to the heat that you would have gained by the triggering effect.",
    flavour:
      "“Yeah, pretty handy. They say some merc invented these in his garage with a box of spare parts ‘cause his team kept melting their reactors.”",
    rank: 1,
  },
  {
    id: 27,
    name: "KNOCKOUT CHARGE",
    tags: ["reaction", "limited 3"],
    price: 1500,
    description:
      "Trigger: Critically Hit with a ranged or melee weapon.\nEffect: The target of your attack is knocked prone and becomes Slowed until the end of their next turn.",
    flavour:
      "An impact-sensitive charge applied to blade, hammerhead, or bullet. Anyone hit with this is gonna need a minute.",
    rank: 1,
  },
  {
    id: 28,
    name: "ACTIVE CAMO",
    tags: ["quick action", "limited 1"],
    price: 2000,
    description: "Become Invisible until the start of your next turn.",
    flavour:
      "An emitter device installed right about where your mech’s sternum would be. The energy pattern it projects bends the light around you, but the odd, blurry defect can clue the perceptive marksman as to where you might be skulking.",
    rank: 1,
  },
  {
    id: 29,
    name: "HOLO DECOY",
    tags: ["quick action", "1/round", "limited 3"],
    price: 1500,
    description:
      "1/round, Create a holographic decoy of yourself. This decoy moves your Speed in a straight line from your current position; it is unaffected by difficult terrain but is stopped by obstructions and characters in its path. Hostile characters who start their turn within line of sight and range of the hologram must first make a System save or be forced to attack the decoy.\n\nThe decoy shares your size, can benefit from cover, and has Evasion 10, E-Defense 10, and 1 HP. It disappears if it takes heat or damage, or at the end of your next turn. If you create a second decoy, the previous one disappears.",
    flavour:
      "he decoy can be programmed to execute any number of gestures from a vast library of “emotes.” Sure to infuriate any and all hostiles from Core to Shore.",
    rank: 1,
  },
  {
    id: 30,
    name: "PUNISHER SYLO",
    tags: ["free action", "1/round", "limited 3"],
    price: 2500,
    description:
      "1/round When you Critically hit with any attack, deal 3 explosive damage to a different target within Range 15 as a free action.",
    flavour: "A quick-launch tube armed with three fire-and-forget rockets.",
    rank: 1,
  },
  {
    id: 31,
    name: "BODY FLICKER DRIVE",
    tags: ["protocol", "limited 3"],
    price: 1000,
    description:
      "Teleport whenever you Boost until the end of the current turn.",
    flavour:
      "An experimental drive plugged right into your reactor. Painfully cold to the touch, so make sure to wear the special protective gloves it came with during installation.",
    rank: 1,
  },
  {
    id: 32,
    name: "PREDATOR/PREY PING",
    tags: ["quick action", "limited 2"],
    price: 2000,
    description:
      "Remove Hidden and Invisible from one hostile character in sensors and line of sight. That character cannot regain either Hidden or Invisible until the end of their next turn.",
    flavour:
      "A chunky power modulator that interfaces directly with your sensor array. Enhances the effective precision of your sensors in quick, powerful bursts, but continuous use will blow them out like a bad fuse.",
    rank: 1,
  },
  {
    id: 33,
    name: "JAEGER SHOCKS",
    tags: ["1/round", "limited 2"],
    price: 1000,
    description:
      "1/round, If your standard movement or Boost ends next to hard cover equal to or greater than your mech’s size, spend this reserve to immediately move 2 spaces in any direction.",
    flavour:
      "Kinetic-absorbant shocks installed in the ankle, knee, and hip joints of your mech. Allows even a multi-ton machine to quickly navigate through tight urban corridors without fear of toppling the whole block.",
    rank: 1,
  },
  {
    id: 34,
    name: "SHINE-CLASS ENERGY SHIELD",
    tags: ["limited 1"],
    price: 2000,
    description:
      "When you’re successfully hit by a ranged or melee attack, spend this reserve to gain Overshields equal to your Grit+3 before damage is rolled. These overshields disappear after the attack is resolved.",
    flavour:
      "An energy shield that quickly snaps into place at the instant of violent impact. Popularized by a merc pilot by the name of McCloud, infamous for his quick reflexes and fancy footwork.",
    rank: 1,
  },
  {
    id: 35,
    name: "LIVING PARTICULATE NEXUS",
    tags: ["quick action", "1/round", "limited 1"],
    price: 1000,
    description:
      "1/round, Spend this reserve as a quick action to release a Burst 1 cloud of nanites that lasts until the start of your next turn. Hostile characters who end their turn in this cloud, or who enter it for the first time in a round, take 2AP kinetic damage.",
    flavour: "“Mmmm… no, I’m pretty sure it’s just gray-wash.”",
    rank: 1,
  },
  {
    id: 36,
    name: '"CASTLE" TECH SUITE',
    tags: ["quick action", "limited 1"],
    price: 1500,
    description:
      "Spend this reserve as a quick action. Gain a +3 bonus to System saves, a +3 bonus to your e-defense, and a +3 bonus to tech attacks. This effect lasts until the end of your next turn.",
    flavour:
      "An advanced firewall program that drastically increases your computer’s combat efficacy.",
    rank: 1,
  },
  {
    id: 37,
    name: "PREDICTIVE FIRE ARRAY",
    tags: ["limited 1"],
    price: 2500,
    description:
      "After you hit with Overwatch, spend this reserve to immediately Overwatch against a different character in range with the same weapon. You cannot attack the same character twice.",
    flavour:
      "A modification to your sensors that populates your HUD with predictive-analysis targets before you even see them.",
    rank: 1,
  },
  {
    id: 38,
    name: "ANAGUMA-CLASS SUBALTERN",
    tags: ["quick action", "deployable", "drone", "limited 1"],
    price: 1500,
    description:
      "Spend this reserve to deploy a Anaguma combat subaltern within Sensors and line of sight. \n\nAnaguma-Class Subaltern (Size: 1/2, HP: 10, Evasion: 5) \n\nWhenever you successfully attack, the Anaguma deals 3 energy damage to the same target as long as it’s within range 5 of the target when the attack hits. \n\nWhen the Anaguma is destroyed, it detonates in a Burst 2 explosion. Characters caught in the explosion must make an Agility save or take 1D6+2 explosive damage. They take half of that on success.\n\nThe Anaguma cannot be recalled, but it can be moved with talents and abilities. It expires at the end of the scene.",
    flavour:
      "It’s programmed with a friendly, cheerful persona package that nevertheless comes off as disturbingly enthusiastic about its own imminent self-destruction.",
    rank: 1,
  },
  {
    id: 39,
    name: "AIM COMPENSATOR",
    tags: ["reaction", "limited 1"],
    price: 2000,
    description:
      "Trigger: You miss with any ranged or melee attack.\nEffect: Deal 2 Reliable damage.",
    flavour:
      "A hydraulic brace installed at your mech’s shoulder and elbow that corrects your aim in the heat of combat.",
    rank: 1,
  },
  {
    id: 40,
    name: "TROJAN REBOUND",
    tags: ["reaction", "limited 2"],
    price: 1500,
    description:
      "Trigger: A hostile character within range 10 is slowed.\nEffect: That character is now Immobilized for the same duration as the triggering effect.",
    flavour:
      "A hungry, aggressive paracode that tugs on the leash it’s been given.",
    rank: 1,
  },
  {
    id: 41,
    name: "SUBSPACE FIRING CHAMBER",
    tags: ["free action", "1/round", "limited 3"],
    price: 1000,
    description:
      "1/round, Spend this reserve as a free action during any character’s turn to deal 1 damage to any character on the map regardless of range or line of sight. This damage cannot be reduced in any way.",
    flavour:
      "It looks like a typical sidearm, except it has no muzzle; only a sheer, flat surface where bullets ought to exit. Looking at the gun too long after firing it might give some pilots motion sickness.",
    rank: 1,
  },
  {
    id: 42,
    name: "SONIC EMITTER",
    tags: ["quick action", "limited 1"],
    price: 2000,
    description:
      "Spend this reserve as a quick action to detonate a Size 1 object or piece of hard cover within Range 10 and line of sight. Characters within Burst 1 of the detonation must make an Agility save or take 1D6 explosive damage and 2 burn. On success, they take no explosive damage and 1 burn.",
    flavour:
      "A dish made out of a series of concentric, hollow rings. Tension can be adjusted for concentrated frequencies.",
    rank: 1,
  },
  {
    id: 43,
    name: "DETRITUS LAUNCHER",
    tags: ["quick action", "limited 1"],
    price: 1000,
    description:
      "Launch a cloud of obstructive micro-debris in Cone 7. This zone counts as difficult terrain and soft cover until the end of the current round. Characters who start their turn in this cloud or enter it for the first time in the round become Impaired.",
    flavour:
      "A rattling, makeshift hunk of iron with a design philosophy closer to Queen Victoria than John Creighton Harrison.",
    rank: 1,
  },
  {
    id: 44,
    name: "THERMAL TRANSFER CHAMBER",
    tags: ["quick action", "limited 2"],
    price: 1000,
    description:
      "1/round, Spend this reserve as a quick action to add bonus energy damage equal to your current Burn to your next successful attack.",
    flavour:
      "A weapon mod that looks a bit like an old water radiator. It gathers energy from ambient local temperature.",
    rank: 1,
  },
  {
    id: 45,
    name: "EMERGENCY BACKUP MINE",
    tags: ["free action", "limited 2"],
    price: 1000,
    description:
      "Spend this reserve whenever you place a mine to place a second mine as a free action. This second mine does not count against that system’s Limited item count.",
    flavour: "A couple of spare mines you found at the bottom of a crate.",
    rank: 1,
  },
  {
    id: 46,
    name: "WIDE AREA IMPACT DISTRIBUTOR",
    tags: ["reaction", "limited 1"],
    price: 1000,
    description:
      "Trigger: You take any damage from a ranged or melee attack.\nEffect: The damage of that attack is immediately reduced to 1 and is applied to you and all characters within Range 5. This single point of damage cannot be reduced in any way.",
    flavour:
      "A peculiar energy shield that relies on expanded surface area to lessen the impact of hostile munitions. One mech’s surface alone is rarely enough, so it uses instantaneous substatic pings to borrow the rest.",
    rank: 1,
  },
  {
    id: 47,
    name: "MAG LASSO",
    tags: ["reaction", "limited 2"],
    price: 1500,
    description:
      "Trigger: An allied character within Range 5 takes kinetic or explosive damage.\nEffect: You may deal half of that damage to a hostile character within Range 5.",
    flavour:
      "A hollow, high-tech node installed somewhere in your mech’s hand. Many pilots prefer the palm for dramatic effect, but anywhere will do. Catches bullets and missiles as easy as dandelions.",
    rank: 1,
  },
  {
    id: 48,
    name: "REACTOR BLUFF",
    tags: ["quick action", "limited 2"],
    price: 2500,
    description:
      "Spend this reserve as a quick action to immediately enter the Danger Zone with no heat gain. This lasts until the end of the current turn. You may still gain heat through other means normally.",
    flavour:
      "Reactors aren’t smart. They don’t think, they don’t reason, they don’t solve problems. But they can be tricked.",
    rank: 1,
  },
  {
    id: 49,
    name: "VOLATILE ENERGY CELL",
    tags: ["limited 2"],
    price: 1000,
    description:
      "When you deal any Energy damage, spend this reserve to deal 2 Burn as bonus damage.",
    flavour:
      "“There’s a little tab you can rip off at the end of the cell. Yeah, right there, that’s the–Woah, woah, woah! Don’t do it NOW you idiot!!!”",
    rank: 1,
  },
  {
    id: 50,
    name: "KINGS_FOLLOWUP.EXE",
    tags: ["full action", "limited 2"],
    price: 1000,
    description:
      "Spend this reserve to target a hostile unit in line of sight and sensors that has any Burn. That character’s Burn immediately triggers.",
    flavour:
      "A sinister invasion package that interferes with a mech’s fire suppression features.",
    rank: 1,
  },
  {
    id: 1,
    name: "SLINGSHOT PORTAL",
    tags: ["1/scene", "quick action"],
    price: 3500,
    description:
      "Place a marker on your current space, then immediately teleport to any free space within Range 20 and line of sight. You automatically teleport back to that marker at the end of your next turn unless you’re Stunned or Immobilized.",
    flavour:
      "The Slingshot Portal was originally designed for clandestine scouting maneuvers, but field captains quickly discovered its offensive potential.",
    rank: 2,
  },
  {
    id: 2,
    name: "PURVIEW-GRADE DUCT TAPE",
    tags: ["1/mission or operation"],
    price: 4000,
    description:
      "Repair a destroyed weapon or system without spending your Repair Cap.",
    flavour:
      "Sometimes the best solutions in life are cheap. Unfortunately, Harrison Armory doesn’t make anything cheap.",
    rank: 2,
  },
  {
    id: 3,
    name: "COOLANT RIG",
    tags: ["1/scene", "free action"],
    price: 3500,
    description:
      "Each time you gain heat from a hostile source, the total amount of heat is reduced by 1 point.",
    flavour:
      "A complex network of pipes, tubes, and pads strategically set up around your reactor to ensure that you can push it a little harder than usual.",
    rank: 2,
  },
  {
    id: 4,
    name: "INSIGHT-CLASS COMP/CON",
    tags: ["1/scene", "free action"],
    price: 5000,
    description:
      "1/scene, Perform one quick action as a free action. It cannot be an attack and it cannot force a save.",
    flavour:
      "The Insight-Class can is designed to help you maintain a tactical advantage while you focus on more aggressive maneuvers.",
    rank: 2,
  },
  {
    id: 5,
    name: "RADIANT TARGET ACTUATOR",
    tags: ["1/round"],
    price: 3000,
    description:
      "1/round, If you don’t move before firing a Launcher, you get +1 accuracy.",
    flavour:
      "A software update that improves each missile’s ability to maintain target priority. They just need a second or two to make a lock.",
    rank: 2,
  },
  {
    id: 6,
    name: "Counterweight Pommel",
    tags: [],
    price: 4000,
    description:
      "If your melee weapons don’t have the Reliable tag, they gain Reliable 1. If they already have the Reliable tag, its value increases by 1.",
    flavour:
      "A pommel printed to the exact weight and specifications of your weapon allowing for field-optimal balance.",
    rank: 2,
  },
  {
    id: 7,
    name: "PISTON BRACE",
    tags: ["1/round", "reaction"],
    price: 3000,
    description:
      "Trigger: An enemy knocks you back.\nEffect: You may ignore that movement.",
    flavour:
      "Emergency-launch pistons installed in the calves or feet of your mech. Whenever you find yourself stumbling, they’ll be there to catch your fall.",
    rank: 2,
  },
  {
    id: 8,
    name: "FORCED REBOOT PACKAGE",
    tags: ["1/scene", "quick action"],
    price: 4000,
    description:
      "1/scene, You may clear the Stun condition for you or any adjacent allied character on your turn as a quick action. That ally then becomes Impaired and Slowed until the end of their next turn.",
    flavour:
      "Being stunned is considered by many pilots to be a worst-case scenario, but it’s nothing a little software can’t fix.",
    rank: 2,
  },
  {
    id: 9,
    name: "CHIP SHIELDS",
    tags: ["1/round"],
    price: 3500,
    description:
      "1/round, If you would only take 1 damage from a ranged or melee attack, reduce it to 0 damage.",
    flavour:
      "An overshield with an extremely low energy draw. It isn’t strong enough to ward off direct attacks, but it’s sufficient enough to let you ignore ambient wear and tear.",
    rank: 2,
  },
  {
    id: 10,
    name: "TREMOR CHARGE",
    tags: ["1/scene"],
    price: 4000,
    description:
      "1/scene, Any knockback effect you inflict on a hostile character also knocks them prone, if it doesn’t already.",
    flavour:
      "An explosive charge that detonates upon impact with the target. While it doesn’t do any physical damage, it will knock them off their feet.",
    rank: 2,
  },
  {
    id: 11,
    name: "EMERGENCY FOAM DISPENCER",
    tags: ["1/scene"],
    price: 3500,
    description:
      "1/scene, Automatically clear any burn you have at the end of your turn.",
    flavour:
      "For untold thousands of years, fire has remained one of mankind’s cruelest and most effective weapons. You’d be a fool not to expect it.",
    rank: 2,
  },
  {
    id: 12,
    name: "PLIABLE EXPLOSIVE CASING",
    tags: [],
    price: 3000,
    description: "All grenades can be thrown an additional 1 space.",
    flavour: "Gives your grenades a little extra bounce.",
    rank: 2,
  },
  {
    id: 13,
    name: "GHILLIE MANTLE",
    tags: ["1/scene", "reaction"],
    price: 4500,
    description:
      "Trigger: You’re targeted by a ranged attack while benefiting from hard cover.\nEffect: You count as invisible until the attack resolves.",
    flavour:
      "Most combat theorists will tell you that mundane camouflage is useless in this era of high tech weaponry, but experienced mercenaries know that there’s a big difference between theory and praxis.",
    rank: 2,
  },
  {
    id: 14,
    name: "USHTABI ROUND",
    tags: ["1/scene", "protocol"],
    price: 5000,
    description:
      "1/scene, The next successful attack you make with a ranged weapon deals the average of its total damage based on the number of dice rolled, as follows: 1d3 (2), 1d6 (4), 2d6 (7), 3d6 (11), 4d6 (14)",
    flavour: "Try not to look at this bullet too hard.",
    rank: 2,
  },
  {
    id: 15,
    name: "EXTENDED BARREL",
    tags: [],
    price: 3500,
    description: "All Rifle weapons have their maximum range increased by 1.",
    flavour: "Every meter counts.",
    rank: 2,
  },
  {
    id: 16,
    name: "DEVASTATOR SHELLS",
    tags: [],
    price: 4000,
    description: "All Cannon weapons ignore soft cover.",
    flavour:
      "At a certain point, the amount of damage a gun can dole out will nullify any opposing terrain advantage.",
    rank: 2,
  },
  {
    id: 17,
    name: "BREACHER DOCTRINE",
    tags: ["1/round"],
    price: 4500,
    description:
      "1/round, Before skirmishing with a CQB weapon, you may move 1 space. This movement ignores engagement and does not provoke reactions.",
    flavour:
      "A software package that allows your mech finer motor control in high-collision environments.",
    rank: 2,
  },
  {
    id: 18,
    name: "HEAVY SHIELD",
    tags: [],
    price: 3500,
    description:
      "Adjacent allied characters can use you for hard cover. Does not stack with Guardian.",
    flavour:
      "Installs on forearm-mounted hardpoints, leaving your off-hand free for more offensive tasks.",
    rank: 2,
  },
  {
    id: 19,
    name: "VOLATILE CATALYST",
    tags: ["1/round"],
    price: 4000,
    description:
      "1/round, Whenever you deal energy damage to a hostile character, deal 1 energy damage to one other hostile character adjacent to the target.",
    flavour:
      "A moderately sized deck charger that allows you to overclock your weapon’s energy cells.",
    rank: 2,
  },
  {
    id: 20,
    name: "ADVANCED PRINTING MATERIALS",
    tags: [],
    price: 4000,
    description: "All of your drones and deployables have +1 armor.",
    flavour:
      "Figure that the cost of drone repair ends up being more in the long run than the cost of a little extra armor.",
    rank: 2,
  },
  {
    id: 21,
    name: "SCATTER MALWARE",
    tags: ["1/round", "reaction"],
    price: 3000,
    description:
      "Trigger: You trigger an enemy’s Overwatch.\nEffect: You count as having soft cover until the attack is resolved.",
    flavour:
      "A reactive invasion package that distorts your profile on the enemy’s HUD just enough to make you annoying to hit.",
    rank: 2,
  },
  {
    id: 22,
    name: "DONKEY BRACE",
    tags: ["1/scene"],
    price: 4000,
    description: "1/scene, You may ignore the Ordnance tag for one attack.",
    flavour:
      "A back-mounted brace that allows you to bring heavier munitions to bear without sacrificing mobility. As robust as this brace is, however, it can only be used a limited number of times before snapping clean in half.",
    rank: 2,
  },
  {
    id: 23,
    name: "EFFICIENT ENERGY EMMITERS",
    tags: ["1/round"],
    price: 5000,
    description:
      "1/round, When you gain any Overshields, gain 1 extra point of Overshields.",
    flavour:
      "You’d be amazed how much energy goes to waste in most contemporary shielding systems.",
    rank: 2,
  },
  {
    id: 24,
    name: "FIELD PATCH",
    tags: ["1/scene", "protocol"],
    price: 3500,
    description:
      "1/scene, Remove the Shredded condition as a Protocol, but become Slowed until the end of your next turn.",
    flavour:
      "A quick-seal adhesive slab of metal that slaps over any damage your outer chassis may receive. A bit cumbersome to use in the heat of battle, however.",
    rank: 2,
  },
  {
    id: 25,
    name: "BULL EXO-FRAME",
    tags: [],
    price: 3500,
    description:
      "Moving adjacent to characters the same size as you does not stop your movement. Larger characters can still stop you as normal, however.",
    flavour:
      "A bulky mantle that fits over your mech’s shoulders, allowing you to quite literally charge past whatever hostile may stand in your way.",
    rank: 2,
  },
  {
    id: 26,
    name: "XC HARDPOINTS",
    tags: ["1/scene", "reaction"],
    price: 4000,
    description:
      "Trigger: You’re successfully hit by a weapon with the Armor Piercing tag.\nEffect: You may ignore that tag for this attack only, allowing your armor to reduce the damage dealt as normal.",
    flavour:
      "Strategically placed support hardpoints that increase the effective longevity of your chassis armor.",
    rank: 2,
  },
  {
    id: 27,
    name: "TACTICAL SENSOR SUITE",
    tags: [],
    price: 4500,
    description:
      "Your sensors get +5 range when you use the Lock On or Scan quick tech actions.",
    flavour:
      "A software update that boosts your short-range sensors, but only if you keep your finger off the trigger for once in your life.",
    rank: 2,
  },
  {
    id: 28,
    name: "LOCKJAW VIRUS",
    tags: ["1/round"],
    price: 4500,
    description:
      "1/round, Whenever you successfully hit a hostile character with a Tech Attack, that character gets +1 Difficulty to the next Ranged, Melee, or Tech attack they make against you.",
    flavour:
      "It’s just good strategy to prioritize enemy hackers on the field of battle. But what do you do if you are the enemy hacker?",
    rank: 2,
  },
  {
    id: 29,
    name: "ADAPTABLE FIREWALL",
    tags: ["1/scene", "reaction"],
    price: 3500,
    description:
      "Trigger: You’re successfully hit by a hostile tech attack.\nEffect: You count as invisible for the next tech attack that targets you.",
    flavour:
      "A defense package that rapidly reprograms itself to keep up with enemy cyber-doctrine.",
    rank: 2,
  },
  {
    id: 30,
    name: '"BLACK EYE" FUEL CANISTER',
    tags: ["1/round", "protocol"],
    price: 4000,
    description:
      "1/round, the first attack you make that deals any amount of Burn damage gains the Reliable 2 tag. This reliable damage is applied as Burn.",
    flavour:
      "Don’t look directly at the flames. They’ve been known to cause the careless eye to bleed.",
    rank: 2,
  },
  {
    id: 31,
    name: "DEFENSIVE EMP",
    tags: [],
    price: 5000,
    description:
      "When you Brace, all adjacent characters are Jammed until the end of their next turn.",
    flavour:
      "A core-mounted emitter that releases an electro-magnetic pulse strong enough to scramble anyone breathing down your neck. Just don’t use it around your friends, or they’ll give you an earful… as soon as their comms are back up, anyway.",
    rank: 2,
  },
  {
    id: 32,
    name: "TATTLETALE SCOPE",
    tags: ["1/round"],
    price: 3000,
    description:
      "1/round, When you hit with a ranged or tech attack, you learn the target’s HP and Heat.",
    flavour:
      "Most pilots can estimate how much damage an enemy can take with a bit of napkin math, but why guess?",
    rank: 2,
  },
  {
    id: 33,
    name: "RESPONSIVE MOBILITY PACKAGE",
    tags: ["1/scene", "quick action"],
    price: 4000,
    description:
      "1/scene, When you Boost while adjacent to an allied character, that character may also Boost their speed in any direction.",
    flavour:
      "A software package that links your maneuvering systems with a friendly computer, allowing for synchronized assaults.",
    rank: 2,
  },
  {
    id: 34,
    name: "CHRONOMETRIC SCRAMBLER",
    tags: ["1/scene", "reaction"],
    price: 4000,
    description:
      "Trigger: Any hostile character successfully attacks, passes a save or check, or otherwise successfully rolls a die. (including NPC feature recharging).\nEffect: The attack misses, the save or check is failed, or the dice successfully rolled is now a failure, etc. You immediately take 3 heat and become Impaired until the end of your next turn.",
    flavour: "“Whew, that was a close one.”\n“What was?”",
    rank: 2,
  },
  {
    id: 35,
    name: "LOCUST PROJECTOR",
    tags: ["1/round", "drone", "quick action"],
    price: 3000,
    description:
      "Deploy the Locust Projector within sensors and line of sight as a quick action. Once deployed, the Locust Projector emits a Burst 1 field. \nLocust Projector (Size: 1/2, HP 5, Evasion 10, E-Def 10)\nAll characters in this field gain soft cover and have immunity to all damage and effects from missed attacks.",
    flavour:
      "A crab-like drone about the size of a dumpster. It’s equipped with a suite of point-defense armaments that can intercept anything short of a direct hit.",
    rank: 2,
  },
  {
    id: 36,
    name: "REBOUND FIREWALL",
    tags: ["1/scene"],
    price: 3000,
    description:
      "1/scene, If you gain the Jammed condition from a hostile character, that character is immediately Jammed, as well.",
    flavour:
      "“Oh yeah? Screw you, too, buddy! … I said–uhhh, I said, ‘screw you, too.’ Do you copy? … Hello?",
    rank: 2,
  },
  {
    id: 37,
    name: "FIELD PATTERN IDENTIFIER",
    tags: ["1/round"],
    price: 4000,
    description:
      "1/round, Whenever you push or pull a hostile character, you may move 1 space. This movement ignores engagement and does not provoke reactions.",
    flavour:
      "An upgrade to your sensors that allows you to analyze the rapidly evolving variables of any battlefield, plotting the best possible maneuvers to capitalize on an already good situation.",
    rank: 2,
  },
  {
    id: 38,
    name: "SELF-DETONATING DEBRIS CANNISTER",
    tags: ["1/scene", "quick action"],
    price: 3000,
    description:
      "1/scene, Create a Blast 1 zone of difficult terrain in a free adjacent space as a quick action. This zone lasts for the rest of the scene.",
    flavour:
      "A canister full of shrapnel, razor-wire, caltrops, and other similarly hazardous traps. No-man’s land on demand.",
    rank: 2,
  },
  {
    id: 39,
    name: "CO-PILOT ASSISTANCE SUITE",
    tags: [],
    price: 4000,
    description: "Your Overwatch attacks can never suffer from Difficulty.",
    flavour:
      "A targeting suite developed from IPSN’s WATCHDOG program, but with a greatly reduced cerebral load.",
    rank: 2,
  },
  {
    id: 40,
    name: "FIRE SUPPORT APPENDAGES",
    tags: ["1/scene", "free action"],
    price: 4000,
    description:
      "1/scene, When you Critically Hit with any ranged or melee attack, you may reload one Loading weapon as a free action.",
    flavour:
      "A pair of externally mounted arms that handle the more mundane tasks you don’t have the time to bother with.",
    rank: 2,
  },
  {
    id: 41,
    name: "REDLINE THRUSTERS",
    tags: ["1/scene", "free action"],
    price: 4000,
    description:
      "1/scene, You may Boost as a free action. You cannot Boost again on this turn except through Overcharge.",
    flavour:
      "A pair of back-mounted thrusters that allow you to push your mech beyond factory-recommended speeds.",
    rank: 2,
  },
  {
    id: 42,
    name: "FULL SERVICE EXO-DRONES",
    tags: [],
    price: 4500,
    description:
      "Your Stabilize full action now clears one additional condition that wasn’t caused by one of your own systems, talents, etc. This can be applied to either yourself or an adjacent allied character.",
    flavour:
      "A pair of small, spider-like drones that excel in quick repairs in the heat of combat.",
    rank: 2,
  },
  {
    id: 43,
    name: '"BLOODWATER" CHAFF LAUNCHER',
    tags: ["1/round"],
    price: 5000,
    description:
      "1/round, Whenever you inflict Impaired on a hostile character, they must also pass a HULL save or become Slowed.",
    flavour:
      "A shoulder-mounted launcher that automatically fires a volley of exploding chaff at weakened hostiles. Does negligible damage, but keeps the target effectively neutered.",
    rank: 2,
  },
  {
    id: 44,
    name: "POWER FIST",
    tags: [],
    price: 3500,
    description:
      "The first Grapple or Ram you make in a round has +1 Accuracy.",
    flavour:
      "A large, oversized gauntlet that fits over one of your mech’s hands. Grants the wearer uncontested dominance in close-quarters sparring.",
    rank: 2,
  },
  {
    id: 45,
    name: "CLUTTER PACKAGE",
    tags: [],
    price: 5000,
    description: "Your Invade quick tech action deals 1 additional heat.",
    flavour:
      "Quadruples the size of your basic cyber invasion package with useless data, forcing the enemy computer to draw an equivalent amount of power just to keep all of it out.",
    rank: 2,
  },
  {
    id: 46,
    name: "BLINDSIGHT TARGETING LASER",
    tags: ["1/round"],
    price: 5000,
    description:
      "1/round, When you Lock On to a hostile character, they must pass a Systems save or become unable to make voluntarily movements that bring them closer to you until the end of their next turn. Cannot be used on the same character more than 1/scene.",
    flavour:
      "A head-mounted laser that paints a hostile for local target acquisition. As a side benefit, it triggers the enemy mech’s danger-proximity sensors, effectively treating you as if you were an active supernova.",
    rank: 2,
  },
  {
    id: 47,
    name: "CONTACT BOOSTERS",
    tags: ["1/round"],
    price: 4000,
    description:
      "Trigger: A hostile character ends a movement action adjacent to you.\nEffect: You move 1 space in any direction. This movement ignores engagement and does not provoke reactions.",
    flavour:
      "Ancillary boosters that are programmed to activate when they detect the immediate proximity of hostile units.",
    rank: 2,
  },
  {
    id: 48,
    name: "IFF SMART MUNITIONS",
    tags: [],
    price: 3000,
    description:
      "You and your allies are immune to damage from your own Blast and Cone attacks.",
    flavour: "Become the most popular guy in the hangar.",
    rank: 2,
  },
  {
    id: 49,
    name: "REFLECTIVE COATING",
    tags: ["1/scene"],
    price: 4000,
    description: "1/scene, You may Hide as a free action.",
    flavour:
      "A special coat of paint made from reflective alloys. A cheaper, if less reliable, stealth doctrine.",
    rank: 2,
  },
  {
    id: 50,
    name: '"OH CRAP" BUTTON',
    tags: [],
    price: 4000,
    description:
      "If you miss with a Superheavy weapon, you may immediately Boost your speed in any direction.",
    flavour:
      "A big red button that, when pressed, activates your mech’s boosters. Good way to get out of a bad play.",
    rank: 2,
  },
  {
    id: 1,
    name: "BROOD-SIBLING’S MOLT",
    tags: ["exotic", "main melee"],
    price: 10000,
    description:
      "Main melee. Threat 1. 1D6+1. 1/round, this weapon deals +1d6 bonus damage to characters that are SHREDDED or STUNNED.",
    flavour: "Goodbye, old [friend/love]",
    rank: 3,
  },
  {
    id: 2,
    name: "Fusion Torch",
    tags: [
      "exotic",
      "heavy cqb",
      "armor-piercing (ap)",
      "overkill",
      "inaccurate",
      "heat 2 (self)",
    ],
    price: 10000,
    description:
      "Heavy CQB. Line 5. 2d6+2. This weapon automatically deals 30 AP energy damage to objects, cover, and terrain within its area, leaving behind clouds of molten debris in their place that linger until the end of your next turn. Characters other than you that begin their turn in these clouds or who enter them for the first time in a round take 1d6 energy damage. As long as you are at least partially within a cloud, you gain soft cover.",
    flavour:
      'The FS-90 "Rockhammer" directed high-output mining beam is a heavy industrial energy cutter used to carve apart starship-grade hulls and toughened asteroids for mineral extraction, channeling a focused beam of superheated energy capable of effortlessly melting through even reinforced bulkheads. Repurposed by IPS-N as an offensive chassis-mounted weapon system, the fusion torch works just as well against enemy armor, and its effectiveness as a breaching tool is second to none. Operators often refer to the glowing slag deposits which frequently adorn their frames as "war paint."',
    rank: 3,
  },
  {
    id: 3,
    name: "KINESTHETIC SUIT UPGRADE",
    tags: ["exotic", "reaction", "system"],
    price: 10000,
    description:
      "For 2 SP: You gain the Spatial Awareness reaction: 1/round, when a character ends a movement adjacent to you, you mast Boost, ignoring reactions and engagement. After doing so, attacks against you receive +1 Difficulty until the end of your next turn.",
    flavour:
      "A cybernetic apparatus anchored via spinal tap, the kinesthetic suit upgrade is a full neurological surrogate. Upon installation the apparatus anchors into the spinal cord, lacing machine and biology and allowing the user to relinquish cognitive allotments, related to the maintenance of biological homeostasis. It acts as a twin temporal processor that grants the user the ability to focus excess cognition on a great range of tasks. In recent years SSC has explored the enhancement of kinesthetic awareness, specifically for spaceborne mech pilots.",
    rank: 3,
  },
  {
    id: 4,
    name: "MINIATURIZED LINAC COHERENT BEAM CANNON",
    tags: ["exotic", "unique", "full action"],
    price: 10000,
    description:
      "For 1 SP: Your mech gains an additional Core System that can be used 1/mission. FULL ACTION: LINAC CBC. Line 30. 14 Energy Damage. Activate this devastating charged particle cannon, firing it in a Line 30 path. All sources of cover, terrain, objects, and deployables smaller than Size 5 in this area are boiled away instantly, and then all characters within the area must pass an Agility save or take 14 energy damage. On a success, they take half damage. This damage can’t be reduced in any way. Characters with 7 HP or less, only 1 Structure remaining, and no Immunity to damage are instead instantly and automatically destroyed, annihilated utterly and leaving no wreck behind. You can take no other actions on the same turn you activate this particle cannon except for your standard move or Boost, and the stress of firing it causes you to become Stunned until the start of your next turn.",
    flavour:
      "Cressidium’s self-imposed isolation has led to a number of divergent technological advances over the centuries, among them the pursuit of more compact lance weapon development as opposed to further exploration and refinement of naval long-cycle weaponry. Weapons engineers looked to miniaturization, incorporating chemical and exotic-metal batteries and rapid-charge fire-cycling systems suitable for use on smaller and smaller platforms, ultimately including mechanized chassis. This example, reverse-engineered from combat data gathered by Union pilots during an engagement against Vestan Sovereignty special forces, appears to be a descendant of old linear accelerator coherent beam cannon designs – weapons now considered out of date by contemporary naval standards but which are nonetheless exceedingly lethal when employed at this scale.",
    rank: 3,
  },
  {
    id: 5,
    name: "REAPER ASSAULT CANNON",
    tags: ["exotic", "unique", "overkill"],
    price: 10000,
    description:
      "Main Cannon. Range 8. 2D3+1 Kinetic Damage. You may fire this weapon as if it were a superheavy weapon. If you do, it gains Reliable 5 and it deals 4d3+2 Kinetic damage instead of its standard damage.",
    flavour:
      "IPS-N’s latest foray into the field of autocannons, the Reaper represents the middle ground between a regular assault cannon and the ubiquitous Leviathan. Capable of laying down a harrowing hail of bullets, the Reaper lacks the typical assault cannon “spin up” feature, relying instead on yet more barrels and two rotary assemblies to achieve a superior rate of fire. Handed out to select IPS-N-licensed printers, this latest model is still in the test stages.",
    rank: 3,
  },
  {
    id: 6,
    name: "UPGRADED NETWORK ARRAY",
    tags: ["exotic", "free action"],
    price: 10000,
    description:
      "1/scene, choose an allied character. Until the end of your next turn, you may use their Systems in place of your own for the purposes of checks and saves, and make tech actions using their Sensors, drawing line of sight from their position.",
    flavour:
      "“This is the place? You sure Pettenouk said it was here?” “Yes, I’m sure. By the way, switch over to atmospheric level two. As you know, the air here on Kibo is noxious to us. Without proper adjustments, you’ll enter a coma in hours... Shou! Dammit, someone get Shou, he’s gone and passed out. Pack it up team, we’ll start again tomorrow.” “Bass Harbor, ma’am, I’m catching several bodies approaching our position from the foothills to the northeast.” “Ah, I’m reading it, got you loud and clear. Damn, I love doing these missions for those SSC toads. They always spare no expense and the network arrays are like having God’s eyes. Topside Lighthouse, we got company.”",
    rank: 3,
  },
];
