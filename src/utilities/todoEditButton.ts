// 할 일 수정버튼 클릭 이벤트
import { edit } from '../features/edit.js'
import { TodoItem } from '../interfaces/todoItem.js'
export const todoEditButton = (saveToDos: (todos: TodoItem[]) => void) => {
   const multipleTodoLi = document.querySelectorAll('.multiple_todo') as NodeListOf<HTMLButtonElement>

   const handleEdit = (event: Event) => {
      event.preventDefault()

      // 클릭한 버튼의 부모요소 가져옵니다.
      const parentTodo = (event.target as HTMLElement).closest('.multiple_todo') as HTMLLIElement

      // 할 일 text 요소를 가져옵니다.
      const todoText = parentTodo.querySelector('.todo_text') as HTMLSpanElement

      // 클릭한 버튼의 수정html 가져옵니다.
      const editContent = parentTodo.querySelector('.edit_content') as HTMLFormElement

      // 수정 input 가져옵니다.
      const editInput = editContent.querySelector('.edit_input') as HTMLInputElement

      // 수정input의 기본값으로 등록한 할 일을 넣어줍니다.
      editInput.value = todoText.textContent || ''

      // active클래스를 추가해서 toggle 기능 구현해줍니다.
      editContent.classList.toggle('active')

      edit(editContent, parentTodo, todoText, editInput, saveToDos)
   }

   multipleTodoLi.forEach((li) => {
      const todoEditButtons = li.querySelectorAll('.edit_buttons') as NodeListOf<HTMLButtonElement>
      todoEditButtons.forEach((button) => {
         button.addEventListener('click', handleEdit)
      })
   })
}
