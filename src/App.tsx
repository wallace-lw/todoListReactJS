import React, { FC, useState, ChangeEvent } from 'react';
import './App.css';
import TodoTask from './Components/TodoTask';
import { ITask } from './Interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'

const App: FC = () =>  {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "task"){
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    };
  };

  const addTask = (): void =>{
    const newTask = {taskName: task, deadline: deadline};
    setTodoList([...todoList, newTask])
    setTask("");
    setDeadline(0);
  };


  const handleSubmit = (e: { key: any; }): void =>{
    if (e.key === 'Enter'){
      addTask();
    }
}

  const completeTask = (taskNameDelete: string): void =>{

    setTodoList(todoList.filter((task)=>{
      return task.taskName != taskNameDelete;
    }))

  };

  return (
    <div className="App">
        <h1>TO-DO LIST</h1>
        <p>with React.JS</p>
      <div className="header">
        
        <div className="inputContainer">
          <input 
            type="text" 
            placeholder='Task...' 
            onChange={handleChange} 
            name="task"
            value={task}
            onKeyPress={handleSubmit}
            />
          <input 
            type="number" 
            placeholder='Deadline(in Days)...' 
            name='deadline'
            value={deadline}
            onChange={handleChange} 
            onKeyPress={handleSubmit}
            min={0}
            />
        </div>
        <button onClick={addTask} type="submit"><FontAwesomeIcon icon={faCalendarPlus} /></button>
      </div>
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask completeTask={completeTask} key={key} task={task} />;
        })}
      </div>
    </div>
  );
}

export default App;
