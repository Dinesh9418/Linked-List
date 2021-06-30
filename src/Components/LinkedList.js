import React from "react";

const LinkedList = (props) => {
  return (
    <>
      <div>
        <button
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          delete Image
        </button>
      </div>
      <li>{props.text}</li>
    </>
  );
};

export default LinkedList;
