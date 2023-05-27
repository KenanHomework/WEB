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

  // console.log(
  //   selectedId === null || selectedId <= 0
  //     ? "failed to select"
  //     : getSelectedItem(selectedId)
  // );
  // console.log(_getSelectedItem().value);
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
          // itemData={getSelectedItem(selectedId).then((person) => person)}
        />
      </div>
    </div>
  );
};

export default ListAndDetails;
