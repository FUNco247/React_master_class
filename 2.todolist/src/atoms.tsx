import { atom, selector } from "recoil";
// selector treat output of state
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export enum Types {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}
export interface IToDo {
  text: string;
  id: number;
  type: string;
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const typeState = atom<IToDo["type"]>({
  key: "type",
  default: Types.TO_DO,
  effects_UNSTABLE: [persistAtom],
});

export const typesState = atom<IToDo["type"][]>({
  key: "types",
  default: [Types.DOING, Types.DONE, Types.TO_DO],
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const type = get(typeState);
    return toDos.filter((toDo) => toDo.type === type);
  },
});
