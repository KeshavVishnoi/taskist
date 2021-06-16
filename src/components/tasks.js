import React from 'react';
import Task from './Task';
import axios from 'axios';
export default class Tasks extends React.Component{
    // state = {
    //     tasks : []
    // };
    async componentDidMount() {
        const data = await axios.get("/tasks/alltasks");
        // const tasks = {...this.state.tasks}
        // console.log( data );
        // console.log( {  ...(data.data.map(e => {return e.date}) )  } );
        // console.log( {  ...(data.data.map(e => {return e.id}) )  } );
        const tasks = { ...data.data };
        this.props.setTasks(tasks);

    }
    render() {
        return (
            <div className="tasks">
               { Object.keys(this.props.tasks).map( id => <Task key={id} index={id} task={this.props.tasks[id]} deleteTask={this.props.deleteTask} setTasks={this.props.setTasks}/> )}
                
            </div>
        );
    };
}