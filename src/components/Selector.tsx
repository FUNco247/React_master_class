import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { IToDo, typeState, typesState } from "../atoms";

function Selector() {
  const [types, setTypes] = useRecoilState(typesState);
  const [type, setType] = useRecoilState(typeState);
  const [value, setValue] = useState<React.HTMLInputTypeAttribute>("");
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setType(event.currentTarget.value as IToDo["type"]);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newType = value;
    setTypes((current) => {
      //console.log(current, newType);
      return [...current, newType];
    });
  };
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="Enter your category"
        ></input>
        <button>Add</button>
      </form>
      <select value={type} onInput={onInput}>
        {types.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
    </>
  );
}

export default Selector;
