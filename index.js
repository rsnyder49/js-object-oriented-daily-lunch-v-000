// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;

class Neighborhood {
  constructor(name) {
    this.name = name;
    this.id = ++neighborhoodId;
    store.neighborhoods.push(this);
  }
}

let custormerId = 0;

class Customer {
  constructor(name) {
  this.name = name;
  this.id = ++custormerId;
  store.customers.push(this);
  }
}






