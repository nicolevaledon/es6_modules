import Car from "./car.js";

export default class WishList {
  constructor() {
    this.list = [];
    this.nextId = 0;
  }

  add(make, model, year) {
    const tempCar = new Car(++this.nextId, make, model, year);
    this.list.push(tempCar);
  }
  remove(carId) {
    // const matchingCarIndex = this.list.findIndex((car) => {
    //   return car.id == carId;
    // });
    // this.list.splice(matchingCarIndex, 1);

    this.list = this.list.filter((car) => {
      return car.id != carId;
    });
  }
}
