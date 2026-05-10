// import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";
// import Chalk for color-coded terminal output
import chalk from "chalk";
// import fs for persistent garage
import fs from "fs";

// ASCII art startup banner
console.log(
  chalk.cyan.bold(`
╔══════════════════════════════════════════════════════╗
║                                                      ║
║   🚗  PROFESSIONAL VEHICLE BUILDER  🚛              ║
║                                                      ║
║   TypeScript • OOP • CLI                             ║
║   Built by Ricardo Marmolejo                         ║
║                                                      ║
╚══════════════════════════════════════════════════════╝
`)
);
console.log(chalk.white("  Welcome! Create and manage your vehicle garage.\n"));

// Path to the garage data file
const GARAGE_PATH = "./data/garage.json";

// Load vehicles from garage.json or create defaults
let vehicles: (Car | Truck | Motorbike)[] = [];

if (fs.existsSync(GARAGE_PATH)) {
  // Garage file exists — load saved vehicles
  try {
    const rawData = fs.readFileSync(GARAGE_PATH, "utf-8");
    const parsed = JSON.parse(rawData);

    // Rebuild class instances from plain JSON objects
    for (const v of parsed) {
      const wheels = v.wheels.map(
        (w: { diameter: number; tireBrand: string }) =>
          new Wheel(w.diameter, w.tireBrand)
      );

      if (v.type === "Truck") {
        vehicles.push(
          new Truck(
            v.vin, v.color, v.make, v.model,
            v.year, v.weight, v.topSpeed,
            wheels, v.towingCapacity
          )
        );
      } else if (v.type === "Motorbike") {
        vehicles.push(
          new Motorbike(
            v.vin, v.color, v.make, v.model,
            v.year, v.weight, v.topSpeed, wheels
          )
        );
      } else {
        vehicles.push(
          new Car(
            v.vin, v.color, v.make, v.model,
            v.year, v.weight, v.topSpeed, wheels
          )
        );
      }
    }

    console.log(
      chalk.green.bold(`  ✅ Loaded ${vehicles.length} vehicle(s) from garage.\n`)
    );
  } catch (err) {
    console.log(
      chalk.red.bold("  ⚠️  Error reading garage file. Starting fresh.\n")
    );
    vehicles = [];
  }
}

// If no saved vehicles, create defaults
if (vehicles.length === 0) {
  const truck1 = new Truck(
    Cli.generateVin(), "red", "Ford", "F-150",
    2021, 5000, 120, [], 10000
  );

  const car1 = new Car(
    Cli.generateVin(), "blue", "Toyota", "Camry",
    2021, 3000, 130, []
  );

  const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
  const motorbike1 = new Motorbike(
    Cli.generateVin(), "black", "Harley Davidson", "Sportster",
    2021, 500, 125, motorbike1Wheels
  );

  vehicles.push(truck1, car1, motorbike1);
  console.log(
    chalk.yellow("  No saved garage found. Created 3 default vehicles.\n")
  );
}

// Create CLI and start
const cli = new Cli(vehicles);
cli.startCli();