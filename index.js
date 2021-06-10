// Code your solution in this file!

//function returnFirstTwoDrivers(driversArray) {
//const firstTwo = (array) => array.slice(0, 2);
//console.log(firstTwo);
//return firstTwo(driversArray); // firstTwo?
//}

const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);

const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
  return (fare) => {
    return fare * multiplier;
  };
};

createFareMultiplier(5);

const fareDoubler = createFareMultiplier(2);
// (fare) => fare * 2

const fareTripler = createFareMultiplier(3);
// (fare) => fare * 3

function selectDifferentDrivers(array, action) {
  return action(array);
}
