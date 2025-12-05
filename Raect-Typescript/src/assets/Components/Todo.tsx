import { useState } from "react";

function Todo() {
    const [tasks, setTasks] = useState<Array<string>>([]);
    const [task, setTask] = useState<string>("");

    const handleAddTask = () => {
        setTasks([...tasks, task]); // add the task to the tasks array
        setTask(""); // clear the task input
    }

    const handleDeleteTask = (index: number) => {
        const addTask = [...tasks]; // create a copy of the tasks array
        addTask.splice(index, 1); // remove the task from the copy
        setTasks(addTask); // update the tasks array
    }

    return (
        <div className="mt-5">
            <h1>Todo app</h1>
            <div className="">
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter your task" />
                <button onClick={handleAddTask}>Add Tasks</button>
            </div>
            <div>
                <ul>
                    {tasks.map((task, index) => (
                        <><li key={index}>{task}</li><button onClick={() => handleDeleteTask(index)}>Remove</button></>
                    ))}


                </ul>
            </div>
        </div>
    )
}

export default Todo;
