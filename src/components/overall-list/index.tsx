import { data } from "../../constants";
import "./style.scss";

const icons = [
  <i className="bx bx-receipt" />,
  <i className="bx bx-user" />,
  <i className="bx bx-cube" />,
  <i className="bx bx-dollar" />,
];

const OverallList = () => {
  return (
    <ul className="overall-list">
      {data.overall.map((item, index) => (
        <li className="overall-list__item" key={`overall-${index}`}>
          <div className="overall-list__item__icon">{icons[index]}</div>
          <div className="overall-list__item__info">
            <div className="title">{item.value}</div>
            <span>{item.title}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default OverallList;
