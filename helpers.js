export const saveToLocalStorage = (key, arr) => {
  localStorage.setItem(key, JSON.stringify(arr));
};

export const getToLocalStorage = (key) => {
  return localStorage.getItem(key);
};
