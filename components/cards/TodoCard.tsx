import { useRef, useState } from "react";
import { TodoCardProps } from "../../interfaces/CardInterface";
import DoneIcon from "../icons/DoneIcon";
import EditIcon from "../icons/EditIcon";
import TrashIcon from "../icons/TrashIcon";

const TodoCard = (props: TodoCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const editRef = useRef<any>();
  const onClickDone = () => {
    let data = props.todos;
    data[props.index].status = !props.todo.status;
    props.setTodos([...data]);
  };
  const listenEnter = addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
      editRef.current?.blur();
    }
  });
  return (
    <div
      className={`transition-all duration-300 bg-[#1d1d1d] text-white items-center justify-between flex flex-row w-full px-4 py-2 rounded-lg ${
        props.todo.status == true
          ? "border border-black"
          : "border border-white"
      }`}
    >
      {isEditing == false ? (
        <p
          className={`text-[1rem] md:text-[1.5rem] ${
            props.todo.status == true ? "opacity-50" : "opacity-100"
          }`}
        >
          {props.todo.name}
        </p>
      ) : (
        <input
          id={"todo-" + props.index}
          ref={editRef}
          onBlur={() => {
            setIsEditing(false);
          }}
          onFocus={() => {}}
          className={`text-[1rem] md:text-[1.5rem] bg-transparent ${
            props.todo.status == true ? "opacity-50" : "opacity-100"
          }`}
          defaultValue={props.todo.name}
          onChange={(e) => {
            let data = props.todos;
            data[props.index].name = e.target.value;
            props.setTodos([...data]);
          }}
        />
      )}
      <div className="flex flex-row space-x-2">
        <button
          className={` hover:text-green-400 ${
            props.todo.status == true ? "text-green-400" : "text-white"
          }`}
          onClick={onClickDone}
        >
          <DoneIcon width="24px" height="24px" />
        </button>
        <button
          className={`text-white  ${
            props.todo.status == true
              ? "opacity-50 hover:cursor-default"
              : "opacity-100 hover:text-red-400"
          }`}
        >
          <TrashIcon width="24px" height="24px" />
        </button>
        <button
          className={`text-white  ${
            props.todo.status == true
              ? "opacity-50 hover:cursor-default"
              : "opacity-100 hover:text-blue-300"
          }`}
          onClick={() => {
            setIsEditing(true);
            // editRef.current?.focus();
            setInterval(() => {
              const element = document.getElementById("todo-" + props.index);
              element?.focus();
            }, 100);
          }}
        >
          <EditIcon width="24px" height="24px" />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
