import React, { useEffect, useState } from "react";
import "./item-list.css";
import ApiService from "../../Services/api-service";
import Spinner from "../spinner";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const ItemList = ({ onselectionchange, selectedId }) => {
  const apiService = new ApiService();
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [animationParent] = useAutoAnimate();

  function onPeopleLoaded(people) {
    setPeople(people);
    setLoading(false);
  }

  const getPeople = () => {
    apiService.getPeopleTransformed().then(onPeopleLoaded);
  };

  useEffect(getPeople, []);

  return (
    <ul className="item-list list-group" ref={animationParent}>
      {loading ? (
        <Spinner />
      ) : (
        people.map((person) => {
          let liClassName = "list-group-item ";

          if (person.id === selectedId) {
            liClassName += " selected ";
          }

          return (
            <li
              key={person.id}
              className={liClassName}
              onClick={() => {
                onselectionchange(person.id);
              }}
            >
              {person.name}
            </li>
          );
        })
      )}
    </ul>
  );
};
export default ItemList;
