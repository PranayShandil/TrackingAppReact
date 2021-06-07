import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
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

  return (
    <div className="container">
     <Header/>
     <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
