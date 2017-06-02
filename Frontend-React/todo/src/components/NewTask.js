import React, {Component} from 'react';


class NewTask extends Component{

    newTask(e){

        if(this.refs.title.value === ""){
            alert("Title Required");
        }else{
            if(this.refs.description.value === ""){
                alert("Description Required");
            }else{
                let task = {"title" : this.refs.title.value,"description" : this.refs.description.value}
                this.refs.title.value= "";
                this.refs.description.value = "";
                this.props.addTask(task);
            }
        }


        e.preventDefault()
    }

    render(){
        return(
            <div className="NewTask">
                <form onSubmit={this.newTask.bind(this)} className="form-inline">
                    <input className="form-control" type="text" placeholder="Title" ref="title"/>
                    <input className="form-control" type="text" placeholder="Description" ref="description"/>
                    <button className="form-control btn btn-success" type="submit"><span className="glyphicon glyphicon-plus-sign"></span>&nbsp;Add Task</button>
                </form>
            </div>
        );
    }
}

NewTask.propTypes = {
    addTask : React.PropTypes.func
}

export default NewTask;
