import { useState } from "react"


function Todoo() {

    const [tasks, setTasks] = useState([ "Task 1", "Task 2", "Task 3"])
    const [newtask , setNewtask] = useState("")

   function inpchange(event) {
    setNewtask(event.target.value)
    }
   
   
    function addTask() {
        if (newtask !== "") {
            setTasks([...tasks, newtask])
            setNewtask("")
            
        }
    }



    function deleteTask(index) {
        const newtasks = tasks.filter((task, i) => i !== index)
        setTasks(newtasks)

    }
    function Taskup(index) {
        if (index > 0) {
            const newtasks = [...tasks]
            const temp = newtasks[index]
            newtasks[index] = newtasks[index - 1]
            newtasks[index - 1] = temp
            setTasks(newtasks)
        }
       
    }
    function Taskdown (index) {
        
        if (index < tasks.length - 1) {
            const newtasks = [...tasks]
            const temp = newtasks[index]
            newtasks[index] = newtasks[index + 1]
            newtasks[index + 1] = temp
            setTasks(newtasks)
        }
        
    }



    return (
     
        <div className="to-do-list">
            <div>
            <h1>Todo List</h1>
            <input type="text" onChange={inpchange} value={newtask} />

            <button className="addbtn" onClick={addTask}>Add Task</button>

            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="deletebtn" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="taskup" onClick={() => Taskup(index)}>👆</button>
                        <button className="taskdown" onClick={() => Taskdown(index)}>👇</button>
                    </li>
                ))}

            </ol>
        </div>

       
           
    )
  }
  
  export default Todoo
  