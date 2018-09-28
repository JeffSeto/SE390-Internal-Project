from flask_restful import Resource, reqparse, fields, marshal_with

import query

class CourseView(Resource):

    courses = {
        'value': fields.List(fields.Nested({
            'name': fields.String,
            'course_code': fields.String,
            'description': fields.String
        }))
    }

    @marshal_with(courses)
    def get(self):
        return {'value': query.select_courses()}
