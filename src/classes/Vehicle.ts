// import Driveable interface
import Driveable from "../interfaces/Driveable.js";
// import Chalk for color-coded terminal output
import chalk from "chalk";

// Vehicle class that implements Driveable interface
class Vehicle implements Driveable {
  // Declare properties of the Vehicle class
  started: boolean;
  currentSpeed: number;
  fuelLevel: number;

  // Constructor for the Vehicle class
  constructor() {
    this.started = false;
    this.currentSpeed = 0;
    this.fuelLevel = 100; // Full tank at creation
  }

  // Method to print vehicle details
  printDetails(): void {
    console.log(chalk.cyan("Vehicle started:") + ` ${this.started}`);
    console.log(
      chalk.cyan("Vehicle current speed:") + ` ${this.currentSpeed} mph`
    );
    // Color-code fuel level based on remaining
    if (this.fuelLevel > 50) {
      console.log(chalk.cyan("Fuel Level:") + ` ${chalk.green.bold(this.fuelLevel)}%`
      );
    } else if (this.fuelLevel > 20) {
      console.log(chalk.cyan("Fuel Level:") +
          ` ${chalk.yellow.bold(`${this.fuelLevel}%`)}`
      );
    } else {
      console.log(chalk.cyan("Fuel Level:") + ` ${chalk.red.bold(this.fuelLevel)}%`
      );
    }
  }

  // Method to start the vehicle
  start(): void {
    if (this.fuelLevel <= 0) {
      console.log(
        chalk.red.bold("Cannot start - fuel tank is empty! Refuel first.")
      );
      return;
    }
    this.started = true;
    console.log(chalk.green.bold("Vehicle started"));
  }

  // Method to accelerate the vehicle
  accelerate(change: number): void {
    // Check if the vehicle is started
    if (this.started) {
      // Check if there is fuel to accelerate
      if (this.fuelLevel <= 0) {
        console.log(chalk.red.bold("Out of fuel! Vehicle stalling..."));
        this.currentSpeed = 0;
        this.started = false;
        return;
      }
      this.currentSpeed += change;
      this.fuelLevel -= 5; // Each acceleration burns 5% fuel
      // Prevent fuel from going below 0
      if (this.fuelLevel < 0) {
        this.fuelLevel = 0;
      }
      console.log(
        chalk.white.bold(`Vehicle accelerated to ${this.currentSpeed} mph`)
      );
    } else {
      console.log(chalk.red.bold("Start the vehicle first"));
    }
  }

  // Method to decelerate the vehicle
  decelerate(change: number): void {
    // Check if the vehicle is started
    if (this.started) {
      this.currentSpeed -= change;
      // Prevent speed from going below 0
      if (this.currentSpeed < 0) {
        this.currentSpeed = 0;
      }
      console.log(
        chalk.white.bold(`Vehicle decelerated to ${this.currentSpeed} mph`)
      );
    } else {
      console.log(chalk.red.bold("Start the vehicle first"));
    }
  }

  // Method to stop the vehicle
  stop(): void {
    this.currentSpeed = 0;
    this.started = false;
    console.log(chalk.yellow.bold("Vehicle stopped"));
  }

  // Method to turn the vehicle
  turn(direction: string): void {
    // Check if the vehicle is started
    if (this.started) {
      console.log(chalk.white.bold(`Vehicle turned ${direction}`));
    } else {
      console.log(chalk.red.bold("Start the vehicle first"));
    }
  }

  // Method to reverse the vehicle
  reverse(): void {
    // Check if the vehicle is started
    if (this.started) {
      console.log(chalk.white.bold(`Vehicle reversed`));
    } else {
      console.log(chalk.red.bold("Start the vehicle first"));
    }
  }

  // Method to refuel the vehicle
  refuel(): void {
    this.fuelLevel = 100;
    console.log(chalk.green.bold("⛽️ Vehicle refueled to 100%!"));
  }
}

// Export the Vehicle class
export default Vehicle;
