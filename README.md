# 🚗 Professional Vehicle Builder

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Inquirer](https://img.shields.io/badge/Inquirer-000000?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/inquirer)
[![Chalk](https://img.shields.io/badge/Chalk-FFC107?style=for-the-badge)](https://www.npmjs.com/package/chalk)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](https://opensource.org/licenses/ISC)

A **TypeScript CLI application** for building and managing a virtual vehicle garage. Create Cars, Trucks, and Motorbikes with full OOP architecture, perform actions like accelerate, tow, and wheelie, and watch your vehicles come to life with a real-time speed dashboard and persistent storage.

Built as a portfolio project demonstrating **Object-Oriented Programming**, **TypeScript type safety**, **class inheritance**, **interface contracts**, and **CLI application design**.

---

## 📋 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Architecture](#-architecture)
- [Installation](#-installation)
- [Usage](#-usage)
- [Technologies](#-technologies)
- [Enhancements Beyond Requirements](#-enhancements-beyond-requirements)
- [Questions](#-questions)

---

## ✨ Features

- **Create Vehicles** — Build Cars, Trucks, and Motorbikes with custom specifications including color, make, model, year, weight, and top speed
- **Vehicle Actions** — Start, accelerate, decelerate, stop, turn, reverse, tow (Trucks only), and wheelie (Motorbikes only)
- **Live Speed Dashboard** — Visual speed bar and fuel gauge update after every action, showing real-time vehicle status
- **Fuel System** — Vehicles consume fuel when accelerating and stall when empty. Refuel to get back on the road
- **Persistent Garage** — Vehicles save to a JSON file automatically. Exit the app and your garage is still there next time
- **Color-Coded CLI** — Professional terminal output using Chalk with semantic colors: green for success, red for errors, yellow for prompts, cyan for information
- **Input Validation** — All user inputs are validated with descriptive error messages. No empty fields, no invalid years, no negative numbers
- **ASCII Art Banner** — Professional startup screen with project branding

---

## 🎥 Demo

![Professional Vehicle Builder Demo](./assets/demo.gif)

> *Walkthrough showing vehicle creation, speed dashboard, fuel system, and persistent garage*

---

## 🏗️ Architecture

```
src/
├── index.ts                  # Entry point — loads garage, displays banner, starts CLI
├── classes/
│   ├── Vehicle.ts            # Base class — start, stop, accelerate, fuel, dashboard
│   ├── Car.ts                # Extends Vehicle — 4 wheels, printDetails override
│   ├── Truck.ts              # Extends Vehicle, implements AbleToTow — tow() method
│   ├── Motorbike.ts          # Extends Vehicle — 2 wheels, wheelie() method
│   ├── Wheel.ts              # Wheel class — diameter and tire brand
│   └── Cli.ts                # CLI engine — prompts, actions, validation, save/load
└── interfaces/
    ├── Driveable.ts           # Interface — started, currentSpeed, and driving methods
    └── AbleToTow.ts           # Interface — towingCapacity and tow() method
```

### OOP Design Patterns

| Pattern | Implementation |
|---------|---------------|
| **Inheritance** | `Car`, `Truck`, `Motorbike` extend `Vehicle` base class |
| **Interfaces** | `Driveable` defines driving contract, `AbleToTow` defines towing contract |
| **Polymorphism** | `tow()` accepts `Car \| Truck \| Motorbike` union type |
| **Encapsulation** | `Wheel` class with getter methods for diameter and tire brand |
| **Type Guards** | `instanceof` checks enable type-specific actions (tow, wheelie) |
| **Override** | Subclasses override `printDetails()` with vehicle-specific output |

---

## 🚀 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rick7Peace/professional-vehicle-builder.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd professional-vehicle-builder
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the application:**
   ```bash
   npm start
   ```

---

## 💻 Usage

When the application starts, you'll see a branded ASCII art banner and a prompt to create a new vehicle or select an existing one.

### Creating a Vehicle

Select a vehicle type (Car, Truck, or Motorbike) and enter specifications. All inputs are validated — the app won't accept empty fields, invalid years (must be 1886–2027), or non-positive numbers for weight, speed, and towing capacity.

### Performing Actions

Once a vehicle is selected, choose from the action menu:

| Action | Description |
|--------|-------------|
| **Start vehicle** | Start the engine (requires fuel) |
| **Accelerate 5 MPH** | Increase speed by 5 mph (consumes 5% fuel) |
| **Decelerate 5 MPH** | Decrease speed by 5 mph |
| **Stop vehicle** | Set speed to 0 and turn off engine |
| **Turn left / right** | Turn the vehicle (must be started) |
| **Reverse** | Reverse the vehicle (must be started) |
| **Refuel** | Refill fuel tank to 100% |
| **Tow** | Tow another vehicle (Trucks only) |
| **Wheelie** | Perform a wheelie (Motorbikes only) |
| **Print details** | Display full vehicle specifications |

### Speed Dashboard

After every action, a visual dashboard displays:

```
┌──────────────────────────────────────────┐
│  🚗  Hyundai Ioniq 5                     │
│  Speed: ████████░░░░░░░░░░░░   40 mph    │
│  Fuel:  ████████████████░░░░   80%       │
│  Status: Running                         │
└──────────────────────────────────────────┘
```

- **Speed bar** changes color: green (safe), yellow (fast), red (near top speed)
- **Fuel bar** changes color: green (>50%), yellow (21–50%), red (≤20%)

### Persistent Garage

Your vehicles are automatically saved to `data/garage.json`. When you restart the app, your entire garage loads back in — no need to recreate vehicles.

---

## 🛠️ Technologies

- **TypeScript** — Static typing, interfaces, union types, type guards
- **Node.js** — Runtime environment
- **Inquirer** — Interactive command-line prompts
- **Chalk** — Terminal string styling with semantic color coding
- **ES Modules** — Modern JavaScript module system

---

## 🌟 Enhancements Beyond Requirements

This project started as a Columbia University Coding Bootcamp assignment. The following features were added independently to demonstrate professional engineering practices:

| Enhancement | What It Demonstrates |
|-------------|---------------------|
| Chalk color-coded output | CLI UX design, developer tooling patterns |
| Input validation with error messages | Defensive programming, form validation patterns |
| ASCII art startup banner | Professional CLI branding |
| Fuel system with consumption | State management, resource tracking |
| Persistent garage (JSON save/load) | Serialization/deserialization, file I/O, data persistence |
| Live speed dashboard with visual bars | Real-time UI updates, data visualization in terminal |

---

## ❓ Questions

For questions or feedback, reach out:

- **GitHub:** [Rick7Peace](https://github.com/Rick7Peace)
- **Email:** [Marmolejo.Ricardo@gmail.com](mailto:Marmolejo.Ricardo@gmail.com)