import PropTypes from "prop-types";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";
import Task from "./Task";

export default function List({
  tasks,
  onComplete,
  onDelete,
  clearCompleted,
  showAll,
  showActive,
  showCompleted,
  filterMode, // Track the active filter mode from the parent component (App)
  onDragEnd,
}) {

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks" type="list" direction="vertical">
          {(provided) => (
            <ul
              className="list-none mt-6 bg-element-color overflow-hidden text-center first:rounded-lg"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {tasks.map((task, index) => (
                <Task
                  index={index}
                  key={task.id}
                  task={task}
                  onComplete={onComplete}
                  onDelete={onDelete}
                />
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      <div className="text-text-color-2 bg-element-color flex justify-between p-4 rounded-lg mt-4 font-normal">
        <p>{tasks.filter((task) => !task.isCompleted).length} items left</p>

        <ul className="flex gap-2">
          <li>
            <Button
              text="All"
              onClick={showAll}
              isActive={filterMode === "all"} // Check if "All" is the active filter
            />
          </li>
          <li>
            <Button
              text="Active"
              onClick={showActive}
              isActive={filterMode === "active"} // Check if "Active" is the active filter
            />
          </li>
          <li>
            <Button
              text="Completed"
              onClick={showCompleted}
              isActive={filterMode === "completed"} // Check if "Completed" is the active filter
            />
          </li>
        </ul>

        <button
          onClick={clearCompleted}
          className="hover:text-text-color-hover active:text-bright-blue"
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}

const Button = ({ text, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`hover:text-text-color-hover ${
        isActive ? "text-bright-blue font-bold" : ""
      }`} // Apply different styles if the button is active
    >
      {text}
    </button>
  );
};

// PropTypes for Button Component
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired, // Track if this button is the active one
};

// PropTypes for List Component
List.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  showAll: PropTypes.func.isRequired,
  showActive: PropTypes.func.isRequired,
  showCompleted: PropTypes.func.isRequired,
  filterMode: PropTypes.string.isRequired, // Added filterMode prop to List
};
