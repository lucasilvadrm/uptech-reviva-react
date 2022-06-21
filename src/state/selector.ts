import { selector } from "recoil";
import { storageState } from "./atom";

export const RandomProductListState = selector({
  key: 'RandomProductListState',
  get: ({get}) => {
    const products = get(storageState);
    return [...products].sort(()=> Math.random() - 0.5).slice(0, 4);
  },
});