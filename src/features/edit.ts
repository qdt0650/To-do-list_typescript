// 수정완료, 수정취소, 로컬스토리지 저장
import { newDate } from '../utilities/newDate.js'
import { readToDos } from '../utilities/storage.js'
export const edit = (editContent, parentTodo, todoText, editInput, saveToDos) => {
   editContent.addEventListener('submit', (event) => {
      event.preventDefault()
      const todoContent = parentTodo.querySelector('.todo_content')
      const todoContentId = todoContent.getAttribute('data-id')
      const editDate = todoContent.querySelector('.todo_date')
      const editMark = todoContent.querySelector('.edit_mark')

      const getTodo = readToDos()
      const dataChange = getTodo.map((data) => {
         if (data.id === Number(todoContentId)) {
            // 할 일 텍스트 컬러값을 바꿔줍니다.
            todoText.style.color = event.target[1].value

            // 날짜 및 시간을 바꿔줍니다.
            editDate.textContent = newDate()

            // 수정됨
            const editMarkChange = () => {
               if (event.target.value !== todoText.textContent) {
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
               todo: event.target[0].value,
               textColor: event.target[1].value,
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

   const cancelEditButton = editContent.querySelector('.cancle_edit_button')

   // 수정취소버튼 클릭 시 이벤트 처리
   cancelEditButton.addEventListener('click', () => {
      editInput.value = todoText.textContent
      editContent.classList.remove('active')
   })
}
