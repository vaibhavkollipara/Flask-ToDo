from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config.from_pyfile('appconfig.cfg')

db = SQLAlchemy(app)

class ToDo(db.Model):
    __tablename__ = "ToDo"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(length=20))
    description = db.Column(db.String(255))
    done = db.Column(db.Boolean,default=False)
    
    
    @property
    def serialize(self):
       """Return object data in easily serializeable format"""
       return {
           'id' : self.id,
           'title': self.title,
           'description' : self.description,
           'done' : self.done
       }