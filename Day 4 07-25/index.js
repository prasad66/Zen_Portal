// Declare four variables without assigning values and print them in console
let a, b, c, d;
console.log(a, b, c, d);


//Declare variables to store your first name, last name, marital status, country and age in multiple lines
let firstName = 'Prasad';
let lastName = 'N';
let maritalStatus = 'Single';
let age = 23;
let country = 'India';

//Declare variables to store your first name, last name, marital status, country and age in multiple lines
let first_name = 'Prasad', last_name = 'N', marital_status = 'Single', _age = 23, cntry = 'India';

// Declare variables and assign string, boolean, undefined and null data types
let name = 'Prasad', flag = false, entry, count = null; //entry here is undefined

// Convert the string to integer
let num = '45';
console.log(parseInt(num), Number(num), +num)

// truthy & Falsy
console.log("Truthy => true,[],{},78,'0','false',Infinity")
console.log(`Falsy => false,null,undefined,0,-0,0n,NaN`);

//Square of a number
let number = 25;
console.log(Math.pow(number, 2) + " " + (number * number));

//swapping 2 number
let aa = 1, bb = 2, cc;
// cc=aa;
// aa=bb;
// bb=cc;
cc = aa + bb;
aa = cc - aa;
bb = cc - bb;
console.log(aa, bb)

// Adding three numbers
let x = 1, y = 2, z = 3;
console.log(x + y + z);

// Celsius to Fahrenheit conversion
let celsius = 32;
let fahrenheit = (celsius * 1.8) + 32;
console.log(fahrenheit);

// Meter to miles
let meter = 350;
let miles = meter / 1609.34;
console.log(miles.toFixed(2));


// Pounds to kg
let pounds = 135;
let kg = pounds * 0.4536;
console.log(kg);


//Batting Average
let runs = 10000;
let matches = 325;
let notout = 50;
let avg, out1 = matches - notout;

if (out1 == 0)
    avg = 'NA';
else
    avg = parseInt((runs) / out1, 10);

console.log(avg);


//power of any number
let m = 2, n = 3;
console.log(Math.pow(m, n));

// Calculate Simple Interest
let p = 1000, yr = 3, r = 6;
console.log((p * yr * r) / 100);

// Calculate area of an equilateral triangle
let side = 5;
let area = (Math.sqrt(3) / 4) * side;
console.log(area.toFixed(3));

// Area Of Isosceles Triangle
let bh = 4, ht = 6;
let iarea = (bh * ht) / 2;
console.log(iarea.toFixed(2));

// Volume Of Sphere
let rad = 6;
let svol = (4 * Math.PI * Math.pow(rad, 3)) / 3;
console.log(svol.toFixed(2));

//Volume of prism (considering as cylindrical prism)
let crad = 5, h = 12;
let pvol = (Math.PI * crad * crad * h) / 2;
console.log(pvol);

// Discount of the product
let cp = 5000, sp = 4500;
let discount = ((cp - sp) / cp) * 100;
console.log("The discount for the given product is " + discount + " %");

// Given their radius of a circle and find its diameter, circumference and area.
let cr = 5;
let carea = Math.PI * cr * cr;
let cir = 2 * Math.PI * cr;
let dia = 2 * cr;
console.log("Radius of the circle => " + cr);
console.log("Area of the circle => " + area);
console.log("Circumference of the circle => " + cir);
console.log("Diamter of the circle =>" + dia);

// Given two numbers and perform all arithmetic operations.
let num1 = 8, num2 = 4;

console.log("The two numbers are " + num1 + " & " + num2);
console.log("The addition of the two numbers is " + (num1 + num2));
console.log("THe subraction of the two numbers is " + (num1 - num2));
console.log("The multipplication of the two numbers are " + (num1 * num2));
console.log("The exponential of the two numbers are " + (num1 ** num2));
console.log("The division of the two numbers are " + (num1 / num2));
console.log("The modulus of the two numbers are " + (num1 % num2));
console.log("The increment of the two numbers are " + (++num1 + " " + num2++));
console.log("The decrement of the two numbers are " + (--num1 + " " + num2--));


//asterisk pattern without loop
console.log(`asterisk pattern without loop
*****
*****
*****
*****
*****`)



// Electricity bill
let wattPerHr = 100, costPerUnit = 10;
let costPerMonth = ((wattPerHr * 24) / 1000) * 30 * costPerUnit;
console.log("The Electricity bill for a month by using 100 watt per hour is: Rs." + costPerMonth);

// Program To Calculate CGPA
let eng = 75, maths = 96, phy = 85, che = 89, comp = 97;
let sum = (eng + maths + phy + che + comp) / 10;
let cgpa = sum / 5;
console.log("The calculated CGPA is " + cgpa)



// Task 3 :  Simple Programs todo for Condition , Looping and Arrays

// Write a loop that makes seven calls to console.log to output the following triangle:

let pat = '#';
for (let index = 0; index < 7; index++) {
    console.log(pat);
    pat += ' #'
}
console.log("")


// 2. Iterate through the string array and print it contents

var strArray = ["<option>Jazz</option>",
    , "<option>Blues</option>",
    , "<option>New Age</option>",
    , "<option>Classical</option>",
    , "<option>Opera</option>"]

console.log('2. Iterate through the string array and print it contents')
strArray.forEach(element => {
    console.log(element)
});


// write a code to count the elements in the array . Don't use length property
var myarray = [11, 22, 33, 44, 55]
let arrCount = 0;
myarray.forEach(element => {
    arrCount++;
});
console.log("The number of elements in the array is " + arrCount);

//Declaring an empty array
let emptyArr = [];


// Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.

let foods = ['chicken', 'oatmeal', 'bread', 'fruit salad', 'soup', 'baby corn', 'egg', 'dosa', 'idly', 'upma',
    'chappathi', 'Yogurt', 'potatoes', 'fish', 'sweet potatoes', 'dark chocolate', 'Soybean', 'Lentils', 'Almonds', 'Cocoa']
console.log("My 5th favourite food is " + foods[4]);
console.log("The length of my foods array is " + foods.length);



// Starting from the existing friends variable below, change the element that is currently "Mari" to "Munnabai".

let friends = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];

function dataHandling(input) {
    for (var i = 0; i < input.length; i++) {
        if (input[i] === "Mari")
            input[i] = "Munnabai";
    }
    return input;
}
console.log("The array before changing the name =>" + friends)
console.log("The array after changing the name =>" + dataHandling(friends));


// Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.

function dataHandling1(input) {
    for (var i = 0; i < input.length; i++) {
        if (input[i] === "CaptianAmerica")
            return;

        console.log('* ' + input[i])
    }
}
console.log("Name of the friends till is meet Captian America =>");
dataHandling1(friends);


function dataHandling(input, name) {
    for (var i = 0; i < input.length; i++) {
        if (input[i] === "Jeff")
            return "He is a friend"
    }
    return "He is not a friend"
}

let found = dataHandling(friends, "Jeff");
console.log(found);


// We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.

var friends1 = [
    "Mari",
    "MaryJane",
    "CaptianAmerica",
    "Munnabai",
    "Jeff",
    "AAK chandran"
];

var friends2 = [
    "Rajinikanth",
    "Mass",
    "Spiderman",
    "Jeff",
    "ET"
];
let male = ["AAK chandran", "CaptianAmerica", "ET", "Jeff", "Jeff", "Mass", "Munnabai", "Rajinikanth", "Spiderman", "Prasad"];
let female = ["Mari", "MaryJane"];

console.log("Alphabetically-sorted list of friends ");
console.log([...friends1, ...friends2].sort())


// Get the first item, the middle item and the last item of the array

let totFriends = [...friends1, ...friends2].sort();
console.log("First name in the array => " + totFriends[0]);
console.log("Middle name in the array => " + totFriends[parseInt(totFriends.length / 2)]);
console.log("Last name in the array => " + totFriends[totFriends.length - 1]);


// Add your name to the end of the friends array, and add another name to beginning.
totFriends.push("Prasad");
console.log("Prasad added at the end of the array =>");
console.log(totFriends)
totFriends.unshift("Sam")
console.log("Sam added at the begining of the array =>");
console.log(totFriends)


// Add Mr or Ms to the names in the friends array.
for (let i = 0; i < totFriends.length; i++) {
    if (male.includes(totFriends[i]))
        totFriends[i] = 'Mr. ' + totFriends[i]
    else
        totFriends[i] = 'Ms. ' + totFriends[i]

}
console.log("Array after adding Mr or Ms");
console.log(totFriends)


// Concat all the names the friends array and return as comma "," seperated string.
console.log(totFriends.join(','))

console.log("");

// Find the friends names who has letter 'a' and return the list..
console.log("Friends name list whose has 'a' in their name");
console.log(totFriends.filter(name => name.includes('a')));

// Find the avg length of all the friends names. Get the individual length of the names and do the avg.
let length = totFriends.map(name => name.length);
console.log("The avg length of all the friends names =>" + ((length.reduce((a, b) => a + b)) / totFriends.length).toFixed(3));

console.log("")
// Find the names and return the list starting with letter M.
console.log("Friends names the starts with 'M'");
console.log(friends.filter(name => name.startsWith('M')));


console.log("")

// Find the name with max characters and return the name.
console.log("Name with max characters =>")
console.log(friends.reduce((a, v) => {
    if (a.length > v.length) {
        return a;
    }
    return v;
}
));


console.log("")
// Find the name with min characters and return the name.
console.log("Name with min characters =>")
console.log(friends.reduce((a, v) => {
    if (a.length < v.length) {
        return a
    }
    return v;
}
));

console.log("")

// Find the average in the array below.
// Make sure you add only the numbers and do avg.

const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];
console.log("Average of the array elements by adding only the numbers =>" + (friendsInfo.filter(number => typeof (number) === 'number').reduce((a, c) => a + c)) / friendsInfo.length.toFixed());

console.log("")

// Print the contents of the input variable
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling2(input) {
    for (var i = 0; i < input.length; i++) {
        console.log(input[i]);
    }
}

console.log("contents of the input variable");
dataHandling2(input);


// object literals
myobject = {"1":"one","11":1,"name":"arun"};
// console.log(myobject.11); // this will nit work as the 11 defined here as key is type string in the object
console.log(myobject[11]); 
console.log(myobject.name);

//adding key value pair to the object
myobject.ten="ten";
console.log(myobject);
    
    
// Write out an object literal to represent the data below.
// Guvi, Geek, 6, IIT-M RP,Chennai.
let obj={
    'fname':"Guvi",
    'lname':"Geek",
    'address':"IIT-M RP",
    'city':"Chennai"
}
console.log(obj)



/* How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)

Guvi, Geek, 6, IIT-M RP,Chennai.
Amazon, Inc, 31, SP Infocity, Chennai.
Google, Alphabet, 34 Amphitheater Parkway, MountainView.
Tesla, Inc , 32, 333 Santana Row,San Jose. */

//we can use array of object to store them like the above...

let obj1=[{
    'fname':"Guvi",
    'lname':"Geek",
    'address':"IIT-M RP",
    'city':"Chennai"
},
{
    'fname':"Amazon",
    'lname':"Inc",
    'address':"31, SP Infocity",
    'city':"Chennai"
},
{
    'fname':"Google",
    'lname':"Alphabet",
    'address':"34 Amphitheater Parkway",
    'city':"MountainView"

},
{
    'fname':"Tesla",
    'lname':"Inc",
    'address':"32, 333 Santana Row",
    'city':"San Jose"
}
];
console.log(obj1)
