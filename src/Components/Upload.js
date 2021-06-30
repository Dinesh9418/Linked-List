import React, { useState } from "react";
//import App1 from "./App1.css";
import LinkedList from "./LinkedList";

export default function Upload() {
  const [items, setItems] = useState([]);

  const [image, setImage] = React.useState("");
  const imageRef = React.useRef(null);

  function useDisplayImage() {
    const [result, setResult] = React.useState("");

    function uploader(e) {
      const imageFile = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setResult(e.target.result);
      });

      reader.readAsDataURL(imageFile);
    }

    return { result, uploader };
  }

  const { result, uploader } = useDisplayImage();

  const listOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, image];
    });
    setImage("");
  };
  const deleteItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrE, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="App">
      <input
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
          uploader(e);
        }}
      />
      <div className="display">
        <button onClick={listOfItem}>Add</button>
        {result && (
          <img ref={imageRef} src={result} alt="" className="display" />
        )}
      </div>

      <div>
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
      </div>
    </div>
  );
}
