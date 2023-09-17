from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    # __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    favorites_column = db.relationship("Favorites", backref = "user")
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), unique=False, nullable=False)
    first_name = db.Column(db.String(80),  nullable=False)
    last_name = db.Column(db.String(80),  nullable=False)


    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name
            # do not serialize the password, its a security breach
        }
    
class Favorites(db.Model):
    # __tablename__ = "favorites"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    anime_id = db.Column(db.Integer, unique=True)

    def __repr__(self):
        return f'<Favorites {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "anime_id": self.anime_id,
            # do not serialize the password, its a security breach
        }