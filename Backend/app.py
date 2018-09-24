from flask import Flask
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)
api = Api(app)

users = [
    {
        "userid": "jsmith",
        "name": "John Smith",
        "age": 20,
        "department": "Software Engineering",
        "term": "3A",
        "courses_taken": [ "se350" ]
    },
    {
        "userid": "mbrown",
        "name": "Mary Brown",
        "age": 19,
        "department": "Computer Science",
        "term": "1A",
        "courses_taken": []
    }
]

# or group of prereq
prereq_groups = [
    {
        "prereqid": 1,
        "courseids": [ "cs350", "se350" ]
    }
]

courses = [
    {
        "courseid": "cs343",
        "name": "Concurrent and Parallel Programming",
        "useful": 56,
        "easy": 54,
        "prereqs": [ prereq_groups[0] ], # and by default
        "allowed_departments": [ "Computer Science", "Software Engineering" ],
        "terms": [ "Fall" ]
    }
]

terms = [
    {
        "termid": 1,
        "season": "Fall",
        "year": 2019
    }
]

def get_user(userid):
    for user in users:
        if (userid == user["userid"]):
            return user, 200
    return "User not found", 404

def get_course(courseid):
    for course in courses:
        if (courseid == course["courseid"]):
            return course, 200
    return "Course not found", 404

def get_term(termid):
    for term in terms:
        if (termid == term["termid"]):
            return term, 200
    return "Term not found", 404

class User(Resource):
    def get(self, userid):
        return get_user(userid)

class UserCourseTerm(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument("userid")
        parser.add_argument("courseid")
        parser.add_argument("termid")
        args = parser.parse_args()

        user = get_user(args["userid"])[0]
        course = get_course(args["courseid"])[0]
        term = get_term(int(args["termid"]))[0]

        if (term["season"] not in course["terms"]):
            return 400

        for prereq_group in course["prereqs"]:
            if (set(prereq_group["courseids"]).isdisjoint(user["courses_taken"])):
                return 400
        return 201

class Course(Resource):
    def get(self, courseid):
        return get_course(courseid)

class Term(Resource):
    def get(self, termid):
        return get_term(termid)

class PrereqGroup(Resource):
    def get(self, prereqid):
        for group in prereq_groups:
            if (prereqid == group["prereqid"]):
                return group
        
api.add_resource(User, "/user/<string:userid>")
api.add_resource(UserCourseTerm, "/add")
api.add_resource(Course, "/course/<string:courseid>")
api.add_resource(Term, "/term/<int:termid>")

app.run(debug=True)
