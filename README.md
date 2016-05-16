# Major Finder

[![License](https://img.shields.io/badge/License-MIT-blue.svg)]()

#### A tool for finding your major at UofT

Takes your first year courses and tells you what Specialist, Major or Minor
program(s) you are eligible for

### Currently drawing data from the 2016-2017 Arts and Science Calendar

## Data Structure

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

This data structure visualized (from [json 2 html](http://json.bloople.net/)):

![visualized](https://raw.githubusercontent.com/patrickleweryharris/major-finder/master/json-visual.png)

Some programs can have different courses that allow entry (i.e. MAT135/136 vs. MAT137), so the same POST may result from different first year courses. The list of programs and requirements reflects this

## Problematic Programs (requirements don't work with the JSON):
  - Any program without specific first year requirements
  - Geoscience Major/Minor
  - Earth and Environmental Systems Major
  - Ethics, Society and Law Major (Based on breadth reqs.)
  - International Relations Specialist (Only some variants of the reqs.)
  - Forest Conservation Science Specialist/Major/Minor
  - Forest Conservation Specialist/Major/Minor
  - Environmental Geography Specialist/Major (Pick any two courses)
  - Human Geography Specialist/Major/Minor (Pick any two courses)
  - Physical and Environmental Geography Specialist/Major/Minor
  - Geographic Information Systems Minor
  - Urban Studies Specialist/Major/Minor (Pick selections of different courses)
  - Near and Middle Eastern Civilizations Specialist/Major/Minor (Many many different combos)
  - Peace, Conflict and Justice Specialist/Major (Type 3 with many many requirements)

## License Information

Major Finder is open source and released under the [MIT License](https://raw.githubusercontent.com/patrickleweryharris/major-finder/master/LICENSE)
