// 체크박스 선택 이벤트
export const checkboxEvent = (todos, saveToDos) => {
   const checkboxAll = document.querySelectorAll('.todo_checkboxes')

   // 모든 checkbox들에 change이벤트를 준다.
   checkboxAll.forEach((checkbox, index) => {
      checkbox.addEventListener('change', (event) => {
         checkbox.setAttribute('checked', '')
         // todo배열 index번째 todoCheck 속성을 변경된 checked값으로 바꿔준다.
         todos[index].todoCheck = event.target.checked
         // 로컬스토리지에 변경된 데이터를 저장한다.
         saveToDos(todos)
      })
   })
}
