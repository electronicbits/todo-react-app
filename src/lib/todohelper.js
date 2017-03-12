export const addTodo = (list, item) => {
  var result = list.concat(item);
  return result;
}

export const generateId = () => Math.floor(Math.random()*100000)

//a valid replacement, however not readable at all
// export const addTodo = (list, item) => [...list, item]
