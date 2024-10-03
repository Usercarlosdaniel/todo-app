import { useState } from "react";

export default function Form({ onAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() === "") {
      return console.log("Please insert a title");
    }

    onAddTask(title)
    setTitle("");
  }

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }
  return (
    <form
      className="bg-element-color flex items-center rounded-lg"
      onSubmit={handleSubmit}
    >
      <button className="border border-solid border-text-color-2 rounded-full size-5 md:m-5 mt-4 mr-3 mb-4 ml-5">
        {" "}
      </button>
      <input
        type="text"
        placeholder="Create a new todo..."
        className="h-12 text-text-color bg-inherit w-4/5 placeholder:text-text-color-2"
        value={title}
        onChange={onChangeTitle}
        maxLength={40}
        
      />
    </form>
  );
}
