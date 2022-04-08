import { PENDING_STATUS, PROGRESS_STATUS } from "./consts";

export function setColorOfStatus(type) {
  switch (type) {
    case PENDING_STATUS:
      return (
        <div className="content__status__orange">
          <span className="status__pending">Pending</span>
        </div>
      );
    case PROGRESS_STATUS:
      return (
        <div className="content__status__light-blue">
          <span className="status__progress">In progress</span>
        </div>
      );
    default:
      return <div>Problem occured</div>;
  }
}
