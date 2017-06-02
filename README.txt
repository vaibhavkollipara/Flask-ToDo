Developed By : Vaibhav Kollipara

Backend Technology : Flask
Backend Database Used : SQLite with Flask-SQLAlchemy ORM

Frontend Tehnology : React

Steps To Start Backend Server

Install Requirements :

>pip install -r requirements.txt

Make Database Migrations

>python manage.py db init

>python manage.py db migrate

>python manage.py db upgrade

Start Backend Server

>python app.py

Testing Rest Api :
 app-test.py file has methods for making different requests to the rest api.
 start python shell and import api-test functions and execute them to test backend
 
Steps To Start Front End App :

Go to directory "Frontend-React/todo/"

> npm install

> npn start

Note : If tasks are not being fetched, please change the return url value of getBaseUrl() in App.js file
