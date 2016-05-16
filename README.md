# Major Finder

[![License](https://img.shields.io/badge/License-MIT-blue.svg)]()

#### A tool for finding your major at UofT

Takes your first year courses and tells you what Specialist, Major or Minor
program(s) you are eligible for

### Currently drawing data from the 2016-2017 Arts and Science Calendar

## License Information

Major Finder is open source and released under the [MIT License](https://raw.githubusercontent.com/patrickleweryharris/major-finder/master/LICENSE)

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

## Programs not included in the application (for now) due to complicated requirements:
  - Any program without specific first year requirements
  - Geoscience Major/Minor
  - Earth and Environmental Systems Major
  - Ethics, Society and Law Major (Based on breadth reqs.)
  - International Relations Specialist (Only some variants of the reqs.)
  - Forest Conservation Science Specialist/Major/Minor
  - Forest Conservation Specialist/Major/Minor
  - Environmental Geography Specialist/Major ("Pick any two courses")
  - Human Geography Specialist/Major/Minor ("Pick any two courses")
  - Physical and Environmental Geography Specialist/Major/Minor
  - Geographic Information Systems Minor
  - Urban Studies Specialist/Major/Minor (Pick selections of different courses)
  - Near and Middle Eastern Civilizations Specialist/Major/Minor (Many many different combos)
  - Peace, Conflict and Justice Specialist/Major (Type 3 with many many requirements)
  - Physiology Major/Minor ("Pick any of the following")

## Programs that need to be added:
  - Sociology Specialist/Major/Minor
  - South Asian Studies Minor
  - Spanish Specialist/Major/Minor
  - Statistics Specialist/Major/Minor
  - Applied Statistics Specialist
  - Women and Gender Studies Specialist/Major/Minor

## Algorithm Construction
  - Program design is fairly simple
  - Takes sanitized input of first year courses from a user, and organizes them into an array
    - For example, a user may enter:
      MAT137Y, CSC148H, csc165h, ita100
    - The application will interpret this as:
      ```
      ["MAT137", "CSC148", "CSC165", "ITA100"]
      ```
  - Passing this data into our algorithm, we compare the user's input with data from the [list of programs](https://raw.githubusercontent.com/patrickleweryharris/major-finder/master/majors.json)
  - If a programs `"requirements"` are entirely contained in the input, that program's `"name"` is added to the list of programs returned to the user when the program terminates
  - Repeat the previous step until the list of programs has been exhausted
  - Display the list of programs that the user qualifies for

## Possible improvements
  - Filtering (i.e. if a user did not take any math courses there is no point searching through programs that require math)
