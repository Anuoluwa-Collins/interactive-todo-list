import { useState } from "react";
import { todoAdded } from "../store/Features/todo/todoSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const AddTodoForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // Correct the typo here
    if (/^\s*$/.test(input)) {
      alert("Enter a todo");
      setInput("");
      return;
    } else {
      dispatch(
        todoAdded({
          id: nanoid(),
          name: input,
        })
      );
      setInput("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex space-x-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none
          focus:shadow-outline bg-zinc-200"
          placeholder="Add todo"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 rounded focus:outline-none focus:shadow-outline"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default AddTodoForm;
