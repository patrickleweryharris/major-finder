// See README.md for algorithm design
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
