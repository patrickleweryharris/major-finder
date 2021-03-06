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
- [API](#api)
- [Notes](#notes)
- [Contribute](#contribute)
- [License](#license)

## Background  
UofT offers no easy tool to see what subject programs a student can study given their first year courses. Major finder was created to fill this gap

## Usage  
Major finder for the UofT St. George campus is currently released [here](https://plh.io/major-finder). Major finder for UTSC and UTM is no longer supported.

## API

Should you wish to develop major finder for another campus/school, all you need do is create a json file for that school,
then add this code into the find_majors() function in [major-finder.js](https://github.com/patrickleweryharris/major-finder/blob/master/js/major-finder.js):
```javascript
if (campusSelection == 'yourCampus'){
  jsonStr = 'yourJSONURL';
}
```
A corresponding selector must be added to the accompanying [html file](https://github.com/patrickleweryharris/major-finder/blob/master/test.html):
```html
<input type="radio" name="group1" id="r1" value="yourCampus">
        <label for="item1">Your Campus Name</label>
```

#### JSON Format

JSON files that utilize the application should be in the following format:  
```json
{
  "postName":"Computer Science Major / Specialist / Minor",
  "calLink":"http://calendar.artsci.utoronto.ca/crs_csc.htm#ASSPE1689",
  "type": "2L",
  "requirements":[
    "CSC148",
    "CSC165",
    "MAT135",
    "MAT136"
  ]
}
```
## Notes

#### To Do
  - Second year program entry
  - Type 2L program grade requirements
  - Eventual updating to 2017 - 2018 calendar will be required

#### Programs Not Included:
The following programs are not included due to having non-standard curricula:  
- Geoscience Major/Minor (40 different combinations)
- Earth and Environmental Systems Major (35 different combinations)
- Physical and Environmental Geography Specialist/Major/Minor
- Geology Specialist
- Physical & Environmental Geography Major
- Renaissance Studies Specialist / Major / Minor (pick from a list of courses)

## Contribute

PRs accepted.

Small note: If editing the Readme, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © Patrick Harris
