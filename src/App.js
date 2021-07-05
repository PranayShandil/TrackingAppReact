import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'July 6th 15:00',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting with Clients',
        day: 'July 7th 15:00',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'July 8th 15:00',
        reminder: false,
    },

])

//Delete Task
const deleteTask = (id) =>{
  // console.log('delete', id)
  setTasks(tasks.filter((task) => task.id !== id))  
}

const addTask = (task) => {
  const id =Math.floor(Math.random() *10000) +1
  const newTask={id, ...task}
  setTasks([...tasks, newTask])
  }

//Toggle Reminder
const toggleReminder = (id) => {
  // console.log(id)
  setTasks(
    tasks.map((task) => task.id === id ?{...task, reminder :
       !task.reminder }: task
       )
    )
}

  return (
    <div className="container">
     <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask &&<AddTasks onAdd={addTask} />}
     {tasks.length>0?
       <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder}/>: 'No Task to Show'
      }
    </div>
  );
}

export default App;
