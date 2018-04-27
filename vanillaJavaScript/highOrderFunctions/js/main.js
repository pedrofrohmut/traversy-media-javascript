const companies = [
    { name: "Company One",   category: "Finance",    start: 1981, end: 2003},
    { name: "Company Two",   category: "Retail",     start: 1992, end: 2008},
    { name: "Company Three", category: "Auto",       start: 1999, end: 2007},
    { name: "Company Four",  category: "Retail",     start: 1989, end: 2010},
    { name: "Company Five",  category: "Technology", start: 2009, end: 2014},
    { name: "Company Six",   category: "Finance",    start: 1987, end: 2010},
    { name: "Company Seven", category: "Auto",       start: 1986, end: 1996},
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    { name: "Company Nine",  category: "Retail",     start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Basic For Loop
for (let i = 0; i < companies.length; i++) {
    const element = companies[i]; 
}

/** #######################################################################################
 * #### ForEach(callback [, thisArgs]): undefined 
 */
companies.forEach((company, index, arr) => company/* log it out */);

// Basic For Loop to Filter
const canDrink = [];
for (let i = 0; i < ages.length; i++) {
    const thisAge = ages[i];
    if (thisAge >= 21) {
        canDrink.push(thisAge);
    } 
} 

/** #######################################################################################
 * #### Filter(callback [, thisArgs]): new [] 
 */
// Ages that can drink (21 or higher)
const canDrink1 = ages.filter(age => age >= 21);

// Companies of Retail category
const retailCompanies = companies.filter(company => company.category === "Retail");

// Companies of the Eightys (80s)
const eightsCompanies = companies
    .filter(company => (company.start > 1979 && company.start < 1990));

// Companies that last more than 10 years
const tenYearsOrOlderCompanies = companies
    .filter(company => ((company.end - company.start) >= 10));

/** #######################################################################################
 * #### Map(callback [, thisArgs]): new [] 
 */
// ParseInt All its elements
const parsedIntArr = ["1", "2", "3"].map(item => parseInt(item, 10));

// Create array of company names
const companyNames = companies.map(company => company.name);

// Format array
const testMap = companies
    .map(company => `${company.name} [${company.start} - ${company.end}]`);

const agesMap = ages
    .map(milliAge => Math.floor(milliAge))
    .map(doubleAge => doubleAge / 1000)
    .map(squareAge => squareAge * 2)
    .map(age => Math.sqrt(age)); // sqrt(9) === 3

const agesMap1 = ages
    .map(fifthPartAge => Math.round(fifthPartAge))
    .map(kiloAge => kiloAge / 5)
    .map(doubleAge => doubleAge * 1000)
    .map(age => age * 2);

/** #######################################################################################
 * #### Sort([compareFunction]): modified [] 
 */
const sortedCompanies1 = companies.sort(function (c1, c2) {
    if (c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }    
});

const sortedCompanies2 = companies.sort((a, b) => (a.start > b.start) ? 1 : -1);

const sortedCompanies = companies.sort((a, b) => a.start - b.start);

const sortAges = ages.slice(0).sort((a, b) => a - b);

const inverseSortAges = ages.slice(0).sort((a, b) => b - a);

/** #######################################################################################
 * #### Reduce(callback [, initialValue]): new [] 
 */
const testReduce = [0, 1, 2, 3, 4]
    .reduce(
        (accumulator, currentValue, currentIndex, array) => {
            return accumulator + currentValue
        }, 
        10
    );

// Sum Ages
let agesSum = 0;
for (let i = 0; i < ages.length; i++) {
    agesSum += ages[i];    
}

const agesSum1 = ages.reduce(function (sum, age) {
    return sum + age;
}, 0);

const agesSum2 = ages.reduce((sum, age) => sum + age, 0);

// Get total year for all companies
const totalYears = companies.reduce(function (total, company) {
    return total + (company.end - company.start);
}, 0);

const totalYears1 = companies
    .reduce((total, company) => total + (company.end - company.start), 0);

// Combined Methods
const combine = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .slice(0)
    .sort((a, b) => a - b)
    .reduce((total, age) => total + age, 0)