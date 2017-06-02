import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Task from './components/Task';
import NewTask from './components/NewTask';

class App extends Component {

  constructor(){
    super();
    this.state = {
      tasks : []
    }
  }
 componentWillMount(){

  }

  getBaseUrl(){
    return 'http://0.0.0.0:8080';
  }

  getTodos(){
      $.ajax({
        url : this.getBaseUrl()+'/tasks/',
        dataType : 'json',
        cache : false,
        method: 'get',
        success : function(data){
          if(data.result){
            this.setState({tasks : data.result},function(){
              console.log('fetched todos');
            });
          }else{
            alert(data.error);
          }
        }.bind(this),
        error : function(xhr, status, err){
          console.log(err);
        },
      });
  }

  componentDidMount(){
    this.getTodos();
  }

  handleUpdate(task){
      // console.log(task);
        $.ajax({
        url : this.getBaseUrl()+'/tasks/'+task.id+'/',
        dataType : 'json',
        cache : false,
        type: 'PATCH',
        contentType: 'application/json;charset=UTF-8',
        data : JSON.stringify({
          "done" : !task.done
        }),
        success : function(data){
           if(data.result){
            console.log("Updated Task");
            this.getTodos();
          }else{
            alert(data.error);
          }
        }.bind(this),
        error : function(xhr, status, err){
          console.log(err);
        },
      });
  }

  handleNewTask(task){
    // console.log(task);

    $.ajax({
        url : this.getBaseUrl()+'/tasks/',
        dataType : 'json',
        cache : false,
        type: 'POST',
        contentType: 'application/json;charset=UTF-8',
        data : JSON.stringify(task),
        success : function(data){
            if(data.result){
            console.log("Added New Task");
            this.getTodos();
          }else{
            alert(data.error);
          }
        }.bind(this),
        error : function(xhr, status, err){
          console.log(err);
        },
      });
  }

  handleDelete(taskId){
      $.ajax({
        url : this.getBaseUrl()+'/tasks/'+taskId+'/',
        dataType : 'json',
        cache : false,
        type: 'DELETE',
        success : function(data){
            if(data.result){
            console.log("Deleted Task");
            this.getTodos();
          }else{
            alert(data.error);
          }
        }.bind(this),
        error : function(xhr, status, err){
          console.log(err);
        },
      });
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">ToDo App</h1>
        <div className="container">
          <div className="row text-center">
            <NewTask addTask={this.handleNewTask.bind(this)}/>
          </div>
          <Task taskDelete={this.handleDelete.bind(this)} taskUpdate={this.handleUpdate.bind(this)} tasks={this.state.tasks}/>
        </div>
      </div>
    );
  }
}



export default App;
