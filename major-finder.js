/*

Major Finder 0.0.2

Find majors you are eligible for at UofT

Copyright (c) 2016 Patrick Harris (plh.io)

Licensed under the MIT License
https://raw.githubusercontent.com/patrickleweryharris/major-finder/master/LICENSE


Project site: https://plh.io/major-finder
Github site: http://github.com/patrickleweryharris/major-finder

*/

// Getting user input and sanitizing it
var userInput;
var programOutput;
function getInput(){
  var userInputText = document.getElementById('input1').value;
  console.log(userInputText);
  userInputText = userInputText.toUpperCase(); // Capitalize each item in string
  console.log(userInputText);
  userInput = userInputText.split(',');
  console.log(userInput);
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
    window.alert(userInput);
  });
}
