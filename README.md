#Problem Definition: 

##Build a to-do application with separate front-end and backend components.

##Backend:

###The backend should expose a simple REST API with the following endpoints:
-	GET /tasks: Returns all tasks in the database
-	GET /tasks/<id>: Returns a single task from the database
-	POST /tasks: Returns the ID of a newly created task
-	PATCH /tasks/<id>: Returns the ID of the updated task
-	DELETE: /tasks/<id>: Deletes the specified task from the database

A task has the following schema:
	{
		id: INTEGER,
		title: STRING,
		description: string,
		done: BOOLEAN
	}

Your application should be built using the Flask framework and use a SQLite database to store the tasks for persistence. You can use an ORM to manage the database objects. 

##Frontend:
The frontend should be built using React.JS. You should not use Redux or any other state management library. If you do, please provide an explanation in the README file.

###UI Requirements
-	Users should be presented with a list of all of their tasks upon opening the web page. 
-	The top of the page should have a form that allows users to create a new task with title and description.
-	Tasks that have not been completed should show the title and description and a button that allows users to mark them as done.
-	Tasks that have been completed should have a title that is crossed out and a button that allows the user to mark them as to-do.