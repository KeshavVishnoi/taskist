import React from 'react';
import Head from './components/Head';
import InputData from './components/InputData';
import Tasks from './components/tasks';
import axios from 'axios';
import './index.css';
class App extends React.Component{
  state = {
    tasks : {
      
    }
  }

  setTasks = task => {
    // const stateTasks = this.state;
    this.setState({tasks : task});
    // console.log(this.state);
    console.log("rerender");
  }

  addToDb = async task => {
    console.log(task);
    const data = await axios.post("/tasks/addtask", task);
    // return data.data[data.data.length - 1].id;
    this.setState({ ...data.data });
    this.setTasks({ ...data.data });
  }

  addTask = async task => {
    //copy state
    const tasks = {...this.state.tasks}
    //add to state
     this.addToDb( task );
    tasks[`id${Date.now()}`] = task;
    console.log(tasks);
    const data = await axios.get("/tasks/alltasks");
    this.setTasks({ ...data.data });
    // this.setState({tasks: tasks});
    console.log(data);
    // console.log(task);
  }

  deleteTask = async id => {
    const tasks = {...this.state.tasks}
    //add to state
    console.log((tasks[id].id));
    axios.delete("/tasks/deletetask/" + (tasks[id].id));
    // axios.delete("http://localhost:8080/tasks/deletetask/" + (tasks[id].id)).then(res => {
    //   alert("deleted" + res);
    // });
    delete tasks[id];

    this.setState({tasks: tasks});
  }

  render(){
    return (
      <>
       <div className="app"> 
        <Head />
        <InputData addTask={this.addTask}/>
        <Tasks setTasks={this.setTasks} tasks={this.state.tasks} deleteTask={this.deleteTask}/>
       </div>
       </>
    );

  }
}

export default App;
