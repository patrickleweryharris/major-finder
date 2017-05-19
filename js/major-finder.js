/*

Major Finder 2.0.0

Find majors you are eligible for at UofT

Copyright (c) 2016 - 2017 Patrick Harris (https://plh.io)

Licensed under the MIT License
https://raw.githubusercontent.com/patrickleweryharris/major-finder/master/LICENSE


Project site: https://plh.io/major-finder
Github site: http://github.com/patrickleweryharris/major-finder

*/
/*
Getting campus selection
*/
var campusSelection;

function getSelection() {
    campusSelection = $('input[name=group1]:checked').val();
}
/*
 *  Getting user input and sanitizing it
 */
var userInput;

function getInput() {

    var userInputText = document.getElementById('course_input').value;


    userInput = userInputText.toUpperCase().split(',');

    //Loop over and sanitize course inputs
    for (i = 0; i < userInput.length; i++) {
        userInput[i] = userInput[i].trim();
        userInput[i] = userInput[i].slice(0, 6); // Take only first six characters (i.e. "MAT135h" becomes "MAT135")
    }
}

/*
 * Finding majors
 */
var jsonStr;

function findMajors() {
    getSelection();
    if (campusSelection == 'UTSG') {
        jsonStr = 'https://raw.githubusercontent.com/patrickleweryharris/major-finder/master/json/majors.json';
        $('#georgi').show();
        $('#missy').hide();
        $('#siberia').hide();
    }
    if (campusSelection == 'UTM') {
        jsonStr = 'https://raw.githubusercontent.com/patrickleweryharris/major-finder/master/json/utm.json';
        $('#missy').show();
        $('#georgi').hide();
        $('#siberia').hide();
    }
    if (campusSelection == 'UTSC') {
        jsonStr = 'https://raw.githubusercontent.com/patrickleweryharris/major-finder/master/json/utsc.json';
        $('#siberia').show();
        $('#georgi').hide();
        $('#missy').hide();
    }
    $.getJSON(jsonStr, function(data) {

        getInput();
        var type1Output = "";
        var type2Output = "";
        var type2LOutput = "";
        var type3Output = "";

        if (userInput != '') {
            type1Output = "You are eligible for: <br> Type 1 Programs: <ul>";
            type2Output = "Type 2 Programs: <ul>";
            type2LOutput = "Type 2L Programs: <ul>";
            type3Output = "Type 3 Progrms: <ul>";


            for (i = 0; i < data.length; i++) {

                //Check if the input meets any post requirements
                var flag = isSub(userInput, data[i].requirements);

                if (flag === true) {
                    if (data[i].type == "1"){
                      type1Output = type1Output.concat("<li>");
                      type1Output = type1Output.concat("<a href=");
                      type1Output = type1Output.concat(data[i].calLink);
                      type1Output = type1Output.concat(">");
                      type1Output = type1Output.concat(data[i].postName);
                      type1Output = type1Output.concat("</a></li>");

                    }
                    else if (data[i].type == "2"){
                      type2Output = type2Output.concat("<li>");
                      type2Output = type2Output.concat("<a href=");
                      type2Output = type2Output.concat(data[i].calLink);
                      type2Output = type2Output.concat(">");
                      type2Output = type2Output.concat(data[i].postName);
                      type2Output = type2Output.concat("</a></li>");

                    }
                    else if (data[i].type == "2L"){
                      type2LOutput = type2LOutput.concat("<li>");
                      type2LOutput = type2LOutput.concat("<a href=");
                      type2LOutput = type2LOutput.concat(data[i].calLink);
                      type2LOutput = type2LOutput.concat(">");
                      type2LOutput = type2LOutput.concat(data[i].postName);
                      type2LOutput = type2LOutput.concat("</a></li>");

                    }
                    else if (data[i].type == "3"){
                      type3Output = type3Output.concat("<li>");
                      type3Output = type3Output.concat("<a href=");
                      type3Output = type3Output.concat(data[i].calLink);
                      type3Output = type3Output.concat(">");
                      type3Output = type3Output.concat(data[i].postName);
                      type3Output = type3Output.concat("</a></li>");
                    }

                }

            }

            type1Output = type1Output.concat("</ul>");
            type2Output = type2Output.concat("</ul>");
            type2LOutput = type2LOutput.concat("</ul>");
            type3Output = type3Output.concat("</ul>");
            document.getElementById("eligible_programs").innerHTML = type1Output + "<br>" + type2Output + "<br>" + type2LOutput  + "<br>" + type3Output;

        } else {
            type1Output = "You did not enter any courses";
            document.getElementById("eligible_programs").innerHTML = type1Output;
        }
    });
}

/*

Helper function for comparing the arrays

Sort both arrays, traverse both.
Compare the elements. If an element in the post_reqs is not found in the
inputted courses, then the courses do not meet the post requirements

*/
function isSub(courses, post_reqs) {
    courses.sort();
    post_reqs.sort();
    var i, j;
    for (i = 0, j = 0; i < courses.length && j < post_reqs.length;) {
        if (courses[i] < post_reqs[j]) {
            ++i; // Something appears in input that reqs doesn't need or have
        } else if (courses[i] == post_reqs[j]) {
            ++i;
            ++j;
        } else {
            return false;
        }
    }
    return j == post_reqs.length;
}
