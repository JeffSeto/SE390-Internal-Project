from flask_restful import Resource, reqparse, fields, marshal_with

class ValidationView(Resource):

    validation = {
        'is_valid': fields.Boolean
    }

    @marshal_with(validation)
    def post(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('courses',
                                 type=str,
                                 action='append',
                                 required=True)
        args = self.parser.parse_args()
        courses = args['courses']
        print(courses)

        science = 0
        for c in courses:
            if c.startswith("SCI"):
                science += 1

        if science >= 2:
            return {'is_valid': True}

        print(science)
        return {'is_valid': False}
