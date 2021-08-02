console.log("***********************Medium@ Problems***********************")

//1. addfive
var num = 10;
function addFive(num) {
    return num + 5;
}
var result = addFive(num);
console.log("addFive=>", result);

//2.Opposite Number

var num = 5;
function getOpposite(num) {
if(Number.isInteger(num))
return -num;

return -1
}

var result = getOpposite(num)
console.log("Opposite Number =>",result)
//3.min=>seconds

var min = 5;
function toSeconds(min) {
    return min * 60;
}
var secs = toSeconds(min)
console.log("min=>seconds  =>", secs);

//4.String to Integer

var mystr = "5";
function toInteger(mystr) {
    return parseInt(mystr);
}
var myint = toInteger(mystr)
console.log("String to Integer=>", myint);

//5. Adding +1 to the i/p

var myint = 0;
function nextNumber(myint1) {
    return myint1 + 1;
}
var myNextint = nextNumber(myint)
console.log("Adding +1 to the i/p=>", myNextint);

//6.Return 1st element in the array
var arrr1 = [1, 2, 3];
function getFirstElement(arr) {
    return arr[0];
}
var data = getFirstElement(arrr1)
console.log("1st element in the array=>", data);


//7.Hours to Secs

var hour = 3;
function hourToSeconds(hr) {
    return hr * 3600;
}
var data1 = hourToSeconds(hour)
console.log("Hours to Secs=>", data1);


//8.Rectangle Perimeter
function findPerimeter(num1, num2) {
    return 2 * num1 * num2;
} var peri = findPerimeter(6, 7)
console.log("Rectangle Perimeter=>", peri)


//9. Sum less than 100

function lessThan100(num1, num2) {
    return ((num1 + num2) < 100)
}
var res1 = lessThan100(22, 15)
console.log("Sum less than 100=>", res1)


//10.Remainder
function remainder(num1, num2) {
    return num1 % num2;
}
var res2 = remainder(1, 3);
console.log("Remainder=>", res2)


//11. No. of Legs of animals

function CountAnimals(tur, horse, pigs) {
    return ((tur * 2) + (pigs * 4) + (horse * 4))
}
var legs = CountAnimals(2, 3, 5);
console.log("Animals legs=>", legs);


//12.FPS

function frames(num1, num2) {
    return num1 * num2 * 60;
}
var fps = frames(1, 2);
console.log("FPS=>", fps)

//13. Divide by 5

function divisibleByFive(num1) {
    return (num1 % 5 === 0)
}
var divisible = divisibleByFive(5);
console.log("Divide by 5=>", divisible);

//14. isEven

function isEven(num) {
    if (typeof (num) !== "number")
        return -1;
    else
        return (num % 2 === 0)
}
var even = isEven("11h");
console.log("isEven =>", even)


//15. Both are odd

function areBothOdd(num1, num2) {
    return ((num1 % 2 !== 0) && (num2 % 2 !== 0))
}
console.log("areBothOdd=>", areBothOdd(1, 3))

//16.Get full name

function getFullName(firstName, lastName){
    if(firstName === undefined)
    firstName="";
    if(lastName === undefined)
    lastName="";

return '"'+firstName+lastName+'"';
}
console.log("Get full name=>",getFullName("GUVI",))



//17.LengthOfWord
function getLengthOfWord(str) {
    if (typeof (str) === 'string')
        return str.length;
    else
        return -1;
}
console.log("LengthOfWord=>", getLengthOfWord("GUVI"));

//18. Distance b/w 2pts

function getDistance(x1, y1, x2, y2) {
    // return Math.hypot(x1,x2,y1,y2)
    return Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)))
}
console.log("Distance b/w 2pts=>", getDistance(100, 100, 400, 300));


//19.Get the nth element
function getNthElement(arraya, n) {
    if (arraya.length === 0)
        return undefined;
    else
        return arraya[n];
}
console.log("Get the nth element=>", getNthElement([1, 2, 3, 4, , 5], 2))


//20. Get the last element

function getLastElement(arrayb) {
    if (arrayb.length === 0)
        return -1;
    else
        return arrayb[arrayb.length - 1];
}

console.log("Get the last element=>", getLastElement([1, 2, 3, 4, , 5]))

//21. property at the given key

var obj = {
    mykey: "value"
};
function getProperty(object, key) {
    console.log("property at the given key=>", object[key]);
}
getProperty(obj, 'mykey');


//22.Adding new prop to the object

var obj1 = {
};
function addProperty1(obj, key1) {
    obj[key1] = true;
    console.log("Adding new prop to the object=>", obj);
}
addProperty1(obj1, "mykey")


//23.Removing prop from the object

var obj2 = {
    name: "vscode"
};
function removeProperty1(obj2, key2) {
    delete obj2[key2];
    console.log("Removing prop from the object", obj2);
}
removeProperty1(obj2, "name")

//24. Count +ve & -ve numbers

var totNum = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function (arr) {
    let pcount = 0, ncount = 0;
    arr.forEach(element => {
        if (element >= 0)
            pcount += element;
        else
            ncount += element;
    });
    console.log(" Count +ve & -ve numbers=>", [pcount, ncount]);
};
ar2(totNum);


//25.Return +ve numbers

function getPositives(ar) {
    let parr = [];
    ar.forEach(element => {
        if (element >= 0)
            parr.push(element);
    });
    return parr;
}
var arrr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var arrr2 = getPositives(arrr);
console.log("Return +ve Numbers=>", arrr2);


//26.powersOfTwo

function powersOfTwo(n) {
    let res = [];
    for (let index = 0; index <= n; index++) {
        res.push(Math.pow(2, index))

    }
    return res;
}
console.log("powersOfTwo", powersOfTwo(2));



//27.maximum number in an array

function findMax(ar) {
    return Math.max(...ar);
} var ar = [-5, 10, -3, 12, -9, 5, 900, 0, 1];
var max = findMax(ar);
console.log("Max:", max);


//28. prime numbers
console.log("1st 100 Prime numbers")
printPrimes(100);
function printPrimes(nPrimes) {
    var n = 0;
    var i = 2;

    while (n < nPrimes) {
        if (isPrime(i)) {
            console.log(n + 1, " → ", i);
            n++;
        }

        i++;
    }
}
function isPrime(n) {
    for (let index = 2; index < n; index++) {
        if (n % index === 0)
            return false
    }
    return true
}


//29. nPrimes starting @ particular number

console.log("10 Primes starting @ 100=>",getPrimes(10, 100));
function getPrimes(nPrimes1, startAt) {
    var n1 = 0;
    var i1 = 2;
    var primes=[]

    while (n1 < nPrimes1) {
        if (isPrime(i1)) {
            primes.push(i1)
            n1++;
        }

        i1++;
    }
    return primes;
}
function isPrime(n1) {
    for (let index = 2; index < n1; index++) {
        if (n1 % index === 0)
            return false
    }
    return true
}


//30. String reverse
var s = reverseString("JavaScript");
console.log("String reverse=> Javascript >> ",s);
function reverseString(s)
{
   return s.split('').reverse().join('');  
}

//31.Merging Arrays

var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];var ar = mergeArrays(ar1, ar2);
console.log("Merging Arrays=>"+ ar1 + " and "+ ar2 + " to "+ar);
function mergeArrays(ar1, ar2)
{
 var result = [];
for(let el of ar1)
 {
 result.push(el);
 }
 
 for(let el of ar2)
 {
 result.push(el);
 }
 return result;
}

//32. Array sum

console.log("Array sum=>",sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s)
{
 return s.split(",").map(Number).reduce((a,b)=> a+b,0);
}