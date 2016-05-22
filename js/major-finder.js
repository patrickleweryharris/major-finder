/*

Major Finder 1.0.0

Find majors you are eligible for at UofT

Copyright (c) 2016 Patrick Harris (https://plh.io)

Licensed under the MIT License
https://raw.githubusercontent.com/patrickleweryharris/major-finder/master/LICENSE


Project site: https://plh.io/major-finder
Github site: http://github.com/patrickleweryharris/major-finder

*/

/*
 *  Getting user input and sanitizing it
 */
var userInput;
function getInput(){

    var userInputText = document.getElementById('course_input').value;

    userInput = userInputText.toUpperCase().split(',');

    //Loop over and sanitize course inputs
    for (i = 0; i < userInput.length; i++){ 
      // Take only first six characters (i.e. "MAT135h" becomes "MAT135")
      userInput[i] = userInput[i].trim().slice(0,6); 
    }

}

/*
 * Finding majors

 */
function findMajors(){
  $.getJSON('https://raw.githubusercontent.com/patrickleweryharris/major-finder/master/majors.json', function(data){

      getInput();
      var programOutput = "You are eligible for:";

      for (i = 0; i < data.length; i++){

        //Check if the input meets any post requirements
        var flag = isSub(userInput, data[i].requirements);

        if (flag === true){
          programOutput = programOutput.concat("<br>");
          programOutput = programOutput.concat(data[i].postName);
        }

      }


      document.getElementById("eligible_programs").innerHTML = programOutput + "<br>";


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
      ++i; // Something appears in input that reqs doesn't need or have
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