from flask import Flask, request, abort
from flask_restful import Api

from models import User, db, connect_to_db
from user_resource import UserView
from course_resource import CourseView
from requirements_resource import RequirementsView

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
api = Api(app)

api.add_resource(UserView, "/users", "/users/<string:user_id>")
api.add_resource(CourseView, "/courses")
api.add_resource(RequirementsView, "/requirements")

if __name__ == '__main__':
    connect_to_db(app)
    app.run(port=5000, host='0.0.0.0', debug=True)

# # or group of prereq
# # prereq_groups = [
# #     {
# #         "prereqid": 1,
# #         "courseids": [ "cs350", "se350" ]
# #     }
# # ]

# # courses = [
# #     {
# #         "courseid": "cs343",
# #         "name": "Concurrent and Parallel Programming",
# #         "useful": 56,
# #         "easy": 54,
# #         "prereqs": [ prereq_groups[0] ], # and by default
# #         "allowed_departments": [ "Computer Science", "Software Engineering" ],
# #         "terms": [ "Fall" ]
# #     }
# # ]

# # terms = [
# #     {
# #         "termid": 1,
# #         "season": "Fall",
# #         "year": 2019
# #     }
# # ]

# # def get_course(courseid):
# #     for course in courses:
# #         if (courseid == course["courseid"]):
# #             return course, 200
# #     return "Course not found", 404

# # def get_term(termid):
# #     for term in terms:
# #         if (termid == term["termid"]):
# #             return term, 200
# #     return "Term not found", 404

# # class UserCourseTerm(Resource):
# #     def post(self):
# #         parser = reqparse.RequestParser()
# #         parser.add_argument("userid")
# #         parser.add_argument("courseid")
# #         parser.add_argument("termid")
# #         args = parser.parse_args()

# #         user = get_user(args["userid"])[0]
# #         course = get_course(args["courseid"])[0]
# #         term = get_term(int(args["termid"]))[0]

# #         if (term["season"] not in course["terms"]):
# #             return 400

# #         for prereq_group in course["prereqs"]:
# #             if (set(prereq_group["courseids"]).isdisjoint(user["courses_taken"])):
# #                 return 400
# #         return 201

# # class Course(Resource):
# #     def get(self, courseid):
# #         return get_course(courseid)

# # class Term(Resource):
# #     def get(self, termid):
# #         return get_term(termid)

# # class PrereqGroup(Resource):
# #     def get(self, prereqid):
# #         for group in prereq_groups:
# #             if (prereqid == group["prereqid"]):
# #                 return group

# # api.add_resource(User, "/users/<string:userid>")
# # api.add_resource(UserCourseTerm, "/add")
# # api.add_resource(Course, "/courses/<string:courseid>")
# # api.add_resource(Term, "/terms/<int:termid>")

# if __name__ == "__main__":
#     connect_to_db(app)
#     app.run(host="0.0.0.0", debug=True)
