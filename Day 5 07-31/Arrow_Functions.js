//Arrow functions
//1.Print odd numbers in an array

console.log("***********************Arrow functions***********************")

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddArr = array.filter(arr => arr % 2 !== 0)
console.log("Printing odd numbers using arrow function =>", oddArr);


//2.Convert all the strings to title caps in a string array

let stringArr = ["guvi", "geeks", "network"]
const titleCaps = (strArr) => {
    // for (var i = 0; i < str.length; i++) {
    let ans = [];
    strArr.forEach(str => {
        str = str.toLowerCase();
        ans.push(str.charAt(0).toUpperCase() + str.slice(1));
    });

    console.log('Title caps using arrow function =>', ans);
}
titleCaps(stringArr);

//3. Sum of all numbers in an array
let arrSum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arraySum = 0;
arrSum.forEach(num => arraySum += num);
console.log("Sum of all numbers in an array=>", arraySum)

//4.Return all the prime numbers in an array
let arrPrime = "";
let primeArr = (arr) => {
    arr.forEach(num => {
        let flag = true;
        for (let index = 2; index < num; index++) {
            if (num % index === 0) {
                flag = false;
                break;
            }
        }
        if (flag)
        arrPrime += num + ' ';
    }
    )
    console.log("prime numbers in an array=>", ans1.trim());
};

primeArr([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);


//5. Return all the palindromes in an array

// for(i=0;i<string.length;i++){
let palindromeArr = [];
const getPalindrome = (stArr) => {
    stArr.forEach(s => {
        if (s.split('').reverse().join("").toLowerCase() === s.toLowerCase())
        palindromeArr.push(s)
    })
    return palindromeArr;
}

console.log("palindromes in an array=>",getPalindrome(["Malayalam", "reviver", "racecar", "cat", "ball"]));


