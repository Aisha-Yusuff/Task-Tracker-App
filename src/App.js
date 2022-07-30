import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { AddTask } from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(
    () => {
      // fetch API with async await
      const fetchTasks = async () => {
        // fetch returns a promise
        const res = await fetch("http://localhost:5000/tasks");
        const data = await res.json();
        console.log(data);
      };
      // call fetchTasks when page loads
      fetchTasks();
    },
    // add dependency value here
    []
  );

  // Add Task Function
  const addTask = (task) => {
    console.log(task);
  };

  // Delete Task Function
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reeminder Function
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
};

export default App;
