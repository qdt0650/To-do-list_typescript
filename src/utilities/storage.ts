import { TodoItem } from '../features/add'
export const saveToDos = (todo: TodoItem[]) => localStorage.setItem('todo', JSON.stringify(todo))

export const readToDos = () => {
   const getTodos = localStorage.getItem('todo')
   return getTodos ? JSON.parse(getTodos) : []
   //    return JSON.parse(localStorage.getItem('todo')) || []
}
