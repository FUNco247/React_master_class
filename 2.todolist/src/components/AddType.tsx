import { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { typesState } from "../atoms";

const FormBox = styled.form`
  text-align: center;
`;

function AddType() {
  const setTypes = useSetRecoilState(typesState);
  const [value, setValue] = useState<React.HTMLInputTypeAttribute>("");
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
    <FormBox onSubmit={onSubmit}>
      <h3>custom categories</h3>
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Category"
      ></input>
      <button>Add</button>
    </FormBox>
  );
}

export default AddType;
