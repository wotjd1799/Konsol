import { atom } from "recoil";

export const modalState = atom<true | false>({
  key: "modalState",
  default: false
})