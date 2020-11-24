export const saveTaskToLocalStorage = (task) => {
  localStorage.setItem("tasks", JSON.stringify(task));
};

export const getTaskFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("tasks"));
};
