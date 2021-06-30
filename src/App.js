import React, { useState } from "react";
import "./App.css";
import LinkedList from "./Components/LinkedList";

const App = () => {
  const [inputList, setInputList] = useState([]);
  const [items, setItems] = useState([]);

  const listOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrE, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main-div">
        <div className="centre-div">
          <br />
          <h1>Linked List</h1>
          <br />
          <input
            type="file"
            id="uploadFile"
            placeholder="Add a item"
            files={inputList}
            onChange={listOfItem}
          />
          <button onClick={listOfItem}>Add</button>

          <ol>
            {items.map((itemVal, index) => {
              return (
                <LinkedList
                  key={index}
                  id={index}
                  files={itemVal}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
