// 단건 삭제, 다건(선택)삭제
import { TodoItem } from '../interfaces/todoItem.js'

export const incompleteDelete = (saveToDos: (todos: TodoItem[]) => void, todos: TodoItem[]) => {
   const deleteButtons = document.querySelectorAll('.delete_buttons') as NodeListOf<HTMLButtonElement>
   deleteButtons.forEach((deleteButton) => {
      // 삭제버튼 클릭 시 이벤트
      deleteButton.addEventListener('click', (event: MouseEvent) => {
         const todoContent = (event.target as HTMLElement).closest('.todo_content')
         const todoContentId = todoContent?.getAttribute('data-id')

         // 로컬스토리지 id값이랑 클릭한 할 일의 id 값이랑 비교후 일치하지 않는 것들만 반환
         if (todoContentId !== null) {
            todos = todos.filter((itemt) => itemt.id !== Number(todoContentId))
         }

         // 클릭한 요소를 지워준다.
         todoContent?.remove()

         // 업데이트된 데이터를 로컬스토리지에 저장해준다.
         saveToDos(todos)
      })
   })

   const pickDeleteButton = document.querySelector('#pickDeleteButton') as HTMLButtonElement

   pickDeleteButton.addEventListener('click', () => {
      const checkboxes = document.querySelectorAll('.todo_checkboxes') as NodeListOf<HTMLInputElement>
      checkboxes.forEach((x) => {
         const parentElement = x.closest('div') as HTMLDivElement

         if (x.checked) {
            return parentElement.remove()
         }
      })

      const checkDeleteFilter: TodoItem[] = todos.filter((x) => x.todoCheck !== true)
      saveToDos(checkDeleteFilter)
   })
}
