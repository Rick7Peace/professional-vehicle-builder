// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// import Chalk for color-coded terminal output
import chalk from 'chalk';

// Car class that extends Vehicle class
class Car extends Vehicle {
  // Declare properties of the Car class
  vin: string;
  color: string;
  override make: string;
  override model: string;
  year: number;
  weight: number;
  override topSpeed: number;
  wheels: Wheel[];

  // Constructor for the Car class
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
    // Call the constructor of the parent class, Vehicle
    super();

    // Initialize properties of the Car class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    // Check if the wheels array has 4 elements
    // If not, create 4 new Wheel objects
    // Otherwise, use the provided wheels array
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // Call the printDetails method of the parent class, Vehicle
    super.printDetails();

    // Print details of the Car class — cyan labels, magenta values for vehicle identity
    console.log(chalk.cyan('VIN:') + ` ${chalk.magenta(this.vin)}`);
    console.log(chalk.cyan('Color:') + ` ${this.color}`);
    console.log(chalk.cyan('Make:') + ` ${this.make}`);
    console.log(chalk.cyan('Model:') + ` ${this.model}`);
    console.log(chalk.cyan('Year:') + ` ${this.year}`);
    console.log(chalk.cyan('Weight:') + ` ${this.weight} lbs`);
    console.log(chalk.cyan('Top Speed:') +` ${this.topSpeed} mph`);
    // Print details of the Car class — cyan labels, magenta values for vehicle identity
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

// Export the Car class as the default export
export default Car;