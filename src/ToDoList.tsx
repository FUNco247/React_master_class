import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";
interface IForm {
  toDo: string;
}

interface IToDo {
  text: string;
  id: number;
  type: "TO_DO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

function ToDoList() {
  /** these two line can be replaced below "useRecoilState hook"
   * const value = useRecoilValue(toDoState);
   * const setValue = useSetRecoilState(toDoState);
   */
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, formState, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = (data: IForm) => {
    //console.log(data);
    setToDos((current) => [
      { text: data.toDo, id: Date.now(), type: "TO_DO" },
      ...current,
    ]);
    setValue("toDo", ""); // if validation passed -> initialize input field
  };
  //console.log(formState.errors);
  //console.log(watch());
  console.log(toDos);
  return (
    <div>
      <h1>오늘의 할 일</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", {
            required: "Should write here",
          })}
          placeholder="Enter your to do list"
        ></input>
        <button>Add</button>
        <ul>
          {toDos
            ? toDos.map((toDo) => (
                <li key={toDo.id} className={toDo.type}>
                  {toDo.text}
                </li>
              ))
            : ""}
        </ul>
        <br />
        {formState.errors ? formState.errors.toDo?.message : ""}
      </form>
    </div>
  );
}

export default ToDoList;
