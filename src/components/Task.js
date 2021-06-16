import React from 'react';
import axios from 'axios';
export default class Task extends React.Component {
    
   
   

    parseDate = (date, val) => {
            if(val === 1)
            return date.getMonth() < 10 ?  (date.getMonth() + 1) : (date.getMonth() + 1);
            else if(val ===2)
            return date.getDate() < 10 ? '0'+date.getDate() : date.getDate();
            
    }

    editTask = async () => {
        // console.log(this.props.task);
        const decision = parseInt(prompt("Enter 1 to change task or Enter 2 to change date"));
        let newTask, finalDate;
        if( decision === 1 ){
           newTask = prompt("Enter New Task");
        //    console.log(newTask);
           this.props.task.task = newTask;
        //    console.log(this.props.task.task);
           const res = await axios.put("http://localhost:8080/tasks/edittask", this.props.task);
        //    console.log(res.data);
           this.props.setTasks(res.data);
        }   else if(decision === 2){
                const newDate = prompt("Enter New Date in format YYYY-MM-DD");
                    if(newDate ){
                        // eslint-disable-next-line no-useless-escape
                        var dateformat = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
                        if(newDate.match(dateformat)){
                            let date = new Date(newDate);
                            finalDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
                            finalDate = `${date.getFullYear()}-${this.parseDate(date,1)}-${this.parseDate(date,2)}`;
                            // console.log(date.getDate() < 10 ? '0'+date.getDate() : date.getDate());
                            console.log(finalDate );
                            this.props.task.date = finalDate;
                            // console.log(this.props.task.task);
                            // console.log(this.parseDate(date, 2));
                            const res = await axios.put("http://localhost:8080/tasks/edittask", this.props.task);
                            // console.log(Date.parse(newDate));
                            this.props.setTasks(res.data);
                        }else
                        alert("Enter valid data");
            }
        }else{
            // console.log("try again");
           alert("Please enter a number between 1 and 2 , Try Again");
        }

        

    }

    render(){
        const {task, date} = this.props.task;
        return (
            <div className="task">
                <div>
                    <span className="work">
                        Task : {task}  
                    </span>
                    <span className="time">
                        Date : {date}
                    </span>
                </div>
                <div className="flex-task-btn">
                    <button onClick={this.editTask} className="btn edit"><i className="fas fa-pen-square fa-2x"></i></button>
                    <button onClick={() => this.props.deleteTask(this.props.index)} className="btn "><i className="fas fa-times-circle fa-2x"></i></button>
            </div>
            </div>
        );
    }
}