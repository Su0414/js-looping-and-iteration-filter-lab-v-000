// Code your solution in this file
drivers ={};

function findMatching(drivers, name){
  var arr = []
  var i = 0
  for(const driver of drivers){
    if(name.toLowerCase() == driver.toLowerCase()){
       arr[i] = driver
       i = i + 1
    }
  }
  return arr;
}

function fuzzyMatch(drivers, name){
  var arr = []
  var i = 0
  for(const driver of drivers){
    if(name.toLowerCase() == driver.toLowerCase()){
       arr[i] = driver
       i = i + 1
    }
  }
  return arr;

}

function matchName(drivers, user){
  var arr = []
  var i = 0
  for (const driver of drivers) {
   if(driver.name == user){
    arr[i] = driver
    i = i + 1
  }
 }
 return arr;
}
