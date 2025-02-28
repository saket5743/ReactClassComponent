import React, { useState } from "react";

const Task = () => {
  const [inputValue, setInputValue] = useState({ name: "", description: "" });
  const [tasks, setTasks] = useState({
    Pending: [],
    InProgress: [],
    OnHold: [],
    Completed: [],
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = async () => {
    const { name, description } = inputValue;
    if (!name.trim() || !description.trim()) {
      alert("Both fields are required.");
      return;
    }

    const userID = localStorage.getItem("id");
    if (!userID) {
      alert("User ID not found.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5454/api/v1/task/createTask/${userID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputValue),
      });

      const data = await response.json();

      if (data.success) {
        setTasks((prevTasks) => ({
          ...prevTasks,
          Pending: [...prevTasks.Pending, inputValue],
        }));
        setInputValue({ name: "", description: "" });
        const TaskID = data?.data?.taskId
        localStorage.setItem('taskId', TaskID)
        console.log(TaskID)
        const TaskStatus = data?.data?.status 
        localStorage.setItem('taskStatus', TaskStatus)
      } else {
        alert("Failed to create task.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating the task.");
    }
  };

  const taskStages = [
    { title: "Pending", key: "Pending", next: "InProgress" },
    { title: "In Progress", key: "InProgress", next: "Completed", hold: "OnHold" },
    { title: "On Hold", key: "OnHold", next: "InProgress" },
    { title: "Completed", key: "Completed" },
  ];

  const handleMove = async(from, to, index) => {
    setTasks((prevTasks) => {
      const task = prevTasks[from][index];
      return {
        ...prevTasks,
        [from]: prevTasks[from].filter((_, i) => i !== index),
        [to]: [...prevTasks[to], task],
      };
    });

    const taskID = localStorage.getItem('taskId');
    console.log(taskID, "dssdssssdsss")
    const taskStatus = localStorage.getItem('taskStatus');
    console.log(taskStatus, 'sfdskfshkhsdfh')
    if (!taskID) {
      alert("Task ID not found.");
      return;
    }
    try {
      
      const response = await fetch(`http://localhost:5454/api/v1/task/updateTask/${taskID}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status:to }),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const updatedTask = await response.json();
      console.log(updatedTask, 'uppkj;')
      
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  
  return (
    <div className="bg-blue-200 min-h-screen gap-5 p-12">
      <div className="bg-white w-96 h-auto rounded-lg m-auto p-6">
        <h1 className="text-center font-bold text-lg">ADD TASK</h1>
        <input
          type="text"
          placeholder="Task Name"
          name="name"
          value={inputValue.name}
          onChange={handleInput}
          className="border-2 p-2 rounded-lg w-full mt-4"
        />
        <input
          type="text"
          placeholder="Task Description"
          name="description"
          value={inputValue.description}
          onChange={handleInput}
          className="border-2 p-2 rounded-lg w-full mt-4"
        />
        <button
          className="bg-red-500 rounded-lg px-4 py-2 text-white w-full mt-4"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-10">
        {taskStages.map(({ title, key, next, hold }) => (
          <div key={key} className="bg-white rounded-lg shadow-md p-4 h-64 overflow-y-auto">
            <h2 className="text-lg font-semibold text-center mb-2">{title}</h2>
            
            {tasks[key].map((task, index) => (
              <div key={index} className="p-2 border-b flex justify-between items-center">
                <div>
                  <p className="font-bold">{task.name}</p>
                  <p className="text-sm text-gray-500">{task.description}</p>
                </div>
                <div className="space-x-2">
                  {next && (
                    <button
                      className="bg-yellow-500 text-white px-2 py-1 rounded"
                      onClick={() => handleMove(key, next, index)}
                    >
                      Next
                    </button>
                  )}
                  {hold && (
                    <button
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                      onClick={() => handleMove(key, hold, index)}
                    >
                      Hold
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;



