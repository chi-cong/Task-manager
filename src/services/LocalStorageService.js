const getLocalItem = (itemKey) => {
  const jsonString = localStorage.getItem(itemKey);
  if (typeof jsonString === 'string') {
    return JSON.parse(jsonString);
  }
}

const deleteLocalItem = (itemKey) => {
  localStorage.removeItem(itemKey);
}

const setLocalItem = (itemKey, value) => {
  localStorage.setItem(itemKey, JSON.stringify(value));
}

export { getLocalItem, deleteLocalItem, setLocalItem }