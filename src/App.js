import { useState } from "react";

let globalID = 0;
function App() {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState("")

  function createTodo(event) {
    event.preventDefault()
    setTodos(oldTodes => {
      setTask("")
      return [...oldTodes, {todo: task, id: globalID ++ }]
    })
  }
  function deleteList(itemId){
    setTodos(oldTodes => oldTodes.filter(item => item.id !== itemId))
  }
  return (
    <>
      <div className="container my-3">
        <h3>My To Do list</h3>
        <hr />
        <form onSubmit={createTodo}>
          <input type='text' value={task} onChange={e => setTask(e.target.value)} /> &nbsp;
          <button type="submit" className="btn btn-primary">ADD</button>
        </form>
        <ol>
          {todos.map((item, index) => {
            return <div key={item.id}>
               <li>{item.todo} &nbsp;&nbsp;&nbsp;
               <button className="btn btn-danger" onClick={() => deleteList(item.id)}>Delete</button></li>
            </div>
          })}
        </ol>
      </div>
    </>
  );
}

export default App;
