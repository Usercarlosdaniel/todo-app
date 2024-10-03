import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";

const LOCAL_STORAGE_KEY = "todo:savedTasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterMode, setFilterMode] = useState("all"); // Track the current filter mode

  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function addTask(taskTitle) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function deleteTaskById(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function handleClearCompleted() {
    const newTasks = tasks.filter((task) => !task.isCompleted);
    setTasksAndSave(newTasks);
  }

  const handleShowAll = () => setFilterMode("all");

  const handleShowActive = () => setFilterMode("active");

  const handleShowCompleted = () => setFilterMode("completed");

  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  function getFilteredTasks() {
    if (filterMode === "active") {
      return tasks.filter((task) => !task.isCompleted);
    } else if (filterMode === "completed") {
      return tasks.filter((task) => task.isCompleted);
    }
    return tasks;
  }

  function reorder(list, startIndex, endIndex) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1); // Removed one item at the startIndex
    result.splice(endIndex, 0, removed); // Insert the removed item at the endIndex

    return result;
  }
  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const newTasks = reorder(
      tasks,
      result.source.index,
      result.destination.index
    );
    setTasksAndSave(newTasks);
  }

  return (
    <>
      <Header />
      <main className="max-w-135 mx-auto pb-4 mt-[2.5rem]">
        <Form onAddTask={addTask} />
        <List
          tasks={getFilteredTasks()} // Pass the filtered tasks
          onDelete={deleteTaskById}
          onComplete={toggleTaskCompletedById}
          clearCompleted={handleClearCompleted}
          showAll={handleShowAll}
          showActive={handleShowActive}
          showCompleted={handleShowCompleted}
          filterMode={filterMode} // Pass the filter mode to List
          onDragEnd={onDragEnd}
        />
        <div className="text-center mt-12 text-text-color-2">
          <p>Drag and drop to reorder list</p>
        </div>
      </main>
    </>
  );
}

export default App;
