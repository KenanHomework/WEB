import React, { useEffect, useState } from "react";
import "./item-list.css";
import ApiService from "../../Services/api-service";
import Spinner from "../spinner";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const ItemList = ({ getData, renderItem, onSelectionChange, selectedId }) => {
  const apiService = new ApiService();
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [animationParent] = useAutoAnimate();

  function onPeopleLoaded(items) {
    setItemList(items);
    setLoading(false);
  }

  const updateData = () => {
    getData().then(onPeopleLoaded);
  };

  useEffect(updateData, []);

  const renderItems = (items) => {
    return items.map((item) => {
      const { id } = item;
      const displayData = renderItem(item);
      let liClassName = "list-group-item ";

      if (item.id === selectedId) {
        liClassName += " selected ";
      }

      return (
        <li
          key={id}
          className={liClassName}
          onClick={() => {
            onSelectionChange(item.id);
          }}
        >
          {displayData}
        </li>
      );
    });
  };

  return (
    <ul className="item-list list-group" ref={animationParent}>
      {loading ? <Spinner /> : renderItems(itemList)}
    </ul>
  );
};
export default ItemList;
