import logo from "./logo.svg";
import Header, { dummy } from "./Header";
import { useState, useRef } from "react";

import "./App.css";

var getRandomId = () => (Math.random() + 1).toString(36).substring(7);

function App() {
  const [todoData, setTodoData] = useState([]); // [{}, func]
  const [editTodoData, setEditTodoData] = useState({}); // [{}, func]
  const addRef = useRef();

  const resetInput = () => {
    addRef.current.value = "";
  };

  const onAddHandler = () => {
    const text = addRef.current.value;

    if (text.length === 0) {
      return;
    }

    setTodoData([...todoData, { id: getRandomId(), text: text }]);
    resetInput();
  };

  const deleteHandler = (todoId) => {
    const updatedTodoData = todoData.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodoData(updatedTodoData);
  };

  const editHandler = (todoId) => {};

  const submitHandler = (data, todoId) => {};

  console.log(todoData);

  return (
    <div className="App">
      <Header />
      <input placeholder="Buy two eggs.." ref={addRef} />
      <button onClick={onAddHandler}>Add</button>
      {editTodoData.id && (
        <p>
          <input
            placeholder="Edit here"
            value={editTodoData.text}
            onChange={(event) => {
              const updatedEditTodoData = {
                ...editTodoData,
                text: event.target.value,
              };
              setEditTodoData(updatedEditTodoData);
            }}
          />
          <button
            onClick={() => {
              const updatedTodoData = todoData.map((todo) => {
                if (todo.id === editTodoData.id) {
                  return editTodoData;
                } else {
                  return todo;
                }
              });
              setTodoData(updatedTodoData);
              setEditTodoData({});
            }}
          >
            Submit
          </button>
        </p>
      )}
      {todoData.map((todo) => {
        return (
          <div key={todo.id}>
            {todo.text}
            <button
              onClick={() => {
                setEditTodoData(todo);
              }}
            >
              edit
            </button>
            <button
              onClick={() => {
                deleteHandler(todo.id);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
