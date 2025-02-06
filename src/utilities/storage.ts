import { TodoItem } from '../interfaces/todoItem.js'

export const saveToDos = (todo: TodoItem[]): void => localStorage.setItem('todo', JSON.stringify(todo))

export const readToDos = (): TodoItem[] => {
   const getTodos = localStorage.getItem('todo')
   return getTodos ? JSON.parse(getTodos) : []
   //    return JSON.parse(localStorage.getItem('todo')) || []
}
