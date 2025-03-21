import React from "react";
import "./style.css";

const InputField = () => {
  return (
    <form className="input">
      <input type="input" placeholder="Write a task" className="input__box" />
      <button className="input__submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
