/*

Major Finder 0.1.0

Find majors you are eligible for at UofT

Copyright (c) 2016 Patrick Harris (plh.io)

Licensed under the MIT License
https://raw.githubusercontent.com/patrickleweryharris/major-finder/master/LICENSE


Project site: https://plh.io/major-finder
Github site: http://github.com/patrickleweryharris/major-finder

*/

// Getting user input and sanitizing it
var userInput;
var programOutput = "You are eligible for:";
function getInput(){
  var userInputText = document.getElementById('input1').value;
  userInputText = userInputText.toUpperCase(); // Capitalize each item in string
  userInput = userInputText.split(','); // Make input into an array we can traverse
  var len = userInput.length;
  for (i = 0; i < len; i++){ // Loop for input sanitizing
    userInput[i] = userInput[i].trim(); // Remove any whitespace
    userInput[i] = userInput[i].slice(0,6); // Take only first six characters (i.e. "MAT135h" becomes "MAT135")
  }
  console.log(userInput);
}

// Finding majors
function findMajors(){
  $.getJSON('http://raw.githubusercontent.com/patrickleweryharris/major-finder/master/majors.json', function(data){
    console.log("JSON loaded");
    getInput();
    var len = data.length;
    for (i = 0; i < len; i++){
      var flag = isSub(userInput, data[i].requirements);
      if (flag === true){
        programOutput = programOutput.concat("\n");
        programOutput = programOutput.concat(data[i].postName);
      }
    }
    console.log(programOutput);
  });
}

/*

Helper function for comparing the arrays

Sort both arrays, traverse both.
Compare the elements. If an element in the post_reqs is not found in the
inputted courses, then the courses do not meet the post requirements

*/
function isSub(courses, post_reqs){
  courses.sort();
  post_reqs.sort();
  var i, j;
  for(i = 0, j = 0; i < courses.length && j < post_reqs.length;){
    if (courses[i] < post_reqs[j]){
      ++i;
    }
    else if (courses[i] == post_reqs[j]){
      ++i; ++j;
    }
    else{
      return false;
    }
  }
  return j == post_reqs.length;
}
