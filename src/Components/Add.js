import React, { useState } from "react";
import App1 from "./App1.css";
import LinkedList from "./LinkedList";

export default function Upload() {
  const [inputList, setInputList] = useState([""]);

  const [image, setImage] = React.useState("");
  const imageRef = React.useRef(null);

  function useDisplayImage() {
    const [result, setResult] = React.useState("");

    function uploader(e) {
      const imageFile = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setResult(e.target.result);
        const newList = inputList.concat(e.target.result);

        setInputList(newList);
      });

      reader.readAsDataURL(imageFile);
    }
    console.log(inputList);

    return { result, uploader };
  }

  const deleteImg = () => {
    if (inputList.length !== 0) {
      const newList = inputList.splice(1, inputList.length - 1);
      setInputList(newList);
    } else {
      const newList = inputList;
      setInputList(newList);
    }
  };
  /* const deleteImg = (id) => {
    setItems((oldItems) => {
      return oldItems.map((arrE, index) => {
        return index !== id;
      });
    });
  }; */
  const { result, uploader } = useDisplayImage();

  return (
    <div className="Add">
      <input
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
          uploader(e);
        }}
        className="app-input"
      />
      <div className="display">
        <p> Add File : </p>
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
            uploader(e);
          }}
        />
        {/* <button className="del-button" onClick={deleteImg}>
          Delete Image
        </button> */}
        {inputList.map((item, index) => {
          return (
            <div>
              <LinkedList
                key={index}
                id={index}
                files={item}
                onSelect={deleteImg}
              />
              <div className="images-class">
                <img src={item} alt="img" className="display-img" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
