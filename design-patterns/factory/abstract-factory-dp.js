class CarCompany {
  constructor() {
    this.type = "car";
  }
  show() {
    console.log("Vehicle type ", this.type);
  }
}
class BikeCompany {
  constructor() {
    this.type = "Bike";
  }
  show() {
    console.log("Vehicle type ", this.type);
  }
}

class TeslaCar extends CarCompany {
  constructor() {
    super();
    this.type = "Tesla Car";
  }
}
class TeslaBike extends BikeCompany {
  constructor() {
    super();
    this.type = "Tesla Bike";
  }
}
class TataCar extends CarCompany {
  constructor() {
    super();
    this.type = "Tata Car";
  }
}
class TataBike extends BikeCompany {
  constructor() {
    super();
    this.type = "Tata Bike";
  }
}

class VehicleCompanyAB {
  createCar() {}
  createBike() {}
}

class TeslaCompany extends VehicleCompanyAB {
  createCar() {
    return new TeslaCar();
  }
  createBike() {
    return new TeslaBike();
  }
}
class TataCompany extends VehicleCompanyAB {
  createCar() {
    return new TataCar();
  }
  createBike() {
    return new TataBike();
  }
}

const teslaCompany = new TeslaCompany();
const tataCompany = new TataCompany();

teslaCompany.createCar().show();
teslaCompany.createBike().show();

/*
  -- Benefits
  - It hides the logic of instantiation
  - Reduce code duplicity
  - One place change will change everywhere
  - Used to create one category of objects
  
  #Interview Questions:
  - What is Abstract factory Pattern
  - What is the purpose of factory design pattern
  - Difference between factory and Abstract factory
  - Have you used in your project and what problem it solved
  - Example of Abstract factory class
*/
