import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

function ToDoList() {
  const { register, watch, formState, handleSubmit, setValue } =
    useForm<IForm>();
  const onSubmit = (data: IForm) => {
    //console.log(data);
    setValue("toDo", ""); // if validation passed -> initialize input field
  };
  //console.log(formState.errors);
  //console.log(watch());
  return (
    <div>
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
    </div>
  );
}

export default ToDoList;
