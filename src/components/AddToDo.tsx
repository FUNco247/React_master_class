import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

function AddToDo() {
  const { register, formState, handleSubmit, setValue } = useForm<IForm>();
  const setToDos = useSetRecoilState(toDoState);
  const onSubmit = (data: IForm) => {
    //console.log(data);
    setToDos((current) => [
      { text: data.toDo, id: Date.now(), type: "TO_DO" },
      ...current,
    ]);
    setValue("toDo", ""); // if validation passed -> initialize input field
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("toDo", {
          required: "Should write here",
        })}
        placeholder="Enter your to do list"
      ></input>
      <button>Add</button>
      <br />
      {formState.errors ? formState.errors.toDo?.message : ""}
    </form>
  );
}

export default AddToDo;
