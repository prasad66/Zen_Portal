// Get all the countries from Asia continent /region using Filter function
// console.log("**************************************Asian Countries**************************************")
var req1 = new XMLHttpRequest();
req1.open('GET', 'https://restcountries.eu/rest/v2/all');
req1.send();
req1.responseType = "json";
req1.onload = () => {
    const resp1 = req1.response;
    console.log("**************************************Asian Countries**************************************")
    console.log(resp1.filter(element => element.region === 'Asia'));

    console.log("");
    console.log("");
    // Get all the countries with a population of less than 2 lakhs using Filter function
    console.log("**************************************Population of less than 2 lakhs**************************************")
    console.log(resp1.filter(element => element.population < 2_00_000));
    
    console.log("");
    console.log("");
    // Print the following details name, capital, flag using forEach function
    console.log("**************************************Name, capital, flag using forEach function**************************************")
    resp1.forEach(element => {
        console.log("name: " + element.name + "    capital: " + element.capital + "     flag: " + element.flag);
    });
    
    console.log("");
    console.log("");
    // Print the total population of countries using reduce function
    console.log("**************************************Total population of countries using reduce function**************************************")
    console.log(resp1.map(element => element.population).reduce((acc,value ) => acc+value));
    
    
    console.log("");
    console.log("");
    // Print the country which uses US Dollars as currency.
    console.log("**************************************Ccountry which uses US Dollars as currency**************************************")
    console.log(resp1.filter(element => element.currencies[0].code === 'USD'));
    
    
}





