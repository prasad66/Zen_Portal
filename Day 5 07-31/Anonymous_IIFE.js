//1. Print odd numbers in an array


console.log("***********************Anonymous and IIFE***********************")

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Print odd numbers in an array IIFE");
(function (a) {
    a.forEach(element => {
        if (element % 2 !== 0)
            console.log(element);
    });
}(arr));

let ans = function (a) {
    a.forEach(element => {
        if (element % 2 !== 0)
            console.log(element);
    });
};

console.log("Print odd numbers in an array Anonymous Func.")

//2.Convert all the strings to title caps in a string array

let strArr = ["guvi", "geeks", "network"]

let string = function (str1) {
    for (var i = 0; i < str1.length; i++) {
        str1[i] = str1[i].toLowerCase();
        str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1);
    }
    return str1;
};

(function (str) {
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].toLowerCase();
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log('title caps in a string array  IIFE =>', str);
})(strArr)

console.log("title caps in a string array Anonymous func.=>", string(strArr))


//3.Sum of all numbers in an array

let sum = 0, sum1 = 0;
let add = function (arr) {
    arr.forEach(element => {
        sum += element;
    });
    return sum;
};
(function (arr) {
    arr.forEach(element => {
        sum1 += element;
    });
    console.log('Sum of all numbers in an array IIFE=>', sum1);
})([1, 2, 3, 4, 5])

console.log('Sum of all numbers in an array Anonymous func=>', add([1, 2, 3, 4, 5]))


//4.Return all the prime numbers in an array

let ans1 = "", primeiife = "";
let prime = function (arr) {
    for (i = 0; i < 5; i++) {
        let flag = true;
        for (let index = 2; index < arr[i]; index++) {
            if (arr[i] % index === 0) {
                flag = false;
                break;
            }

        }
        if (flag)
            ans1 += arr[i] + ' ';
    };
    return ans1.trim();
};

(function (arr) {
    for (i = 0; i < arr.length; i++) {
        let flag = true;
        for (let index = 2; index < arr[i]; index++) {
            if (arr[i] % index === 0) {
                flag = false;
                break;
            }

        }
        if (flag)
            primeiife += arr[i] + ' ';
    };
    console.log("Return all the prime numbers in an array IIFE => ", primeiife.trim());
})([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

console.log('Return all the prime numbers in an array Anonymous func.=> ', prime([2, 3, 4, 5, 6]));


//5.Return all the palindromes in an array

let str = ["Malayalam", "reviver", "racecar", "cat", "ball"];
let palin = [], palin1 = [];

let palindrome = function (string) {
    for (i = 0; i < string.length; i++) {
        if (string[i].split('').reverse().join('').toLowerCase() === string[i].toLowerCase())
            palin1.push(string[i])
    }
    return palin1;
};
(function (string) {
    for (i = 0; i < string.length; i++) {
        if (string[i].split('').reverse().join('').toLowerCase() === string[i].toLowerCase())
            palin.push(string[i])
    }
    console.log('Return all the palindromes in an array IFFE', palin);
})(str)
console.log('Return all the palindromes in an array Anonymous func.=>', palindrome(str));


//6.Return median of two sorted arrays of same size

let median = function (arr1, arr2) {
    let arr = [...arr1, ...arr2].sort((a, b) => a - b);
    if (arr.length % 2 !== 0) {
        console.log('Anonymous Func.=>', arr[Math.floor(arr.length / 2)])
    }
    else
        console.log('Return median of two sorted arrays of same size Anonymous Func.=>', (arr[(arr.length / 2) - 1] + arr[(arr.length / 2)]) / 2)
};

(function (arr1, arr2) {
    let arr = [...arr1, ...arr2].sort((a, b) => a - b);
    if (arr.length % 2 !== 0) {
        console.log('Return median of two sorted arrays of same size IIFE=>', arr[Math.floor(arr.length / 2)])
    }
    else
        console.log('Return median of two sorted arrays of same size IIFE=>', (arr[(arr.length / 2) - 1] + arr[(arr.length / 2)]) / 2)
})([1, 5, 8, 9, 12], [2, 5, 7, 10, 11]);


let arr1 = [1, 5, 8, 9, 12], arr2 = [2, 5, 7, 10, 11];
median(arr1, arr2);


//7.unique elements in an array

let dupArr = [1, 5, 8, 9, 1, 5, 12];
let uniquesano = [], uniquesiife = [];
let uniques = function (arr) {
    for (i = 0; i < arr.length; i++) {
        let flag = true;
        for (j = 0; j < arr.length; j++) {
            if (i !== j) {
                if (arr[i] === arr[j])
                    flag = false;
            }
        }
        if (flag)
        uniquesano.push(arr[i]);
    }
};

(function (arr) {
    for (i = 0; i < arr.length; i++) {
        let flag = true;
        for (j = 0; j < arr.length; j++) {
            if (i !== j) {
                if (arr[i] === arr[j])
                    flag = false;
            }
        }
        if (flag)
        uniquesiife.push(arr[i]);
    }
    console.log('unique elements in an array IIFE=>', uniquesiife)
})([1, 5, 8, 9, 1, 5, 12]);

uniques(dupArr)
console.log('Rotate an array by k times Anonymous Func.=>', uniquesano)


//8.Rotate an array by k times

let rotate = function (arr, d) {
    for (i = 0; i < d; i++) {
        let i, temp;
        temp = arr[0];
        for (j = 0; j < arr.length - 1; j++)
            arr[j] = arr[j + 1];
        arr[arr.length - 1] = temp;
    }
};

(function (arr1, d) {
    for (i = 0; i < d; i++) {
        let i, temp;
        temp = arr1[0];
        for (j = 0; j < arr1.length - 1; j++)
            arr1[j] = arr1[j + 1];
        arr1[arr1.length - 1] = temp;
    }
    console.log('IIFE=>', arr1)
})([1, 2, 3, 4, 5, 6, 7], 3);
var arrnorArr = [1, 2, 3, 4, 5, 6, 7];
rotate(arrnorArr, 2, 7);
console.log('Anonymous Func=>', arr)
