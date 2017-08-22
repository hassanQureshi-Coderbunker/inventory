import React, { Component } from 'react';
import itemsJSON from './data/inventory.json';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { shortId: '', matchedItem: {} };
  }



  render() {

    let newItem = this.state.matchedItem;

      return (
        <div className="search-bar">
          <input
            value={this.state.shortId}
            onChange={event => this.onInputChange(event.target.value)} />
            <div>
              {Object.keys(newItem).map(function(key) {
                return <p>{key}: {newItem[key]}</p>;
              })}
            </div>
        </div>
      );
    }




  onInputChange(shortId) {
    this.setState({shortId});
    let that = this;

    let matchedItem = itemsJSON.filter(function(item) {

      let uuid = item.uuid;

      if (uuid) {
        if (uuid.substr(0,8).toLowerCase() === shortId.toLowerCase()) {
          that.setState({matchedItem: item});
        }
      }
    });
  }

}


export default SearchBar;
