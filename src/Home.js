import React, { Component } from 'react';
import Grid from './Grid';
import data from './data.json';
import Location from './Location';
import map from 'lodash/map';

const locations = map(data.locations, l => new Location(l));

class Home extends Component {
  render() {
    return (
      <Grid locations={locations}/>
    );
  }

}

export default Home;
