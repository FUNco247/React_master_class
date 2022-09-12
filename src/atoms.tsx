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

export const typeState = atom<IToDo["type"]>({
  key: "type",
  default: "TO_DO",
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const type = get(typeState);
    return toDos.filter((toDo) => toDo.type === type);
  },
});
