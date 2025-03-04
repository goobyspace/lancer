import { useEffect, useState } from "react";
import Section from "@/components/layout/section/Section";
import "./Range.scss";
import { Categories } from "lancer-keyword";

function Range() {
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);
  const [x, setX] = useState(1);
  const [hexWidth, setHexWidth] = useState(0);
  const [size, setSize] = useState(1);
  //selected contains: {row: x, column: x}: will have to type this in TS
  const [selected, setSelected] = useState<{ row: number; column: number }[]>(
    []
  );
  //-10 is waaaaay off the grid so itll never trigger a match
  const [origin, setOrigin] = useState<{ row: number; column: number }>({
    row: -10,
    column: -10,
  });

  //you can visualize the keys like this:
  //0: 0 1 2 3 4 5 6 7 8 9
  //1:  0 1 2 3 4 5 6 7 8 9
  //2: 0 1 2 3 4 5 6 7 8 9
  //3:  0 1 2 3 4 5 6 7 8 9
  //4: 0 1 2 3 4 5 6 7 8 9
  //5:  0 1 2 3 4 5 6 7 8 9
  //6: 0 1 2 3 4 5 6 7 8 9
  //the number before the colon is row
  //then every number after that is the column

  //so if someone clicks 3:3, the surrounding ones =
  //2:2, 2:3, 3:2, 3:4, 4:2, 4:3
  //per range, we'll add one to it
  useEffect(() => {
    if (origin) {
      setSelected(setRange(origin.row, origin.column, x, size));
    }
  }, [origin, x, size]);

  useEffect(() => {
    const sectionWidth =
      document.getElementById("hex-container")?.clientWidth || 0;
    const defaultWidth = (sectionWidth - sectionWidth / width / 2) / width;
    setHexWidth(defaultWidth - defaultWidth / 25);
  }, [width]);

  function setRange(row: number, column: number, radius: number, size: number) {
    const isRowEven = row % 2 === 0;

    const rangeHexes = [];

    if (size < 1) size = 1;
    else if (size > 2) radius += 1 * Math.ceil((size - 2) / 2);

    const sizeXStart = () => {
      return size % 2 === 0 ? -1 : 0;
    };

    for (let x = sizeXStart() - radius; x <= radius; x++) {
      const adjustedRange =
        ((x < 0 && size % 2 === 0 ? 3 : 1) + radius * 2 - Math.abs(x)) / 2;
      const isAdjustedRangeDecimal = adjustedRange % 1 !== 0;
      const roundedAdjustedRange = Math.floor(adjustedRange);

      const startNumber =
        0 -
        roundedAdjustedRange -
        (isRowEven && !isAdjustedRangeDecimal ? -1 : 0);
      const comparison = (y: number) =>
        isAdjustedRangeDecimal
          ? y <= roundedAdjustedRange
          : y < roundedAdjustedRange - (isRowEven ? -1 : 0);

      for (let y = startNumber; comparison(y); y++) {
        if (x === 0 && y === 0) {
          continue;
        } else rangeHexes.push({ row: row - x, column: column - y });
      }
    }

    return rangeHexes;
  }

  const selectHex = (row: number, column: number) => {
    setOrigin({ row, column });
  };

  const rows = Array.from({ length: height }, (_, x) => {
    const columns = Array.from({ length: width }, (_, y) => {
      if (!origin) setOrigin({ row: 0, column: 0 });
      //tldr size above 2 scales the same way range does, so we can just cheat and use that to calculate the higher ranges
      const sizeAboveTwo = setRange(origin.row, origin.column, 1, size - 2);
      const className =
        (origin?.row === x && origin?.column === y) ||
        (size === 2 && origin?.row + 1 === x && origin?.column === y) ||
        (size === 2 &&
          origin?.row + 1 === x &&
          (origin?.row % 2 !== 0 ? origin.column + 1 : origin?.column - 1) ===
            y) ||
        (size > 2 &&
          sizeAboveTwo.some((item) => item.row === x && item.column === y))
          ? "hex origin"
          : selected.some((item) => item.row === x && item.column === y)
          ? "hex dark"
          : "hex";
      return (
        <div
          onClick={() => selectHex(x, y)}
          key={y}
          className={className}
        ></div>
      );
    });
    return (
      <div key={x} className="row">
        {columns}
      </div>
    );
  });

  return (
    <Section title="Mech Range" colour="black" className="range">
      <p>
        After setting a grid size & mech{" "}
        <lancer-keyword keyword={Categories.mech.keywords.size} />, click
        anywhere on the grid to select the location of your mech. You can then
        increase the{" "}
        <lancer-keyword keyword={Categories.combat.keywords.range} /> to see
        which tiles your mech could hit with their{" "}
        <lancer-keyword keyword={Categories.attacks.keywords.ranged_attack} />.
      </p>
      <p>
        <lancer-keyword keyword={Categories.attacks.keywords.melee_attack}>
          melee attacks
        </lancer-keyword>{" "}
        use <lancer-keyword keyword={Categories.combat.keywords.threat} />, and{" "}
        <lancer-keyword keyword={Categories.attacks.keywords.tech_attack}>
          tech attacks
        </lancer-keyword>{" "}
        use their <lancer-keyword keyword={Categories.mech.keywords.sensors} />{" "}
        instead of range to determine their range though the principle is the
        same for all three{" "}
        <lancer-keyword keyword={Categories.combat.keywords.attack} /> types.
      </p>
      <p>
        Realistically, player mechs do not go above{" "}
        <lancer-keyword keyword={Categories.mech.keywords.size} /> 3, and NPCs
        rarely go higher than size 4 (such as, for example, large vehicles) so
        take the higher sizes more as a fun showcase. A size 10 mech could hit
        as far with a{" "}
        <lancer-keyword keyword={Categories.combat.keywords.threat}>
          threat 1
        </lancer-keyword>{" "}
        <lancer-keyword keyword={Categories.attacks.keywords.melee_attack} /> as
        a size 1 mech could hit with a{" "}
        <lancer-keyword keyword={Categories.combat.keywords.range} /> 5{" "}
        <lancer-keyword keyword={Categories.mech.keywords.weapon} />.
      </p>
      <div className="buttons">
        <div className="buttons-row">
          <div className="slider">
            <span>Hex Width: {width}</span>
            <input
              type="range"
              min="3"
              max="20"
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
            />
          </div>
          <div className="slider">
            <span>Hex Height: {height}</span>
            <input
              type="range"
              min="3"
              max="20"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
            />
          </div>
          <div className="slider">
            <span>Mech Size: {size === 0 ? "1/2" : size}</span>
            <input
              type="range"
              min="0"
              max="10"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="buttons-row">
          <div className="slider">
            <span>Range: {x}</span>
            <input
              type="range"
              min="1"
              max="10"
              value={x}
              onChange={(e) => setX(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
      <div
        id="hex-container"
        style={{ "--hex-width": `${hexWidth}px` } as React.CSSProperties}
      >
        {rows}
      </div>
    </Section>
  );
}

export default Range;
