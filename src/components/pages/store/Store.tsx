import "./store.scss";
import { parse, addSeconds } from "date-fns";
import store from "./store-items";
import Section from "@/components/layout/section/Section";
import "./Store.scss";

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
  const arng = parse("Sun 17:00", "EEE HH:mm", new Date()).getTime();

  const times = [];
  for (let i = 0; i < 10; i++) {
    const time = addSeconds(arng, i).getTime();
    times.push(splitmix32(time));
  }

  return (
    <div className="store">
      {times.map((time) => {
        const item = store[Number((49 * time()).toFixed())];
        return (
          <Section
            colour="black"
            className={`store-item ${item.rank === 1 ? "one" : "two"}`}
            title={`#${item.id}. ${item.name} ${item.tags
              .map((tag) => `[${tag}]`)
              .join(" ")}`}
          >
            <div className="store-item-top">
              <p>{item.price} Manna</p>
              <p>{item.rank}</p>
            </div>
            <p className="store-item-description">{item.description}</p>
            <p className="store-item-flavour">{item.flavour}</p>
          </Section>
        );
      })}
    </div>
  );
}

export default Store;
