import React from "react";
import "./style.css";
import { Todo } from "../models/model";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { IoIosDoneAll } from "react-icons/io";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="todos__single">
      <span className="todos__single--text">{todo.todo}</span>
      <div>
        <span className="icon">
          <CiEdit />
        </span>
        <span className="icon">
          <MdDeleteForever />
        </span>
        <span className="icon">
          <IoIosDoneAll />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
