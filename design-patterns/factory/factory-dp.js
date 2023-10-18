const CAR_TYPES = {
  four: "Four",
  six: "Six",
};
class CarInterface {
  constructor(name) {
    this.name = name;
  }
  show() {
    console.log(`Car: ${this.name}`);
  }
}

class FourSeaterCar extends CarInterface {
  constructor() {
    super("Four Seater Car");
  }
}
class SixSeaterCar extends CarInterface {
  constructor() {
    super("Six Seater Car");
  }
}

class CarFactory {
  createCar(carType) {
    switch (carType) {
      case CAR_TYPES.four:
        return new FourSeaterCar();
      case CAR_TYPES.six:
        return new SixSeaterCar();
      default:
        return {};
    }
  }
}
const carFactory = new CarFactory();

const fourSeaterCar = carFactory.createCar(CAR_TYPES.four);
const sixSeaterCar = carFactory.createCar(CAR_TYPES.six);
fourSeaterCar.show();
sixSeaterCar.show();

/*
The Factory Design Pattern is particularly useful when you need to create multiple objects 
with a common interface, and the exact type of object to be created is determined at runtime.

This allows for greater flexibility and makes it easy to switch between different types of cars
 without changing the client code, which is the main advantage of the Factory Design Pattern.
*/
