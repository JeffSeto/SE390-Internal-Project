import mock_data
from models import User, db
## file that queries our SQL, they'll be mocked for now

def select_courses():
    return mock_data.courses

def add_user(user):
    return None