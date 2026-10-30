import { useState } from "react";


function App() {
 const [tasks, setTasks] = useState([{"isDone" : true, "text": "Pozmywać naczynia"}, {"isDone" : false, "text": "Poodkurzać"}])
const[tasksDone, setDoneTasks] = useState(tasks.filter((task)=> task.isDone))
const [tasksNotDone, setNotDoneTasks] =  useState(tasks.filter((task)=> !task.isDone))
const [newTaskTitle, setNewTaskTitle] = useState("")
const [isShownAll, setIsShown] = useState(true)
const [isShownDone, setIsShownDone] = useState(false)
const [isShownNotDone, setIsShownNotDone] = useState(false)

function handleAddTaks(task:string){
  let newTasks = tasks.slice()
  newTasks.push({"isDone" : false, "text":task})
  setTasks(newTasks)
  setNotDoneTasks(newTasks.filter((task)=> !task.isDone))

}
function handleChangeStatus(index: number){
  let newTasks = tasks.slice()
  newTasks[index].isDone = !newTasks[index].isDone
  console.log(newTasks)
  console.log(tasksDone)
  console.log(tasksNotDone)
  setTasks(newTasks)
  setDoneTasks(newTasks.filter((task)=> task.isDone))
  setNotDoneTasks(newTasks.filter((task)=> !task.isDone))
}

  return(
    <div>
    <h1>TODOS</h1><br/>
    <input type="text" placeholder="Whats neeeds to be done" onChange={(e)=>{
      setNewTaskTitle(e.target.value.trim())
    }}/>
    <button onClick={()=>handleAddTaks(newTaskTitle)} disabled={newTaskTitle.length > 0 ? false:true}>+</button><br />
    <button onClick={()=>{setIsShown(true) 
      setIsShownDone(false)
      setIsShownNotDone(false)
      } }>all</button>
    <button onClick={()=>{setIsShown(false) 
      setIsShownDone(false)
      setIsShownNotDone(true)
      } }>active</button>
    <button onClick={()=>{setIsShown(false) 
      setIsShownDone(true)
      setIsShownNotDone(false)
      } }>completed</button>
    {isShownAll && (
    tasks.map((task, index)=>
    <div>
      <input key={index} type="checkbox" checked={task.isDone} onClick={() => handleChangeStatus(index)}/>{task.text} nic</div>
    ))}
    {isShownDone && (
      tasksDone.map((task, index)=>
    <div>
      <input key={index} type="checkbox" checked={task.isDone} onClick={() => handleChangeStatus(index)}/>{task.text} cos</div>
    )
    )}
    {isShownNotDone && (
      tasksNotDone.map((task, index)=>
    <div>
      <input key={index} type="checkbox" checked={task.isDone} onClick={() => handleChangeStatus(index)}/>{task.text} dupa</div>
    )
    )}
    <p>Zadania do wykonania {tasksNotDone.length}</p>
    </div>
    

 )
}
export default App;
