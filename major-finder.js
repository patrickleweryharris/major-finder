// See README.md for algorithm design
function load(){
  var posts;
  $.getJSON('http://raw.githubusercontent.com/patrickleweryharris/major-finder/master/majors.json', function(data){
    console.log(data);
    posts = data;
  });
  window.alert(posts[0].name);
  console.log(posts[0].requirements[3]);
}
// Input santization ----------

// ----------------------------


// Comparison with JSON file ---

// ----------------------------


// Return data
