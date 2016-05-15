# major-finder

[![License](https://img.shields.io/badge/License-MIT-blue.svg)]()

## A tool for finding your major at UofT

Takes your first year courses and tells you what Specialist, Major or Minor
program(s) you are eligible for

### Currently drawing data from the 2016-2017 Arts and Science Calendar

### Data Structure

The application relies on a compiled [list](https://raw.githubusercontent.com/patrickleweryharris/major-finder/master/majors.json) of St.George Campus Arts and Science subject POSTs and their requirements. This list is in the following format:
```JSON
{
  "majors" : [
  {
    "name":"Computer Science Major/Specialist/Minor",
    "requirements:":[
      "CSC148",
      "CSC165",
      "MAT135",
      "MAT136"
    ]
  },
  {
    "name":"Computer Science Major/Specialist/Minor",
    "requirements:":[
      "CSC148",
      "CSC165",
      "MAT137"
    ]
  }
]
}
```
This data structure visualized:
![visualized](sjkgfhs)
Some programs can have different courses that allow entry (i.e. MAT135/136 vs. MAT137), so the same POST may result from different first year courses. The list of programs and requirements reflects this

#### Problematic Programs (requirements don't really work with the JSON):
  - Geoscience Major/Minor
  - Earth and Environmental Systems Major
