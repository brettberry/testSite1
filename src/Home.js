import React, { Component } from 'react';
import Grid from './Grid';
import data from './data.json';
import Location from './Location';
import map from 'lodash/map';

const locations = map(data.locations, l => new Location(l));

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center'
  }
};

class Home extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Grid locations={locations}/>
      </div>
    );
  }

}

export default Home;
