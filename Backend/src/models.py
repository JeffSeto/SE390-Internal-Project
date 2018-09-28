from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    """A User class"""

    __tablename__ = "users"

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    department = db.Column(db.Text, nullable=False)

    def __init__(self, name, department):
        self.name = name
        self.department = department

    def __repr__(self):
        """Display when printing a User object"""

        return "<User: {}>".format(self.name)

    def as_dict(self):
        """Convert object to dictionary"""

        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

class Course(db.Model):
    
    __tablename__ = "courses"

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    course_code = db.Column(db.Text, nullable=False)
    description = db.Column(db.Text, nullable=True)

    def __init__(self, name, course_code, description):
        self.name = name
        self.course_code = course_code
        self.description = description

class Program(db.Model):

    __tablename__ = "programs"

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    
    def  __init__(self, name):
        self.name = name

class Requirement(db.Model):

    __tablename__ = "requirements"

    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    program_id = db.Column(db.Integer, db.ForeignKey('programs.id'))
    name = db.Column(db.Text, nullable=True)
    term = db.Column(db.Text, nullable=True)
    courses = db.Column(db.Text, nullable=False) # comma delimited list of course ids

    def __init__(self, name, term, courses):
        self.name = name
        self.term = term
        self.courses = courses

###############################################################

def connect_to_db(app, db_uri='postgresql+psycopg2://se390:pass@db/course_planner'):
    """Connect the database to Flask app."""

    # Configure to use PostgreSQL database
    app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
    db.app = app
    db.init_app(app)

    print(db)

if __name__ == "__main__":

    # Work with database directly if run interactively
    from views import app
    connect_to_db(app)

    # Create all tables if they don't already exist
    db.create_all()

    print("Connected to DB.")