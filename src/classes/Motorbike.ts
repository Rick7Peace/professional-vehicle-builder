// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// import Chalk for color-coded terminal output
import chalk from 'chalk';

// Motorbike class — extends Vehicle but does NOT implement AbleToTow
// Has a unique wheelie() method that only Motorbike can perform
class Motorbike extends Vehicle {
  // Motorbike-specific properties (Vehicle provides started, currentSpeed)
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
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

    // Motorbikes require exactly 2 wheels — default if wrong count provided
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  // Unique to Motorbike — Car and Truck cannot do this
  wheelie(): void {
    console.log(chalk.green.bold(`Motorbike ${this.make} ${this.model} is doing a wheelie!`));
  }

  // Override Vehicle's printDetails — adds Motorbike-specific info
  override printDetails(): void {
    // Parent prints started status and current speed (already colored)
    super.printDetails();

    // Motorbike-specific details — cyan labels, magenta VIN
    console.log(chalk.cyan('VIN:') + ` ${chalk.magenta(this.vin)}`);
    console.log(chalk.cyan('Color:') + ` ${this.color}`);
    console.log(chalk.cyan('Make:') + ` ${this.make}`);
    console.log(chalk.cyan('Model:') + ` ${this.model}`);
    console.log(chalk.cyan('Year:') + ` ${this.year}`);
    console.log(chalk.cyan('Weight:') + ` ${this.weight} lbs`);
    console.log(chalk.cyan('Top Speed:') + ` ${this.topSpeed} mph`);

    // Only 2 wheels for a motorbike
    console.log(
      chalk.cyan('Front Wheel:') + ` ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      chalk.cyan('Rear Wheel:') + ` ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
  }
}

// Export the Motorbike class as the default export
export default Motorbike;