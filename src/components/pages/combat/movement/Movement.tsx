import "./Movement.scss";

function Movement() {
  return (
    <div className="movement">
      <h1>Movement</h1>
      <div>
        <p>Move up to your mech's [k]speed in any direction.</p>
        <ul>
          <li>
            You can [k]split movement however you want with your [k]actions. You
            can move before, inbetween & after your actions. As long as the
            total amount you've moved doesn't exceed your speed, you're good.
          </li>
          <li>
            If you move [K]Adjacent to another mech, you become [K]Engaged. If
            the mech is the same [k]size or larger, you must stop. Trying to
            move away could trigger a [k]reaction like [k]Overwatch.
          </li>
          <li>
            Movement can pass through [k]allies & smaller [k]size obstructions,
            including [k]enemy mechs. Same or larger objects block movement,
            though obstructions can be [k]destroyed.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Movement;
