import React from 'react';
import itemsJSON from './data/inventory.json';

const ItemDetail = ({item}) => {

  const link = item.result;

  if (!link) {
    return <div>Show me QR code:)</div>;
  }


    let id = link.substr(-36);

    let matchedItem = itemsJSON.find(function(item) {
      return item.uuid === id;
    });

    console.log(matchedItem);

  if (matchedItem) {
    return (
        <div>
          {
            Object.keys(matchedItem).map(function(key) {
            return <p>{key}: {matchedItem[key]}</p>;
          })
        }
        </div>


    )
  } else {
    return <div>Not found</div>
  }

};



export default ItemDetail;
