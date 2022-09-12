import { atom, selector } from "recoil";

// selector treat output of state
export interface IToDo {
  text: string;
  id: number;
  type: "TO_DO" | "DOING" | "DONE";
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((toDo) => toDo.type === "TO_DO"),
      toDos.filter((toDo) => toDo.type === "DOING"),
      toDos.filter((toDo) => toDo.type === "DONE"),
    ];
  },
});
