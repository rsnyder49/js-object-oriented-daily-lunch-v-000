// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;

class Neighborhood {
  constructor(name) {
    this.name = name;
    this.id = ++neighborhoodId;
    store.neighborhoods.push(this);
  }
  deliveries() {
    return store.deliveries.filter(delivery => {
      return delivery.neighborhoodId === this.id;
     });
  }
  customers() {
    return store.customers.filter(customer => {
      return customer.neighborhoodId === this.id;
    });
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

let mealId = 0;

class Meal {
  constructor(title, price) {
    this.title = title;
    this.price = price;
    this.id = ++mealId;
    store.meals.push(this);
  }
  deliveries() {
     return store.deliveries.filter(delivery => {
       return delivery.customerId === this.id;
     });
   }
   meals() {
     return this.deliveries().map(delivery => {
       return delivery.meal();
     });
   }
   totalSpent() {
     return this.meals().reduce(function (total, meal) {
       return total + meal.price;
    }, 0);
  }
}

let deliveryId = 0;

class Delivery {
  constructor(mealId, neighborhoodId, custormerId) {
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId;
    this.custormerId = custormerId;
    this.id = ++deliverId;
  }
}


