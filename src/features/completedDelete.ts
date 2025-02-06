// 완료된 할 일 삭제

import { TodoItem } from '../interfaces/todoItem.js'

export const completedDelete = (saveToDos: (todos: TodoItem[]) => void, todos: TodoItem[]) => {
   // 완료삭제 버튼 요소를 가져옵니다.
   const completeTodoDeleteButton = document.querySelector('#completeTodoDeleteButton') as HTMLButtonElement

   completeTodoDeleteButton.addEventListener('click', () => {
      // 완료처리된 요소들을 모두 가져옵니다.
      const completeTodo = document.querySelectorAll('.complete')

      completeTodo.forEach((todo) => {
         // 완료처리된 요소들의 부모를 찾아 전체삭제 해줍니다.
         const completeTodoContent = todo.closest('.todo_content')

         // completeTodoContent가 null 일 수도 있다. 옵셔널체이닝 사용해서 null 타입 체크크
         completeTodoContent?.remove()

         // 로컬스토리지 데이터에서 완료처리된(true) 항목들을 제거하고 다시 저장해준다.
         todos = todos.filter((x) => x.completeButton !== true)
         saveToDos(todos)
      })
   })
}
