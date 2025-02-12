import TurnActions from "./turnactions/Turnactions";
import Movement from "./movement/Movement";

function Combat() {
  // just make two divs of flex columns instead so that we can get actual odd sizes
  // maybe do it programatically in the body tag?
  return (
    <>
      <TurnActions />
      <Movement />
      <p>asdf</p>
      <p>Heyyy</p>
    </>
  );
}

export default Combat;
