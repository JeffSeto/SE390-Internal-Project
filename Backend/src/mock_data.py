from models import Course, Requirement

courses = [
    Course("Operating Systems", "CS", "350", "A course on the internals of the operating system"),
    Course("Concurrency", "CS",  "343", "A course on exceptions and advanced control flow"),
    Course("User Interfaces", "CS", "CS349", "Students will build their own user interfaces"),
    Course("Algorithms", "CS", "341", "A walkthrough of common computer science algorithms")
]

requirements = [
    Requirement("1A", "SE 101,MATH 115,MATH 117,MATH 135,CS 137,ECE 105"),
    Requirement("1B", "SE 102,MATH 119,CS 138,ECE 106,ECE 124,ECE 140"),
    Requirement("2A", "SE 201,SE 212,CS 241,ECE 222,STAT 206,CHE 102"),
    Requirement("2B", "SE 202,CS 240,CS 247,MSCI 261,MATH 213,MATH 239")
]
