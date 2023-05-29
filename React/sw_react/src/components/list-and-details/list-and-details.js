import React, { useEffect, useState } from "react";
import ItemList from "../item-list";
import ItemDetails from "../item-details";

const ListAndDetails = ({
  renderItem,
  getData,
  getSelectedItem,
  getImg,
  renderDetailsDisplayName,
}) => {
  const [selectedId, setSelectedId] = useState(-1);
  const [selectedItem, setSelectedItem] = useState({});

  const onSelectionChange = (id) => {
    setSelectedId(id);
  };

  const updatePerson = () => {
    if (selectedId == null || selectedId === -1) return;
    getSelectedItem(selectedId).then(setSelectedItem);
  };

  useEffect(updatePerson, [selectedId]);

  return (
    <div className="row mb2">
      <div className="col-md-6">
        <ItemList
          renderItem={renderItem}
          getData={getData}
          onSelectionChange={onSelectionChange}
          selectedId={selectedId == null ? -1 : selectedId}
        />
      </div>
      <div className="col-md-6">
        <ItemDetails
          imgUrl={getImg(selectedId)}
          renderDetailsDisplayName={renderDetailsDisplayName}
          itemData={selectedItem}
        />
      </div>
    </div>
  );
};

export default ListAndDetails;
