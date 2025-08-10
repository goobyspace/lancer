import "./store.scss";
import { getWeek, getDay, isBefore, parse } from "date-fns";
import store from "./store-items";
import "./Store.scss";
import Item from "./item/Item";
import { weeklyRankOneReserves, weeklyRankTwoReserves } from "./item-order";

function Store() {
  const rightNow = new Date();
  const cutOff = parse("Sun 15:00", "EEE HH:mm", new Date());
  const week = getWeek(rightNow, {
    weekStartsOn: 0,
  });
  const previousWeek = week === 1 ? 52 : week - 1;
  const currentWeek =
    getDay(rightNow) === 0
      ? isBefore(rightNow, cutOff)
        ? previousWeek
        : week
      : week;

  const allRankOneReserves = store.filter((item) => item.rank === 1);
  const allRankTwoReserves = store.filter((item) => item.rank === 2);

  const rankOneReserves = weeklyRankOneReserves
    .map((index) => allRankOneReserves[index[currentWeek]])
    .sort((a, b) => a.id - b.id);
  const rankTwoReserves = weeklyRankTwoReserves
    .map((index) => allRankTwoReserves[index[currentWeek]])
    .sort((a, b) => a.id - b.id);

  return (
    <div className="store">
      <p>Resupply Items ∞</p>
      <Item
        name="limited charge"
        price={2000}
        description="Resupply one charge to any of your mech's limited systems."
        flavour="Sometimes you just need a little extra juice."
        id={1}
      />
      <Item
        name="repair"
        price={4000}
        description="Get one extra repair capacity that you must spend right now."
        flavour="A little elbow grease goes a long way. Well, that, and a state of the art mech printing facility and some print credits."
        id={2}
      />
      <Item
        name="core battery"
        price={8000}
        description="A core battery to use before the end of the current mission or operation. Regain your used core power upon use."
        flavour="WARNING! Volatile substances. Handle with care. If unsure on compatibility, consult your mech's specs. ISP-N is not responsible for any mech damage or bodily injury caused by improper use."
        id={3}
      />
      <p>Rank 1 Reserves</p>
      {rankOneReserves.map((item) => {
        return <Item {...item} />;
      })}
      <p>Rank 2 Reserves</p>
      {rankTwoReserves.map((item) => {
        return <Item {...item} />;
      })}
    </div>
  );
}

export default Store;
