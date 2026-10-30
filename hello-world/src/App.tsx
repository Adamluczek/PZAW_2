import { useState } from "react";


function App() {
 const [tasks, setTasks] = useState<{"isDone" : boolean, "text": string}[]>([{"isDone" : true, "text": "Pozmywać naczynia"}, {"isDone" : false, "text": "Poodkurzać"}])

const [newTaskTitle, setNewTaskTitle] = useState("")
const [isShownAll, setIsShown] = useState(true)
const [isShownDone, setIsShownDone] = useState(false)
const [isShownNotDone, setIsShownNotDone] = useState(false)

function handleAddTaks(task:string){
  let newTasks = tasks.slice()
  newTasks.push({"isDone" : false, "text":task})
  setTasks(newTasks)


}
function handleChangeStatus( changedTask : {"isDone" : boolean, "text": string}){
  changedTask.isDone = !changedTask.isDone;
  let newTasks = tasks.map((task,) =>
      task.text === changedTask.text ? changedTask : task,
    );
    console.log(newTasks)
  setTasks(newTasks)
  console.log(newTasks)

}
  const tasksDone = tasks.filter((task)=> task.isDone)
  const tasksNotDone = tasks.filter((task)=> !task.isDone)

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
      <input key={index} type="checkbox" checked={task.isDone} onClick={() => handleChangeStatus(task)}/>{task.text} </div>
    ))}
    {isShownDone && (
      tasksDone.map((task, index)=>
    <div>
      <input key={index} type="checkbox" checked={task.isDone} onClick={() => handleChangeStatus( task)}/>{task.text} </div>
    )
    )}
    {isShownNotDone && (
      tasksNotDone.map((task, index)=>
    <div>
      <input key={index} type="checkbox" checked={task.isDone} onClick={() => handleChangeStatus( task)}/>{task.text} </div>
    )
    )}
    <p>Zadania do wykonania {tasksNotDone.length}</p>
    </div>
    

 )
}
export default App;
