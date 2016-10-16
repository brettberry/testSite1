import Model from './Model';

class Location extends Model {
  getCity() {
    return this.get('city');
  }

  getCountry() {
    return this.get('country');
  }
}

export default Location;
