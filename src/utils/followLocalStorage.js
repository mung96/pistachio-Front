import { jsonLocalStorage } from "./jsonLocalStorage";

export const KEY = "follow";
export const followLocalStorage = (userId, isFollow) => {
  const obj = jsonLocalStorage.getItem(KEY) || {};
  //feedId를 뒤지고, isLike로 바꿔
  const newObj = { ...obj, [userId]: isFollow };
  //이후 로컬스토리지 반영
  jsonLocalStorage.setItem(KEY, newObj);
};
