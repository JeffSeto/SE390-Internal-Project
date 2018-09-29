from flask_restful import Resource, reqparse, fields, marshal_with

import query

class RequirementsView(Resource):

    requirements = {
        'value': fields.List(fields.Nested({
            'term': fields.String,
            'courses': fields.String,
            'electives': fields.Integer
        }))
    }

    @marshal_with(requirements)
    def get(self):
        return {'value': query.get_requirements("SE")}
