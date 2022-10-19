import React, { useState, useRef, useMemo } from "react";

function App() {
  // Derived State
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  const inputRef = useRef();

  const filteredItems = useMemo(
    () =>
      items.filter((item) => {
        return item.toLowerCase().includes(query.toLocaleLowerCase());
      }),
    [items, query]
  );

  const onSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    if (value === "") return;
    setItems((prev) => {
      return [...prev, value];
    });
    inputRef.current.value = "";
  };

  return (
    <div className="App">
      Search:
      <br />
      <input
        value={query}
        type="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <br />
      <br />
      <form onSubmit={onSubmit}>
        New Items:
        <br />
        <input type="text" ref={inputRef} />
        <button type="submit">Add</button>
      </form>
      <h3>Items:</h3>
      {filteredItems.map((item, index) => (
        <div key="item.id">{item}</div>
      ))}
    </div>
  );
}

export default App;
