// Code your solution in this file
drivers ={};

function findMatching(drivers, name){
  var arr = []
  var i = 0
  for(const driver of drivers){
    if(name.toLowerCase() == driver){
       arr[i] = driver
       i = i + 1
    }
  }
  return arr;
}

function fuzzyMatch(drivers, string){


}

function matchName(drivers, string){

}
