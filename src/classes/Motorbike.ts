// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// ============================================================
// MOTORBIKE CLASS
// ============================================================
// Extends Vehicle — inherits all driving behavior
// Does NOT implement AbleToTow — motorbikes can't tow!
// This is the INTERFACE SEGREGATION principle (SOLID):
//   Don't force a class to implement methods it doesn't need.
//
// Instead, Motorbike has a UNIQUE method: wheelie()
// This demonstrates that subclasses can ADD behavior
// beyond what the parent provides.
//
// Interview Q: "What is the Interface Segregation Principle?"
// Answer: "Clients should not be forced to depend on interfaces
//   they don't use. A Motorbike shouldn't implement AbleToTow
//   just because Truck does. Each class implements only the
//   contracts that make sense for its capabilities."
// ============================================================
class Motorbike extends Vehicle {
  // Declare properties — same pattern as Car and Truck
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // Constructor accepts all Motorbike properties
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
    // Call Vehicle constructor — sets started=false, currentSpeed=0
    super();

    // Initialize Motorbike-specific properties
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    // Motorbikes have exactly 2 wheels (not 4 like Car/Truck)
    // This is a key difference the acceptance criteria requires:
    // "Truck and Motorbike classes must prompt the user for details
    //  that the Car class doesn't" — wheel count is one such detail
    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  // ============================================================
  // wheelie() — Unique to Motorbike
  // ============================================================
  // This fulfills the acceptance criteria:
  // "The Motorbike class must allow the user to implement an action
  //  that the Car and Truck classes cannot."
  //
  // In OOP terms, this is a method that EXISTS ONLY on the subclass.
  // The parent (Vehicle) doesn't have it. Car doesn't have it.
  // Only Motorbike can do a wheelie — just like in real life.
  // ============================================================
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // Override printDetails from Vehicle — same pattern as Car/Truck
  override printDetails(): void {
    // Call parent's printDetails for started/speed info
    super.printDetails();

    // Print Motorbike-specific details
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);

    // Only 2 wheels for a motorbike
    console.log(
      `Front Wheel: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Rear Wheel: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
  }
}

// Export the Motorbike class as the default export
export default Motorbike;