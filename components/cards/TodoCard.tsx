import { TodoCardProps } from "../../interfaces/CardInterface";
import DoneIcon from "../icons/DoneIcon";
import EditIcon from "../icons/EditIcon";
import TrashIcon from "../icons/TrashIcon";

const TodoCard = (props: TodoCardProps) => {
  const onClickDone = () => {
    let data = props.todos;
    data[props.index].status = !props.todo.status;
    props.setTodos([...data]);
  };
  return (
    <div
      className={`transition-all duration-300 bg-[#1d1d1d] text-white items-center justify-between flex flex-row w-full px-4 py-2 rounded-lg ${
        props.todo.status == true
          ? "border border-black"
          : "border border-white"
      }`}
    >
      <p
        className={`text-[1rem] md:text-[1.5rem] ${
          props.todo.status == true ? "opacity-50" : "opacity-100"
        }`}
      >
        {props.todo.name}
      </p>
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
        >
          <EditIcon width="24px" height="24px" />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
