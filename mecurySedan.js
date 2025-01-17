/* Imported Vehicle class from vehicle.js file. Got "SyntaxError: Cannot use import statement outside a module", 
so had to initialize a package.json file with "npm init -y" command and added "type": "module" on line 2. Also, 
changed export instructions in vehicle.js to "export {Vehicle}" (line 82) */
import {Vehicle} from './vehicle.js';

// Created a Car class that extends the Vehicle class.
class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {  // Set constructor to accept inital properties.
        super(make, model, year, color, mileage);  // Used super method to access parent Vehicle properties.
        this.maximumPassengers = 5;  // Added new properties for MercurySedan child class.
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    /* Added loadPassenger method to check passenger capacity. Takes into account the passenger count defined as 
    property and accepts a parameter, numn, to account for additional passengers.*/
    loadPassenger(num) {  
        if(this.passenger + num <= this.maximumPassengers) {
            this.availableRoom == true;
            console.log('There is room for all passengers!');
        } else {
            this.availableRoom == false;
            console.log('The car is beyond maximum passenger capacity.');
        }
    }

    // Added start method to determine if fuel is available or a refuel is needed.
    start() {
        if (this.fuel > 0) {
            this.started == true;
            console.log('The car started!');
        } else {
            this.started == false;
            console.log('The car did not start. Time to refuel!');
        }
    }

    // Added _scheduleService method. Included "_" to differentiate between the property and method.
    _scheduleService() {
        // If scheduleService property is true it will overwrite mileage > 30K.
        if(this.scheduleService === true) {  
            this._scheduleService == true;
            console.log('Need to schedule service!');
        // Mileage > 30K will trigger schedule service only if scheduleService property is not false
        } else if(this.mileage > 30000 && this.scheduleService !== false) {
            this._scheduleService == true;
            console.log('Need to schedule service!');
        } else {
            this._scheduleService == false;
            console.log('No service needed!');
        }
    }
}

// Verified that properties and methods are set up correctly by instantiating a new Car object.
let myCar = new Car('Mercury', 'A28', 2000, 'beige', 40000);

/* Added an index.html to show alerts and log properties/methods. Also added type="module" to script 
tag to accommodate resolve syntax error from the module import. */

// Methods logged from child class
myCar.loadPassenger(2);
myCar.start();
myCar._scheduleService();

// Alerts generated by calling methods from parent Vehicle class
myCar.accelerate()
myCar.decelerate()

// typeOfVehicle method logged from parent class
myCar.typeOfVehicle(4)

// Logged properties from child and parent class
console.log(myCar)