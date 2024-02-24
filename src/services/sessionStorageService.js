const getSessionItem = (itemKey) => {
  const jsonString = sessionStorage.getItem(itemKey);
  if (typeof jsonString === 'string') {
    return JSON.parse(jsonString);
  }
}

const deleteSessionItem = (itemKey) => {
  sessionStorage.removeItem(itemKey);
}

const setSessionItem = (itemKey, value) => {
  sessionStorage.setItem(itemKey, JSON.stringify(value));
}

export { getSessionItem, deleteSessionItem, setSessionItem }