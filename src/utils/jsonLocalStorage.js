export const jsonLocalStorage = {
  getItem: (key) => JSON.parse(localStorage.getItem(key)),
  setItem: (key, item) => localStorage.setItem(key, JSON.stringify(item)),
};
