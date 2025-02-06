// 수정완료, 수정취소, 로컬스토리지 저장
import { TodoItem } from '../interfaces/todoItem.js'
import { newDate } from '../utilities/newDate.js'
import { readToDos } from '../utilities/storage.js'

export const edit = (editContent: HTMLFormElement, parentTodo: HTMLLIElement, todoText: HTMLSpanElement, editInput: HTMLInputElement, saveToDos: any) => {
   editContent.addEventListener('submit', (event: SubmitEvent) => {
      event.preventDefault()
      const todoContent = parentTodo.querySelector('.todo_content') as HTMLDivElement
      const todoContentId = todoContent.getAttribute('data-id')
      const editDate = todoContent.querySelector('.todo_date') as HTMLSpanElement
      const editMark = todoContent.querySelector('.edit_mark') as HTMLSpanElement

      const getTodo = readToDos()
      const dataChange = getTodo.map((data: TodoItem) => {
         if (data.id === Number(todoContentId)) {
            const eventElementType = event.target as HTMLFormElement
            // 할 일 텍스트 컬러값을 바꿔줍니다.
            todoText.style.color = (eventElementType[1] as HTMLInputElement).value

            // 날짜 및 시간을 바꿔줍니다.
            editDate.textContent = newDate()

            // 수정됨
            const editMarkChange = () => {
               if (eventElementType.value !== todoText.textContent) {
                  editMark.style.display = 'inline-block'
                  return true
               } else {
                  //   editMark.style.display = 'none'
                  return false
               }
            }

            // 로컬스토리지 데이터를 바꿔줍니다.
            return {
               ...data,
               todo: (eventElementType[0] as HTMLInputElement).value,
               textColor: (eventElementType[1] as HTMLInputElement).value,
               todoDate: newDate(),
               editMark: editMarkChange(),
            }
         }
         return data
      })
      // 로컬스토리지에 바뀐 데이터를 저장해줍니다.
      saveToDos(dataChange)

      todoText.textContent = editInput.value
      editContent.classList.remove('active')
   })

   const cancelEditButton = editContent.querySelector('.cancle_edit_button') as HTMLButtonElement

   // 수정취소버튼 클릭 시 이벤트 처리
   cancelEditButton.addEventListener('click', () => {
      if (todoText.textContent !== null) {
         editInput.value = todoText.textContent
      }
      editContent.classList.remove('active')
   })
}
