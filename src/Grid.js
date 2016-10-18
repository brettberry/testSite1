import React, { Component, PropTypes } from 'react';
import Location from './Location';
import GridItem from './GridItem';
import map from 'lodash/map';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '1100px',
    flex: 1
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '33%',
    height: '250px',
    padding: '10px'
  }
};

class Grid extends Component {

  static propTypes = {
    locations: PropTypes.arrayOf(PropTypes.instanceOf(Location))
  }

  render() {
    const { locations } = this.props;
    const gridItems = map(locations, (l, i) => <GridItem key={i} location={l} style={styles.item}/>);
    return (
      <div style={styles.container}>
        {gridItems}
      </div>
    );
  }
}

export default Grid;
