import { jsonLocalStorage } from "./jsonLocalStorage";

export const KEY = "like";
export const likeLocalStorage = (feedId, isLike) => {
  const obj = jsonLocalStorage.getItem(KEY) || {};
  console.log(feedId);
  //feedId를 뒤지고, isLike로 바꿔
  const newObj = { ...obj, [feedId]: isLike };
  //이후 로컬스토리지 반영
  jsonLocalStorage.setItem(KEY, newObj);
};
