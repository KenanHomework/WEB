import React from "react";

import "./person-details.css";
import Spinner from "../spinner";

const ListItemDetails = ({ imgUrl, displayName, itemData }) => {
  const convertDisplayName = (str) => {
    const capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
    const words = capitalizedStr.match(/[A-Z][a-z]+/g);
    if (words) {
      return words.join(" ");
    }
    return "";
  };

  return itemData == null ? (
    <Spinner />
  ) : (
    <div className="person-details card">
      <img className="person-image" src={imgUrl} alt={"data image"} />

      <div className="card-body">
        <h4>{displayName}</h4>
        <ul className="list-group list-group-flush">
          {Object.entries(itemData).map(([paramDisplayName, paramData]) => (
            <li className="list-group-item">
              <span className="term">
                {convertDisplayName(paramDisplayName)}:
              </span>
              <span>{paramData}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ListItemDetails;
