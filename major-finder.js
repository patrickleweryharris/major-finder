/*

Major Finder 0.0.1

Find majors you are eligible for at UofT

Copyright (c) 2016 Patrick Harris (plh.io)

Licensed under the MIT License
https://raw.githubusercontent.com/patrickleweryharris/major-finder/master/LICENSE


Project site: https://plh.io/major-finder
Github site: http://github.com/patrickleweryharris/major-finder

*/

function load(){
  $.getJSON('http://raw.githubusercontent.com/patrickleweryharris/major-finder/master/majors.json', function(data){
    console.log("JSON loaded");
    window.alert(data[0].name);
  });
}
// Input santization ----------

// ----------------------------


// Comparison with JSON file ---

// ----------------------------


// Return data
