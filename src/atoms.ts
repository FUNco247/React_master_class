import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: true,
}); // atom reqire two things => unique key & default value
