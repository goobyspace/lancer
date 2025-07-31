import "./store.scss";
import { parse, addSeconds, getWeek } from "date-fns";
import store from "./store-items";
import "./Store.scss";
import Item from "./item/Item";

/** From: bryc: https://github.com/bryc/code/blob/master/jshash/experimental/cyrb53.js **/
function splitmix32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x9e3779b9) | 0;
    let t = a ^ (a >>> 16);
    t = Math.imul(t, 0x21f0aaad);
    t = t ^ (t >>> 15);
    t = Math.imul(t, 0x735a2d97);
    return ((t = t ^ (t >>> 15)) >>> 0) / 4294967296;
  };
}

function Store() {
  const arng = getWeek(parse("Sun", "EEE", new Date()));

  const times = [];
  for (let i = 0; i < 5; i++) {
    const time = addSeconds(arng, i).getTime();
    times.push(splitmix32(time));
  }

  return (
    <div className="store">
      <p>Resupply Items</p>
      <Item
        name="limited charge"
        price={2000}
        description="Resupply one charge to any of your mech's limited systems."
      />
      <Item
        name="repair"
        price={4000}
        description="Get one extra repair token to spend right now!"
      />
      <Item
        name="core battery"
        price={8000}
        description="A core battery to use before the end of the current mission or operation. Regain your used core power upon use."
      />
      <p>Rank 1 Reserves</p>
      {times.map((time) => {
        const item = store[Number((49 * time()).toFixed())];
        return <Item {...item} />;
      })}
      <p>Rank 2 Reserves</p>
    </div>
  );
}

export default Store;
