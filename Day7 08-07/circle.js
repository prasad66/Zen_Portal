console.log("*****************************Circle Class*****************************")

class Circle {
    constructor(radius, color) {
        this.radius = 1.0;
        this.color = "Red";
        if (typeof (radius) !== "undefined") {
            this.radius = radius;
        }
        if (typeof (color) !== "undefined") {
            this.color = color;
        }
    }
    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    getArea() {
        return Math.PI * this.getRadius() * this.getRadius();
    }

    getCircumference() {
        return 2 * Math.PI * this.getRadius();
    }

    toString() {
        return 'Circle [ radius : '+this.getRadius()+' color : '+this.getColor()+' ]';
    }

}

let circle1 = new Circle(5.0, "Blue");
console.log(+circle1.getArea().toFixed(3), +circle1.getCircumference().toFixed(3), circle1.toString());