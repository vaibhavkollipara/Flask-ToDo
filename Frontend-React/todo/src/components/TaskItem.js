import React, {Component} from 'react';


class TaskItem extends Component {

    updateTask(){
        this.props.updateTask(this.props.task);
    }

    deleteTask(){
        this.props.deleteTask(this.props.task.id);
    }

    render() {

    if(this.props.task){

        if(this.props.task.done){
            return (
            <div className="TaskItem Done col-xs-10 col-sm-4 col-md-3 col-lg-3">
                <div className="title text-center">{this.props.task.title}</div><br/>
                <p className="text-center">{this.props.task.description}</p><br/>
                <button onClick={this.updateTask.bind(this)} className="btn btn-primary">Mark As TO-DO</button>
                <button onClick={this.deleteTask.bind(this)} className="btn btn-danger pull-right"><span className="glyphicon glyphicon-trash"></span></button>
            </div>
        );
        }else{

        return (
            <div className="TaskItem UnDone col-xs-10 col-sm-4 col-md-3 col-lg-3">
                <div className="title text-center">{this.props.task.title}</div><br/>
                <p className="text-center">{this.props.task.description}</p><br/>
                <button onClick={this.updateTask.bind(this)} className="btn btn-primary">Mark As Done</button>
                <button onClick={this.deleteTask.bind(this)} className="btn btn-danger pull-right"><span className="glyphicon glyphicon-trash"></span></button>
            </div>
        );

        }
    }
  }

}

TaskItem.propTypes= {
    task : React.PropTypes.object,
    updateTask : React.PropTypes.func,
    deleteTask : React.PropTypes.func
}

export default TaskItem;
