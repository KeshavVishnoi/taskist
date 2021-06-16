import React from 'react';

export default class InputData extends React.Component{
    taskRef = React.createRef();
    dateRef = React.createRef();

    createTask = event => {
        event.preventDefault();
        // console.log(this.taskRef.current.value);
        // console.log(this.dateRef.current.value);
        const task = {
            task: this.taskRef.current.value,
            date: this.dateRef.current.value
        }
        // console.log(event.currentTarget); 
        event.currentTarget.reset();
        this.props.addTask( task );
       
    }

    render() {
        return (
            <> 
            
            <form className="inp-data" onSubmit={this.createTask}>
        
                <label htmlFor="task" className="lead">Task</label>
                <input ref={this.taskRef} required type="text" name="task" className="field" placeholder="Task Name"/>
                <label htmlFor="date" className="lead">Date</label>
                {/* <input ref={this.dateRef} required type="date" name="date" className="field"/> */}
                <input ref={this.dateRef} required type="text" name="date" className="field" placeholder="MM/DD/YYYY"
                    onFocus={(event) => (event.target.type='date')} onBlur={(event) => (event.target.type='text')}/>
                {/* <button onClick={this.createTask} className="btn-black">Save Task</button> */}
                <button type="submit"  className="btn-black primary">Add Task</button>
            </form>
                
            </>
            );
    };
}