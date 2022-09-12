import { atom, selector } from "recoil";

// selector treat output of state

export enum Types {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}
export interface IToDo {
  text: string;
  id: number;
  type: Types;
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const typeState = atom<IToDo["type"]>({
  key: "type",
  default: Types.TO_DO,
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const type = get(typeState);
    return toDos.filter((toDo) => toDo.type === type);
  },
});
