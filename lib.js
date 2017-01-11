//A function to find the difference between two arrays
function: functionMissing(arr1,arr2) {
 //to check for input type
  if (Array.isArray() || Array.isArray()){
    return "Array required";
 
  } else if (arr1.length <= 1 || arr2.length <= 1){
    return 0;
 
  } else {
    var result = [];
   // A for loop to loop through the length of the second array
    for (var i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) === -1) {
      result.push(arr2[i]);
      }
    }
  return result;
  }
};



//The Array.prototype.toTwenty
Array.prototype.toTwenty: function() {
  result = [];
  for (var i = 1; i < 21; i++) {
    result.push(i);
    }
    return result;
   };
oneToTwenty = Array.prototype.toTwenty();
 
   
Array.prototype.toFourty = function() {
  result = [];
  for (var i = 2; i < 41; i += 2) {
    result.push(i);
    }
    return result;
   };
twoToFourty = Array.prototype.toFourty();
 
   
Array.prototype.toOneThousand = function() {
  result = [];
  for (var i = 10; i < 1001; i += 10) {
    result.push(i);
    }
    return result;
   };
tenToOneThousand = Array.prototype.toOneThousand();
   
Array.prototype.search = function(n) {
  var found = false;
  var first = 0, end = this.length - 1;
  var count = 0;
  var index = -1;
  var length = this.length;
  while (first < end && !found) {
    var mid = Math.floor((first + end) / 2);
    if (n === this[first]) {
      index = first;
      found = true;
      break;
    }
    else if (n === this[mid]) {
      index = mid;
      found = true;
      break;
    }
    else if (n === this[end]) {
      index = end;
      found = true;
      break;
    }
    else {
      if (n < this[mid]) {
        first = first + 1;
        end = mid - 1;
      }
      else {
        first = mid + 1;
        end = end - 1;
      }
    }
    count++;
  }
  return {"count" : count, "index" : index, "length" : length};
};