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
var userInputText;
var userInput;
var programOutput;
function getInput(){
  userInputText = document.getElementById('input1').value;
  console.log(userInputText);
  userInput = userInputText.split(',');
  console.log(userInput);
  // Needs to capitalize each item
  // Take only the first six chars of each item
}

// Finding majors
function findMajors(){
  $.getJSON('http://raw.githubusercontent.com/patrickleweryharris/major-finder/master/majors.json', function(data){
    console.log("JSON loaded");
    getInput();
    window.alert(data[0].name);
    window.alert(userInput);
  });
}
