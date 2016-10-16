import React, { Component, PropTypes } from 'react';
import Location from './Location';

class GridItem extends Component {

  static propTypes = {
    location: PropTypes.instanceOf(Location)
  }

  render() {
    const { location } = this.props;
    return (
      <div>
        <h1>{location.getCity()}</h1>
        <h2>{location.getCountry()}</h2>
      </div>
    );
  }
}

export default GridItem;
