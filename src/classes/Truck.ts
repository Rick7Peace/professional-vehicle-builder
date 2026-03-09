// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// ============================================================
// TRUCK CLASS
// ============================================================
// "extends Vehicle" = INHERITANCE — Truck gets start(), stop(),
//   accelerate(), decelerate(), turn(), reverse() for FREE
//   from the Vehicle parent class. No need to rewrite them.
//
// "implements AbleToTow" = INTERFACE CONTRACT — Truck PROMISES
//   to have a towingCapacity property and a tow() method.
//   If we forget either one, TypeScript throws a compile error.
//
// Real-world analogy: extends = "I'm a type of Vehicle"
//                     implements = "I signed a contract to tow"
// ============================================================
class Truck extends Vehicle implements AbleToTow {
  // Declare properties of the Truck class
  // These are unique to Truck — Vehicle's properties (started, currentSpeed)
  // are inherited automatically via "extends"
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number; // Required by AbleToTow interface

  // Constructor accepts all properties needed to build a Truck
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
    // super() calls the Vehicle constructor — sets started=false, currentSpeed=0
    // MUST be called before accessing "this" — TypeScript enforces this
    super();

    // Initialize all Truck-specific properties
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    // Defensive programming: Trucks need exactly 4 wheels
    // If the caller passes an empty array or wrong count, we create defaults
    // This is the same pattern used in Car — consistency across the codebase
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  // ============================================================
  // tow() — Fulfills the AbleToTow interface contract
  // ============================================================
  // This is POLYMORPHISM in action: the parameter accepts
  // Truck | Motorbike | Car — three different types, one method.
  // TypeScript's union type ensures only valid vehicle types are passed.
  //
  // Interview Q: "What is polymorphism?"
  // Answer: "One interface, many forms. The tow() method accepts
  //   any vehicle type through a union type. The method doesn't care
  //   if it's a Car or Motorbike — it just checks the weight property
  //   that all vehicles share. This is subtype polymorphism."
  // ============================================================
  tow(vehicle: Truck | Motorbike | Car): void {
    // Get the make and model for display
    const vehicleInfo = `${vehicle.make} ${vehicle.model}`;

    // Business logic: can we tow it?
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`${vehicleInfo} is being towed`);
    } else {
      console.log(`${vehicleInfo} is too heavy to be towed`);
    }
  }

  // ============================================================
  // printDetails() — Override from Vehicle class
  // ============================================================
  // "override" keyword is REQUIRED by tsconfig's noImplicitOverride: true
  // This is a safety feature — it prevents you from accidentally
  // overriding a parent method. You must be EXPLICIT about it.
  //
  // Real-world analogy: At a job, if you're changing an existing
  // process, you need to explicitly document "I'm replacing the
  // old process" — not just silently do something different.
  // ============================================================
  override printDetails(): void {
    // Call the parent's printDetails first — DRY principle
    // Vehicle.printDetails() logs started status and current speed
    // We don't rewrite that logic — we extend it
    super.printDetails();

    // Print Truck-specific details
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);

    // Print details of each wheel
    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
    console.log(
      `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
    );
    console.log(
      `Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
    );
  }
}

// Export the Truck class as the default export
export default Truck;