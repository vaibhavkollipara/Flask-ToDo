from models import *
from flask import jsonify
from flask import request
from flask_cors import CORS, cross_origin

cors = CORS(app)


@app.route('/', methods=['GET'])
def index():
    html_content = """
        <h2> ToDo Api Docs</h2>
        <ul>
            <li>GET /tasks: Returns all tasks in the database</li>
            <li>GET /tasks/: Returns a single task from the database</li>
            <li>POST /tasks: Returns the ID of a newly created task</li>
            <li>PATCH /tasks/: Returns the ID of the updated task</li>
            <li>DELETE: /tasks/: Deletes the specified task from the database</li>
        </ul>
    """
    return html_content


@app.route('/tasks/', methods=['GET'])
def todos():
    return jsonify(result=[i.serialize for i in ToDo.query.all()])


@app.route('/tasks/<int:id>/', methods=['GET'])
def get_todo(id):
    return jsonify({'result': ToDo.query.get(id).serialize})


@app.route('/tasks/', methods=['POST'])
def create_todo():
    try:
        if not request.json or not 'title' in request.json:
            return jsonify({'error': 'No Data Received'})
        todo = ToDo(title=request.json['title'], description=request.json['description'])
        db.session.add(todo)
        db.session.commit()
        return jsonify({'result': todo.id})
    except Exception, e:
        return jsonify({'error': str(e)})


@app.route('/tasks/<int:id>/', methods=['PATCH'])
def update_todo(id):
    try:
        todo = ToDo.query.get(id)
        title = request.json.get("title")
        if title != None:
            todo.title = title
        description = request.json.get("description")
        if description != None:
            todo.description = description
        done = request.json.get("done")
        if done != None:
            todo.done = done
        db.session.commit()
        return jsonify({'result': todo.id})
    except Exception, e:
        return jsonify({'error': "{}".format(str(e))})


@app.route('/tasks/<int:id>/', methods=['DELETE'])
def delete_todo(id):
    try:
        db.session.delete(ToDo.query.get(id))
        db.session.commit()
        return jsonify({'result': True})
    except:
        return jsonify({'error': "Problem Deleting Task with Id {}".format(id)})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
