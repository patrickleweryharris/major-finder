import json
from pprint import pprint

'''
 Find which program codes are not in the majors.json file
'''


def parse():
    code_file = open("codes.txt", "r")
    codes = []

    for line in code_file:
        codes.append(line)

    with open('../json/majors.json') as data_file:
        data = json.load(data_file)

    included = set()
    for program in data:
        curr = program['calLink'][-4:]
        included.add(curr)

    not_included = set()
    for code in codes:
        code = code[5:9]
        if code not in included:
            not_included.add(code)

    # print(not_included)
    for item in not_included:
        print(item)
        # Prints nicer for me to read


if __name__ == "__main__":
    parse()
