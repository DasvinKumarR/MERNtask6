//filter method is used to get countries detail where region is Asia
function getCountriesUsingRegion(e){
    let AsianCountries1 = e.filter((a)=> a.region === 'Asia')
    return AsianCountries1
}

//filter method is used to get countries detail where continent is Asia
function getCountriesUsingContinents(e){
    let AsianCountries2 = e.filter((a)=>{
        for(let i in a.continents){
            if(a.continents[i] === 'Asia'){
                return true
            }
        }
    })
    return AsianCountries2
}

//filter method is used to get countries detial where population is less the 2 Lakhs
function getCountriesUsingPopulationValue(e){
    let countryPopulatioLess2L = e.filter((a)=> a.population < 200000)
    return countryPopulatioLess2L
}

//Iterate name, flag and capital from countries details
function getNameCaptialFlag(e){
    e.forEach((i)=>{
        //for some case capital is not defined so I added a condition to print capital undefined if it is, inorder to avoid error in console print.
        if(typeof i.capital !== 'undefined'){
            console.log(`Name: ${i.name.common}, Flag: ${i.flag} and Capital: ${i.capital[0]}`)
        }else{
            console.log(`Name: ${i.name.common}, Flag: ${i.flag} and Capital: undefined`)
        }   
    })
}

//Print the total population of countries using reduce method
function getTotalPopulation(e){
    let totalPopulation = e.reduce((accumulator, currentValue)=>{
        return accumulator+currentValue.population
    }, 0)
    return (`Total Population: ${totalPopulation}`)
}

//Print the country that uses US dollars as currency
function getCountryHasDollar(e){
   for(let i of e){
    if(typeof i.currencies !== 'undefined'){
        if(typeof i.currencies.USD !== 'undefined'){
            console.log(`Name: ${i.name.common}`)
        }
    }   
   }
}

//Main code
const req = new XMLHttpRequest
req.addEventListener('load',(e)=>{
    let data = JSON.parse(e.target.response)
    //Get all the countries from Asia region using Filter method
    console.log("Countries detail where region is Asia:",getCountriesUsingRegion(data))
    //Get all the countries from Asia continent using Filter method
    console.log("Countries detail where continent is Asia:",getCountriesUsingContinents(data))
    //Get all the countries with a population of less than 2 lakhs using Filter method
    console.log("Countries detail where population is less than 2 lakhs:",getCountriesUsingPopulationValue(data))
    //Print the following details name, capital, flag, using forEach method
    console.log("Iterate name, flag and capital: ")
    getNameCaptialFlag(data)
    //Print the total population of countries using reduce method
    console.log(getTotalPopulation(data))
    //Print the country that uses US dollars as currency
    console.log("Country name that has currency as USD:")
    getCountryHasDollar(data)
})
req.open('GET','https://restcountries.com/v3.1/all')
req.send()
