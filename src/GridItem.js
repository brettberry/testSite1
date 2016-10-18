import React, { Component, PropTypes } from 'react';
import Location from './Location';

const styles = {
  header: {
    margin: 0,
    color: 'white',
    fontFamily: '"Open Sans", sans-serif'
  },
  subheader: {
    fontWeight: 'lighter',
    fontSize: '10pt'
  }
};

class GridItem extends Component {

  static propTypes = {
    location: PropTypes.instanceOf(Location),
    style: PropTypes.object
  }

  render() {
    const { location, style } = this.props;
    return (
      <div style={style}>
        <div style={this.getInnerStyles()}>
          <h1 style={styles.header}>{location.getCity()}</h1>
          <h2 style={{ ...styles.header, ...styles.subheader }}>{location.getCountry()}</h2>
        </div>
      </div>
    );
  }

  getInnerStyles() {
    const { location } = this.props;
    const img = location.getImage();
    return {
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flex: 1,
      alignSelf: 'stretch',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    };
  }
}

export default GridItem;
