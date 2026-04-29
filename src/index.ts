// import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";
// import Chalk for color-coded terminal output
import chalk from 'chalk';

// ASCII art startup banner
console.log(chalk.cyan.bold(`
╔══════════════════════════════════════════════════════╗
║                                                      ║
║   🚗  PROFESSIONAL VEHICLE BUILDER  🚛              ║
║                                                      ║
║   TypeScript • OOP • CLI                             ║
║   Built by Ricardo Marmolejo                         ║
║                                                      ║
╚══════════════════════════════════════════════════════╝
`));
console.log(chalk.white('  Welcome! Create and manage your vehicle garage.\n'));

// create an array of vehicles
const vehicles = [];

// Pre-built Truck with default wheels
const truck1 = new Truck(
  Cli.generateVin(),
  "red",
  "Ford",
  "F-150",
  2021,
  5000,
  120,
  [],
  10000
);

// Pre-built Car with default wheels
const car1 = new Car(
  Cli.generateVin(),
  'blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130,
  []
);

// Pre-built Motorbike with custom wheels
const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
const motorbike1 = new Motorbike(
  Cli.generateVin(),
  "black",
  "Harley Davidson",
  "Sportster",
  2021,
  500,
  125,
  motorbike1Wheels
);

// push all vehicles to array
vehicles.push(truck1);
vehicles.push(car1);
vehicles.push(motorbike1);

// create a new instance of the Cli class
const cli = new Cli(vehicles);

// start the cli
cli.startCli();