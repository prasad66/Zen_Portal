var req = new XMLHttpRequest();
req.open('GET', 'https://restcountries.eu/rest/v2/all');
req.send();
req.responseType = "json";
req.onload = () => {
    const resp = req.response;
    resp.forEach(element => {
        src =element.flag,
        img = document.createElement('img');
        img.src = src;
        document.body.appendChild(img);
        console.log('%c ', 'font-size:10000%; background:url(' + element.flag + ') no-repeat;');
    });
}

// Use the same rest countries and print all countries name, region, sub region and population

var req1 = new XMLHttpRequest();
req1.open('GET', 'https://restcountries.eu/rest/v2/all');
req1.send();
req1.responseType = "json";
req1.onload = () => {
    const resp1 = req.response;
    console.log(resp1.map(element => {
        return {"country":element.name, "region":element.region, "subregion":element.subregion, "population":element.population}
    } ))
  
}



//How to compare two JSON have the same properties without order?


var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };



function isEqual(object1, object2) {
    let keys1 = Object.keys(object1);
    let keys2 = Object.keys(object2);
    
    if (keys1.length !== keys2.length)
    return false;
    
    keys1.forEach(key => {
        if (object1[key] != object2[key])
        return false
    });
    
    return true;
}

if(isEqual(obj1,obj2))
console.log('Equal')
else
console.log('Not Equal')
