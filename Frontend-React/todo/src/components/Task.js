import React, {Component} from 'react';
import TaskItem from './TaskItem';


class Task extends Component {

    handleupdate(task){
        // console.log("Update : "+taskId);
        this.props.taskUpdate(task);
    }

    handledelete(taskId){
        this.props.taskDelete(taskId);
    }


    render() {
    let taskItems;
    if(this.props.tasks){
        taskItems = this.props.tasks.map(task => {

                return (
                    <TaskItem deleteTask={this.handledelete.bind(this)} updateTask={this.handleupdate.bind(this)} key={task.id} task={task} />
                );
        });
    }

    return (
      <div className="Task">
        <div className="row">
            {taskItems}
        </div>
      </div>
    );
  }

}

Task.propTypes = {
    tasks : React.PropTypes.array,
    taskUpdate : React.PropTypes.func,
    taskDelete : React.PropTypes.func
}

export default Task;
