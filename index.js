// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

const findMatching = (driversNames,string)=>driversNames.filter(driver => driver.toLowerCase() === string.toLowerCase());
console.log(findMatching(drivers,"bobby"));

const fuzzyMatch = (driversNames,string)=>driversNames.filter(driver=> driver.toLowerCase().startsWith(string.toLowerCase()));
console.log(fuzzyMatch(drivers,"sa"));

const driversObj = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];
function matchName (driverObj,string){
  return driverObj.filter(function(driver){
    return driver.name === string;
  });
    }

console.log(matchName(driversObj,"Bobby"));