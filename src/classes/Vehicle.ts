// import Driveable interface
import Driveable from '../interfaces/Driveable.js';
// import Chalk for color-coded terminal output
import chalk from 'chalk';

// Vehicle class that implements Driveable interface
class Vehicle implements Driveable {
  // Declare properties of the Vehicle class
  started: boolean;
  currentSpeed: number;

  // Constructor for the Vehicle class
  constructor() {
    this.started = false;
    this.currentSpeed = 0;
  }

  // Method to print vehicle details
  printDetails(): void {
    console.log(chalk.cyan('Vehicle started:') + ` ${this.started}`);
    console.log(chalk.cyan('Vehicle current speed:') + ` ${this.currentSpeed} mph`);
  }

  // Method to start the vehicle
  start(): void {
    this.started = true;
    console.log(chalk.green.bold('Vehicle started'));
  }

  // Method to accelerate the vehicle
  accelerate(change: number): void {
    // Check if the vehicle is started
    if (this.started) {
      this.currentSpeed += change;
      console.log(chalk.white.bold(`Vehicle accelerated to ${this.currentSpeed} mph`));
    } else {
      console.log(chalk.red.bold('Start the vehicle first'));
    }
  }

  // Method to decelerate the vehicle
  decelerate(change: number): void {
    // Check if the vehicle is started
    if (this.started) {
      this.currentSpeed -= change;
      console.log(chalk.white.bold(`Vehicle decelerated to ${this.currentSpeed} mph`));
    } else {
      console.log(chalk.red.bold('Start the vehicle first'));
    }
  }

  // Method to stop the vehicle
  stop(): void {
    this.currentSpeed = 0;
    this.started = false;
    console.log(chalk.yellow.bold('Vehicle stopped'));
  }

  // Method to turn the vehicle
  turn(direction: string): void {
    // Check if the vehicle is started
    if (this.started) {
      console.log(chalk.white.bold(`Vehicle turned ${direction}`));
    } else {
      console.log(chalk.red.bold('Start the vehicle first'));
    }
  }

  // Method to reverse the vehicle
  reverse(): void {
    // Check if the vehicle is started
    if (this.started) {
      console.log(chalk.white.bold('Vehicle reversed'));
    } else {
      console.log(chalk.red.bold('Start the vehicle first'));
    }
  }
}

// Export the Vehicle class
export default Vehicle;