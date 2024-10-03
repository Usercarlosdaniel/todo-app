import { VscChromeClose } from "react-icons/vsc";
import { Draggable } from "@hello-pangea/dnd";
import CheckBox from "./CheckBox";
import { useState } from "react";

export default function Task({ task, onComplete, onDelete, index }) {
  const [isInvisible, setIsInvisible] = useState(false);

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="flex bg-element-color items-center border-b border-solid border-border-color justify-between cursor-pointer pr-4"
          onMouseEnter={() => setIsInvisible(true)}
          onMouseLeave={() => setIsInvisible(false)}
        >
          <CheckBox
            onChange={() => onComplete(task.id)}
            isChecked={task.isCompleted}
          />
          <label
            className={`my-4 mr-auto text-start break-words cursor-pointer text-text-color ${
              task.isCompleted ? "line-through" : ""
            }`}
          >
            {task.title}
          </label>

          <button onClick={() => onDelete(task.id)}>
            <VscChromeClose
              size="1.25rem"
              className={`text-text-color-2 hover:text-text-color-hover hover:scale-[1.2] ${
                isInvisible ? "block" : "hidden"
              }`}
            />
          </button>
        </li>
      )}
    </Draggable>
  );
}
