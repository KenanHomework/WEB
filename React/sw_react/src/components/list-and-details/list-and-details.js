import React from "react";
import ItemList from "../item-list";
import ListItemDetails from "../list-item-details";

const ListAndDetails = ({
  renderItem,
  getData,
  onSelectionChange,
  selectedId,
  imgUrl,
  displayName,
  itemData,
}) => {
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
        <ListItemDetails
          imgUrl={imgUrl}
          displayName={displayName}
          itemData={itemData}
        />
      </div>
    </div>
  );
};

export default ListAndDetails;
