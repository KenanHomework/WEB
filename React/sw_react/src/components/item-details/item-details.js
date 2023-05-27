import React from "react";

import "./person-details.css";
import { Alert } from "@mui/material";

const ItemDetails = ({ imgUrl, renderDetailsDisplayName, itemData }) => {
  const convertDisplayName = (str) => {
    const capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
    const words = capitalizedStr.match(/[A-Z][a-z]+/g);
    if (words) {
      return words.join(" ");
    }
    return "";
  };

  // console.log(itemData);

  return itemData === null ||
    itemData === undefined ||
    Object.entries(itemData).length <= 0 ? (
    <Alert
      icon={false}
      severity="success"
      variant="outlined"
      className={"mt-3 text-white"}
    >
      select an item for a detailed view
    </Alert>
  ) : (
    <div className="person-details card">
      <img className="person-image" src={imgUrl} alt={"data image"} />

      <div className="card-body">
        <h4>{renderDetailsDisplayName(itemData)}</h4>
        <ul className="list-group list-group-flush">
          {Object.entries(itemData).map(([paramDisplayName, paramData]) => (
            <li key={paramDisplayName} className="list-group-item">
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
export default ItemDetails;
