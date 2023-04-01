import React, { useEffect, useState } from "react";

const Header = ({ setContents, contents }) => {
  const initialFormValues = { todoName: "", todoActive: true };
  const [todo, setTodo] = useState(initialFormValues);

  useEffect(() => {
    setTodo(initialFormValues);
  }, [contents]);

  const onChangeInput = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value, todoActive: true });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo.todoName === "") {
      return false;
    }
    console.log(todo);
    setContents([...contents, todo]);
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          name="todoName"
          className="new-todo"
          placeholder="What needs to be done?"
          value={todo.todoName}
          autoFocus
          onChange={onChangeInput}
        />
      </form>
    </header>
  );
};

export default Header;
