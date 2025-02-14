import { ActionType } from "./TypeEnum";
import "./Tag.scss";

function Tag({ type }: { type: ActionType }) {
  return <span className={`tag ${type}`}>{type}</span>;
}

export default Tag;
