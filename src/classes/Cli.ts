// importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";
// import Chalk for color-coded terminal output
import chalk from 'chalk';

// define the Cli class
class Cli {
  // Union type array — holds any mix of Cars, Trucks, and Motorbikes
  vehicles: (Car | Truck | Motorbike)[];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  constructor(vehicles: (Car | Truck | Motorbike)[]) {
    this.vehicles = vehicles;
  }

  // static method to generate a vin
  static generateVin(): string {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  // method to choose a vehicle from existing vehicles
  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: chalk.yellow('Select a vehicle to perform an action on'),
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            };
          }),
        },
      ])
      .then((answers) => {
        this.selectedVehicleVin = answers.selectedVehicleVin;
        this.performActions();
      });
  }

  // method to create a vehicle
  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: chalk.yellow('Select a vehicle type'),
          choices: ['Car', 'Truck', 'Motorbike'],
        },
      ])
      .then((answers) => {
        if (answers.vehicleType === 'Car') {
          this.createCar();
        } else if (answers.vehicleType === 'Truck') {
          this.createTruck();
        } else if (answers.vehicleType === 'Motorbike') {
          this.createMotorbike();
        }
      });
  }

  // method to create a car
  createCar(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: chalk.yellow('Enter Color'),
        },
        {
          type: 'input',
          name: 'make',
          message: chalk.yellow('Enter Make'),
        },
        {
          type: 'input',
          name: 'model',
          message: chalk.yellow('Enter Model'),
        },
        {
          type: 'input',
          name: 'year',
          message: chalk.yellow('Enter Year'),
        },
        {
          type: 'input',
          name: 'weight',
          message: chalk.yellow('Enter Weight'),
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: chalk.yellow('Enter Top Speed'),
        },
      ])
      .then((answers) => {
        const car = new Car(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );
        this.vehicles.push(car);
        this.selectedVehicleVin = car.vin;
        // Confirm vehicle creation with green success message
        console.log(chalk.green.bold(`\n🚗 ${answers.make} ${answers.model} created successfully!\n`));
        this.performActions();
      });
  }

  // method to create a truck
  createTruck(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: chalk.yellow('Enter Color'),
        },
        {
          type: 'input',
          name: 'make',
          message: chalk.yellow('Enter Make'),
        },
        {
          type: 'input',
          name: 'model',
          message: chalk.yellow('Enter Model'),
        },
        {
          type: 'input',
          name: 'year',
          message: chalk.yellow('Enter Year'),
        },
        {
          type: 'input',
          name: 'weight',
          message: chalk.yellow('Enter Weight'),
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: chalk.yellow('Enter Top Speed'),
        },
        {
          type: 'input',
          name: 'towingCapacity',
          message: chalk.yellow('Enter Towing Capacity'),
        },
      ])
      .then((answers) => {
        const truck = new Truck(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [],
          parseInt(answers.towingCapacity)
        );
        this.vehicles.push(truck);
        this.selectedVehicleVin = truck.vin;
        // Confirm vehicle creation with green success message
        console.log(chalk.green.bold(`\n🚛 ${answers.make} ${answers.model} created successfully!\n`));
        this.performActions();
      });
  }

  // method to create a motorbike
  createMotorbike(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: chalk.yellow('Enter Color'),
        },
        {
          type: 'input',
          name: 'make',
          message: chalk.yellow('Enter Make'),
        },
        {
          type: 'input',
          name: 'model',
          message: chalk.yellow('Enter Model'),
        },
        {
          type: 'input',
          name: 'year',
          message: chalk.yellow('Enter Year'),
        },
        {
          type: 'input',
          name: 'weight',
          message: chalk.yellow('Enter Weight'),
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: chalk.yellow('Enter Top Speed'),
        },
        {
          type: 'input',
          name: 'frontWheelDiameter',
          message: chalk.yellow('Enter Front Wheel Diameter'),
        },
        {
          type: 'input',
          name: 'frontWheelBrand',
          message: chalk.yellow('Enter Front Wheel Brand'),
        },
        {
          type: 'input',
          name: 'rearWheelDiameter',
          message: chalk.yellow('Enter Rear Wheel Diameter'),
        },
        {
          type: 'input',
          name: 'rearWheelBrand',
          message: chalk.yellow('Enter Rear Wheel Brand'),
        },
      ])
      .then((answers) => {
        const motorbike = new Motorbike(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [
            new Wheel(
              parseInt(answers.frontWheelDiameter),
              answers.frontWheelBrand
            ),
            new Wheel(
              parseInt(answers.rearWheelDiameter),
              answers.rearWheelBrand
            ),
          ]
        );
        this.vehicles.push(motorbike);
        this.selectedVehicleVin = motorbike.vin;
        // Confirm vehicle creation with green success message
        console.log(chalk.green.bold(`\n🏍️  ${answers.make} ${answers.model} created successfully!\n`));
        this.performActions();
      });
  }

  // Prompts user to select a vehicle to tow — only called from a Truck
  findVehicleToTow(truck: Truck): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleToTow',
          message: chalk.yellow('Select a vehicle to tow'),
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle,
            };
          }),
        },
      ])
      .then((answers) => {
        if (answers.vehicleToTow.vin === truck.vin) {
          console.log(chalk.red.bold('The truck cannot tow itself'));
          this.performActions();
        } else {
          truck.tow(answers.vehicleToTow);
          this.performActions();
        }
      });
  }

  // method to perform actions on a vehicle
  performActions(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: chalk.yellow('Select an action'),
          choices: [
            'Print details',
            'Start vehicle',
            'Accelerate 5 MPH',
            'Decelerate 5 MPH',
            'Stop vehicle',
            'Turn right',
            'Turn left',
            'Reverse',
            'Tow',
            'Wheelie',
            'Select or create another vehicle',
            'Exit',
          ],
        },
      ])
      .then((answers) => {
        if (answers.action === 'Print details') {
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].printDetails();
            }
          }
        } else if (answers.action === 'Start vehicle') {
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].start();
            }
          }
        } else if (answers.action === 'Accelerate 5 MPH') {
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].accelerate(5);
            }
          }
        } else if (answers.action === 'Decelerate 5 MPH') {
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].decelerate(5);
            }
          }
        } else if (answers.action === 'Stop vehicle') {
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].stop();
            }
          }
        } else if (answers.action === 'Turn right') {
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('right');
            }
          }
        } else if (answers.action === 'Turn left') {
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('left');
            }
          }
        } else if (answers.action === 'Reverse') {
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].reverse();
            }
          }
        }
        // Tow action — only available if selected vehicle is a Truck
        else if (answers.action === 'Tow') {
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              const selectedVehicle = this.vehicles[i];
              if (selectedVehicle instanceof Truck) {
                this.findVehicleToTow(selectedVehicle);
                return;
              } else {
                console.log(chalk.red.bold('Only trucks can tow other vehicles'));
              }
            }
          }
        }
        // Wheelie action — only available if selected vehicle is a Motorbike
        else if (answers.action === 'Wheelie') {
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              const selectedVehicle = this.vehicles[i];
              if (selectedVehicle instanceof Motorbike) {
                selectedVehicle.wheelie();
              } else {
                console.log(chalk.red.bold('Only motorbikes can do a wheelie'));
              }
            }
          }
        } else if (answers.action === 'Select or create another vehicle') {
          this.startCli();
          return;
        } else {
          this.exit = true;
        }
        if (!this.exit) {
          this.performActions();
        }
      });
  }

  // method to start the cli
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message: chalk.yellow('Would you like to create a new vehicle or perform an action on an existing vehicle?'),
          choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
      ])
      .then((answers) => {
        if (answers.CreateOrSelect === 'Create a new vehicle') {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
}

// export the Cli class
export default Cli;