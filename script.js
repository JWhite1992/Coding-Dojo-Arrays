function alwaysHungry(arr){
  var sum = 0;
  for (var i=0;i<arr.length;i++){
    if (arr[i] == "food"){
      console.log("yummy");
    }
    else{
      sum++;
    }
  }
  if(sum == arr.length){
    console.log("I'm hungry");
  }
}


function highPass(arr, cutoff) {
    var filteredArr = [];
    highPass.pop(cutoff)
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]
