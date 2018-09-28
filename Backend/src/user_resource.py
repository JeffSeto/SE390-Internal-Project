from flask_restful import Resource, reqparse, fields, marshal_with

from models import User

class UserView(Resource):
    def __init__(self):
        """Parse arguments from json"""
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('name',
                                 type=str,
                                 required=True,
                                 help='No name provided')
        self.parser.add_argument('department',
                                 type=str,
                                 required=True,
                                 help='No department provided')

    user_fields = {
    'user_id': fields.Integer,
    'name': fields.String,
    'department': fields.String
    }

    @marshal_with(user_fields)
    def get(self, user_id):
        """Retrieve a user item by user_id"""
        user = User.query.get(user_id)

        if not user:
            abort(404, "User does not exist in the database")

        return user

    @marshal_with(user_fields)
    def post(self):
        """Create a new user item"""
        # parser = reqparse.RequestParser()
        # parser.add_argument("name")
        # parser.add_argument("department")
        # args = parser.parse_args()
        # print(args)

        json_data = request.get_json(force=True)
        name = json_data['name']
        department = json_data['department']

        user = User(name=name,
                    department=department)

        db.session.add(user)
        db.session.commit()

        return user