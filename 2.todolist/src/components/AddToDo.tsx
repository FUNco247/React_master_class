import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState, typeState } from "../atoms";

const FormBox = styled.form`
  text-align: center;
`;

interface IForm {
  toDo: string;
}

function AddToDo() {
  const { register, formState, handleSubmit, setValue } = useForm<IForm>();
  const setToDos = useSetRecoilState(toDoState);
  const typeOfToDo = useRecoilValue(typeState);
  const onSubmit = (data: IForm) => {
    //console.log(data);
    setToDos((current) => [
      { text: data.toDo, id: Date.now(), type: typeOfToDo },
      ...current,
    ]);
    setValue("toDo", ""); // if validation passed -> initialize input field
  };
  return (
    <FormBox onSubmit={handleSubmit(onSubmit)}>
      <h3>todos</h3>
      <input
        {...register("toDo", {
          required: "Should write here",
        })}
        placeholder="Enter your to do list"
      ></input>
      <button>Add</button>
      <br />
      {formState.errors ? formState.errors.toDo?.message : ""}
    </FormBox>
  );
}

export default AddToDo;
