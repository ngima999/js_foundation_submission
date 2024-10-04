/* eslint-disable no-unused-vars */


class Vehicle {
    constructor([wheelTotal, energySource, manufacturer]) {
        //Set the basic properties of the Vehicle
        this.wheelTotal = wheelTotal;
        this.energySource = energySource;
        this.manufacturer = manufacturer;
        this.isOn = false; 
    }

    
    getSpec(key) {
        //Return the value if the key is present in the instance
        if (this.hasOwnProperty(key)) {
          return this[key];
        }
        return undefined; //If key is not found, return undefined
    }
}

class Tesla extends Vehicle {
    constructor([milesPerCharge, model, chargePercentage, minutesToCharge, vehicleInfo]) {
        //Call the parent constructor to set Vehicle properties
        super(vehicleInfo[0]); 

        //Set Tesla-specific properties
        this.milesPerCharge = milesPerCharge;
        this.model = model;
        this.chargePercentage = chargePercentage;
        this.minutesToCharge = minutesToCharge;
    }

    
    minutesToFullCharge(currentChargePer) {
        const remainingCharge = 100 - currentChargePer; //Calculate the remaining percentage
        const timeToFullCharge = (remainingCharge / 100) * this.minutesToCharge; // Calculate time based on charge rate
        return `${timeToFullCharge} minutes until the charge is full!`; 
    }
}