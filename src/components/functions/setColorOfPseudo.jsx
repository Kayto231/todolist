import { GREEN_COLOR, ORANGE_COLOR, RED_COLOR } from "./consts";

export function setColorOfPseudo(type) {
  switch (type) {
    case RED_COLOR:
      return (
        <div className="content__priority">
          <img
            className="img__priority"
            src="./img/prioritybeforered.svg"
            alt="prioritybefore"
          />
          <span className="priority">Critical</span>
        </div>
      );
    case GREEN_COLOR:
      return (
        <div className="content__priority">
          <img
            className="img__priority"
            src="./img/prioritybeforegreen.svg"
            alt="prioritybefore"
          />
          <span className="priority">Minor</span>
        </div>
      );
    case ORANGE_COLOR:
      return (
        <div className="content__priority">
          <img
            className="img__priority"
            src="./img/prioritybeforeorange.svg"
            alt="prioritybefore"
          />
          <span className="priority">Normal</span>
        </div>
      );
    default:
      return <div>Problem occured</div>;
  }
}
