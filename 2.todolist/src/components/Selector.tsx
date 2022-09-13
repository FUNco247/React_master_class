import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { IToDo, typeState, typesState } from "../atoms";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 2px white;
  border-radius: 3%;
  width: 100%;
  margin: 10px 0;
  padding: 10px 0;
  h2 {
    margin: 0;
  }
`;

const SelectBar = styled.select`
  border: none;
  border-radius: 3%;
  width: 100px;
  height: 25px;
`;

function Selector() {
  const types = useRecoilValue(typesState);
  const [type, setType] = useRecoilState(typeState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setType(event.currentTarget.value as IToDo["type"]);
  };

  return (
    <Wrapper>
      <h2>Current Category is</h2>
      <SelectBar value={type} onInput={onInput}>
        {types.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </SelectBar>
    </Wrapper>
  );
}

export default Selector;
