var jsonStr;
var seenPrograms = [];

function getTypeOnes() {
  jsonStr = 'https://raw.githubusercontent.com/patrickleweryharris/major-finder/master/json/majors.json';
  $.getJSON(jsonStr, function(data) {
    type1Output = "You are eligible for: <br> Type 1 Programs: <ul>";

    for (i = 0; i < data.length; i++) {
      if (data[i].type == "1"){

        if ($.inArray(data[i].postName, seenPrograms) == -1){

          seenPrograms.push(data[i].postName);
          type1Output = type1Output.concat("<li>");
          type1Output = type1Output.concat("<a href=");
          type1Output = type1Output.concat(data[i].calLink);
          type1Output = type1Output.concat(">");
          type1Output = type1Output.concat(data[i].postName);
          type1Output = type1Output.concat("</a></li>");
        }

      }
    }

    document.getElementById("eligible_programs").innerHTML = type1Output;
  });
}

window.onload = getTypeOnes;
