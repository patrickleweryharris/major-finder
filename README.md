# major-finder


[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/patrickleweryharris/major-finder/blob/master/LICENSE) [![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> A tool for finding your major at UofT

Takes your first year courses and tells you what Specialist, Major or Minor
program(s) you are eligible for

### Branches

- [Development](https://github.com/patrickleweryharris/major-finder)
- [Release](https://github.com/patrickleweryharris/major-finder/tree/gh-pages)

## Table of Contents

- [Background](#background)
- [Usage](#usage)
- [To Do](#to-do)
- [Programs Not Included](#programs-not-included)
- [Contribute](#contribute)
- [License](#license)

## Background  
UofT offers no easy tool to see what subject programs a student can study given their first year courses. Major finder was created to fill this gap

## Usage  
Major finder for UofT St. George is currently released (the gh-pages branch is the release branch). Major finder for UTM is currently in development (master branch).

Should you wish to develop major finder for another campus/school, all you need do is create a json file for that school, then put this into the find_majors() function:
```javascript
if (campusSelection == 'yourCampus'){
  jsonStr = 'yourJSONURL';
}
```
A corresponding selector must be added to the accompanying html file.

### JSON Format

JSON files that utilize the application should be in the following format:  
```json
[
  {
    "name":"Computer Science Major / Specialist / Minor",
    "calLink":"http://calendar.artsci.utoronto.ca/crs_csc.htm#ASSPE1689",
    "requirements:":[
      "CSC148",
      "CSC165",
      "MAT135",
      "MAT136"
    ]
  }
]
```

## To Do
  - Filtering (i.e. if a user did not take any math courses there is no point searching through programs that require math)
  - Better feedback for user
  - Add UTM/UTSC version

## Programs Not Included:
The following programs are not included due to having non-standard curricula:  
- Any program without specific first year requirements
- Geoscience Major/Minor
- Earth and Environmental Systems Major
- Ethics, Society and Law Major (Based on breadth reqs.)
- International Relations Specialist (Only some variants of the reqs.
- Forest Conservation Science Specialist/Major/Minor
- Forest Conservation Specialist/Major/Minor
- Environmental Geography Specialist/Major ("Pick any two courses")
- Human Geography Specialist/Major/Minor ("Pick any two courses")
- Physical and Environmental Geography Specialist/Major/Minor
- Geographic Information Systems Minor
- Urban Studies Specialist/Major/Minor (Pick selections of different courses)
- Near and Middle Eastern Civilizations Specialist/Major/Minor (Many many different combos)
- Peace, Conflict and Justice Specialist/Major (Type 3 with many many requirements)
- Classical Civilization Major (UTM)
- Diaspora and Transnational Studies (UTM)
- Economics and Political Science (UTM)
- Combined Degree Program: Exceptionality in Human Learning (Specialist), HBSc/Child Study and Education, Master of Arts (UTM)
- Combined Degree Program: Psychology (Specialist / Major), Honours Bachelor of Science/Child Study and Education, Master of Arts (UTM)
- Philosophy (UTM)
- Ethics, Society and Law Minor (UTM)  

## Contribute

PRs accepted.

Small note: If editing the Readme, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © Patrick Harris
