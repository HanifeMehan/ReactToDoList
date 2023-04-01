//Retrieved data from main class
import { useState } from "react";
const Section = ({ contents, setContents, data, setData }) => {
  const [inputText, setInputText] = useState("");

  const onClickList = () => {
    setContents(
      contents.map((i) => {
        const isTodoActive = contents.some((e) => {
          return e.todoActive === false;
        });
        return isTodoActive === true
          ? { ...i, todoActive: true }
          : { ...i, todoActive: false };
      })
    );
  };

  const handClickAll = (e) => {
    e.preventDefault();
    setContents(data);
  };

  const handClickActive = (e) => {
    e.preventDefault();
    setContents(contents.filter((content) => content.todoActive === false));
  };

  const handClickCompleted = (e) => {
    e.preventDefault();
    setContents(contents.filter((content) => content.todoActive === true));
  };

  const onClear = (e) => {
    e.preventDefault();
    setContents(contents.filter((content) => content.todoActive === false));
  };

  const unCompleted = contents.filter((item) => item.todoActive === false);
//filtering done
  const filteredContents =
    inputText.length > 0
      ? contents.filter((content) =>
          content.todoName.toLowerCase().includes(inputText.toLowerCase())
        )
      : contents;

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            autoFocus
          />
        </form>
      </header>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all" onClick={onClickList}>
          Mark all as complete
        </label>
        <ul className="todo-list">
          {filteredContents.map((content, i) => (
            <li key={i} className={content.todoActive ? "completed" : ""}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={content.todoActive}
                  onChange={() => {
                    setContents(
                      contents.map((i) => {
                        return i === content
                          ? { ...i, todoActive: !i.todoActive }
                          : i;
                      })
                    );
                  }}
                />
                <label>{content.todoName}</label>
                <button
                  className="destroy"
                  onClick={() => {
                    setContents(
                      contents.filter((remove) => remove !== content)
                    );
                  }}
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <footer className="footer">
        <span className="todo-count">
          <strong>{unCompleted.length} items left</strong>
        </span>
        <ul className="filters">
          <li>
            <a
              href="#/"
              id="all"
              className={contents.todoActive === null ? "selected" : ""}
              onClick={handClickAll}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/"
              id="active"
              className={contents.todoActive === false ? "selected" : ""}
              onClick={handClickActive}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/"
              id="completed"
              className={contents.todoActive === true ? "selected" : ""}
              onClick={handClickCompleted}
            >
              Completed
            </a>
          </li>
        </ul>
        <button className="clear-completed" onClick={onClear}>
          Clear completed
        </button>
      </footer>
    </div>
  );
};

export default Section;
