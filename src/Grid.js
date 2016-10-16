import React, { Component, PropTypes } from 'react';
import Location from './Location';
import GridItem from './GridItem';
import map from 'lodash/map';

class Grid extends Component {

  static propTypes = {
    locations: PropTypes.arrayOf(PropTypes.instanceOf(Location))
  }

  render() {
    const { locations } = this.props;
    const gridItems = map(locations, l => <GridItem location={l}/>);
    return (
      <div>
        {gridItems}
      </div>
    );
  }
}

export default Grid;
