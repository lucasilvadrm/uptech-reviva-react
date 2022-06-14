import { atom } from "recoil";
import { storage } from "../pages/Home/data";
import { Product } from "../types/product";

export const postsState = atom({
  key: 'postsState',
  default: []
})

export const storageState = atom<Product[]>({
  key: 'storageState',
  default: storage
})

export const cartState = atom<Product[]>({
  key: 'cartState',
  default: []
})

export const subtotalState = atom({
  key: 'subtotalState',
  default: 0
})