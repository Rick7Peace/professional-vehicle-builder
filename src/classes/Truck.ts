// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';
// import Chalk for color-coded terminal output
import chalk from 'chalk';

// Truck class — extends Vehicle for shared behavior, implements AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // Truck-specific properties (Vehicle provides started, currentSpeed)
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    // Initialize Vehicle base class (started=false, currentSpeed=0)
    super();

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    // Trucks require exactly 4 wheels — default if wrong count provided
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  // Fulfills AbleToTow interface — accepts any vehicle type via union type
  tow(vehicle: Truck | Motorbike | Car): void {
    const vehicleInfo = `${vehicle.make} ${vehicle.model}`;

    if (vehicle.weight <= this.towingCapacity) {
      console.log(chalk.green.bold(`${vehicleInfo} is being towed`));
    } else {
      console.log(chalk.red.bold(`${vehicleInfo} is too heavy to be towed`));
    }
  }

  // Override Vehicle's printDetails — adds Truck-specific info
  override printDetails(): void {
    // Parent prints started status and current speed (already colored)
    super.printDetails();

    // Truck-specific details — cyan labels, magenta VIN
    console.log(chalk.cyan('VIN:') + ` ${chalk.magenta(this.vin)}`);
    console.log(chalk.cyan('Color:') + ` ${this.color}`);
    console.log(chalk.cyan('Make:') + ` ${this.make}`);
    console.log(chalk.cyan('Model:') + ` ${this.model}`);
    console.log(chalk.cyan('Year:') + ` ${this.year}`);
    console.log(chalk.cyan('Weight:') + ` ${this.weight} lbs`);
    console.log(chalk.cyan('Top Speed:') + ` ${this.topSpeed} mph`);
    console.log(chalk.cyan('Towing Capacity:') + ` ${this.towingCapacity} lbs`);

    // Wheel details
    console.log(
      chalk.cyan('Wheel 1:') + ` ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      chalk.cyan('Wheel 2:') + ` ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
    console.log(
      chalk.cyan('Wheel 3:') + ` ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
    );
    console.log(
      chalk.cyan('Wheel 4:') + ` ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
    );
  }
}

// Export the Truck class as the default export
export default Truck;