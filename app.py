from models import *
from flask import jsonify

@app.route('/tasks/', methods = ['GET'])
def todos():
    return jsonify(result=[i.serialize for i in ToDo.query.all()])
        
@app.route('/tasks/<int:id>/', methods = ['GET'])
def get_todo(id):
    return jsonify({'result': ToDo.query.get(id).serialize})
        
@app.route('/tasks/', methods = ['POST'])
def create_todo():
    todo = ToDo(title=request.json.name,description=request.json.description)
    db.session.add(todo)
    db.session.commit()
    return jsonify({'result': todo.id})
    
    
@app.route('/tasks/<int:id>/', methods = ['PATCH'])
def update_todo():
    todo = ToDo.query.get(id)
    title = request.json.title
    if title:
        todo.title=title
    description = request.json.description
    if description:
        todo.description = description
    done = request.json.done
    if done:
        todo.done = done 
    db.session.commit()
    return jsonify({'result': todo.id})
    
    
@app.route('/tasks/<int:id>', methods = ['DELETE'])
def delete_todo(id):
    db.session.delete(ToDo.query.get(id))
    db.session.commit()
    return jsonify( { 'result': True } )


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=8080)