console.log("*****************************Uber Price Calculation*****************************")

class UberPrice {

    constructor(custId, custName, vechileType, distance) {
        this.custId = custId;
        this.custName = custName;
        this.vechileType = vechileType;
        this.distance = distance;
    }
    getCustId() {
        return this.custId;
    }
    getCustName() {
        return this.custName;
    }
    setCustName(newName) {
        this.custName = newName;
    }
    getVehicleType() {
        return this.vechileType;
    }
    setVehicleType(newVechile) {
        this.vechileType = newVechile;
    }
    setDistance(newDistance) {
        this.distance = this.distance;
    }
    getDistance() {
        return this.distance;
    }
    getSedanPrice() {
        let cost = 15;
        return cost;
    }
    getSuvPrice() {
        let cost = 25;
        return cost;
    }
    getLuxuryPrice() {
        let cost = 40;
        return cost;
    }
    calculateFare() {
        let fare;
        let vehicleCost;
        if (this.vechileType === "Sedan") {
            vehicleCost = this.getSedanPrice()
        } else if (this.vechileType === "SUV") {
            vehicleCost = this.getSuvPrice();
        } else {
            vehicleCost = this.getLuxuryPrice();
        }

        fare = vehicleCost * this.distance;
        return fare;

    }
}

let fare1 = new UberPrice("635SDSCXZ31", "Tom", "Sedan", "12");
console.log(fare1)
console.log(fare1.calculateFare())