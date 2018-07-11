// Code your solution in this file
drivers ={};

function findMatching(drivers, name){

  return drivers.filter(function (driver) {
   return driver.toLowerCase() === name.toLowerCase();
 });


}

function fuzzyMatch(drivers, name){
  var arr = []
  var i = 0
  for(const driver of drivers){

    if(driver.toLowerCase().includes(name.toLowerCase()) && name.toLowerCase()){
       arr[i] = driver
       i = i + 1
    }
  }
  return arr;

}

function matchName(drivers, user){
  return drivers.filter(function (driver) {
   return driver.toLowerCase() === user.toLowerCase();
 });
}
