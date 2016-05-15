# Major Finder

[![License](https://img.shields.io/badge/License-MIT-blue.svg)]()

## A tool for finding your major at UofT

Takes your first year courses and tells you what Specialist, Major or Minor
program(s) you are eligible for

### Currently drawing data from the 2016-2017 Arts and Science Calendar

### Data Structure

The application relies on a compiled [list](https://raw.githubusercontent.com/patrickleweryharris/major-finder/master/majors.json) of St.George Campus Arts and Science subject POSTs and their requirements. This list is in the following format:

```json
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

![visualized](https://raw.githubusercontent.com/patrickleweryharris/major-finder/master/json-visual.png)

Some programs can have different courses that allow entry (i.e. MAT135/136 vs. MAT137), so the same POST may result from different first year courses. The list of programs and requirements reflects this

#### Problematic Programs (requirements don't really work with the JSON):
  - Geoscience Major/Minor
  - Earth and Environmental Systems Major
  - Ethics, Society and Law Major (Based on breadth reqs.)
  - International Relations Specialist (Only some variants of the reqs.)
