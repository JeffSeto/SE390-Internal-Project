from models import Course, Requirement

courses = [
    Course("Operating Systems", "CS", "350", "A course on the internals of the operating system"),
    Course("Concurrency", "CS",  "343", "A course on exceptions and advanced control flow"),
    Course("User Interfaces", "CS", "349", "Students will build their own user interfaces"),
    Course("Algorithms", "CS", "341", "A walkthrough of common computer science algorithms"),
    Course("Astronomy", "SCI", "238", "A course in astronomy intended for Math, Eng and Sci students."),
    Course("Environmental Geology", "SCI", "250", "An introduction to geological concepts."),
    Course("Compilers", "CS", "444", "Learn about phases of compilation."),
    Course("Real-time", "CS", "452", "Tools and techniques of real-time programming."),
    Course("Intro to AI", "CS", "486", "An introduction to the concepts of Artificial Intelligence."),
    Course("Cryptography", "ECE", "409", "Introduction to cryptology and computer security.")
]

requirements = [
    Requirement("1A", "SE 101,MATH 115,MATH 117,MATH 135,CS 137,ECE 105", 0),
    Requirement("1B", "SE 102,MATH 119,CS 138,ECE 106,ECE 124,ECE 140", 0),
    Requirement("2A", "SE 201,SE 212,CS 241,ECE 222,STAT 206,CHE 102", 1),
    Requirement("2B", "SE 202,CS 240,CS 247,MSCI 261,MATH 213,MATH 239", 1),
    Requirement("3A", "SE 301,CS 341,CS 349,SE 350,SE 465", 1),
    Requirement("3B", "SE 302,CS 343,CS 348,SE 380,SE 464", 1),
    Requirement("4A", "SE 401,ECE 358,SE 463,SE 490", 2),
    Requirement("4B", "SE 402,SE 491", 5)
]
