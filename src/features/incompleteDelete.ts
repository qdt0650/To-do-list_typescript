// 단건 삭제, 다건(선택)삭제

export const incompleteDelete = (saveToDos, todos) => {
   const deleteButtons = document.querySelectorAll('.delete_buttons')
   deleteButtons.forEach((deleteButton) => {
      // 삭제버튼 클릭 시 이벤트
      deleteButton.addEventListener('click', (event) => {
         const todoContent = event.target.closest('.todo_content')
         const todoContentId = todoContent.getAttribute('data-id')

         // 로컬스토리지 id값이랑 클릭한 할 일의 id 값이랑 비교후 일치하지 않는 것들만 반환
         todos = todos.filter((itemt) => itemt.id !== Number(todoContentId))

         // 클릭한 요소를 지워준다.
         todoContent.remove()

         // 업데이트된 데이터를 로컬스토리지에 저장해준다.
         saveToDos(todos)
      })
   })

   const pickDeleteButton = document.querySelector('#pickDeleteButton')

   pickDeleteButton.addEventListener('click', () => {
      const checkboxes = document.querySelectorAll('.todo_checkboxes')
      checkboxes.forEach((x) => {
         const parentElement = x.closest('div')

         if (x.checked) {
            return parentElement.remove()
         }
      })

      const checkDeleteFilter = todos.filter((x) => x.todoCheck !== true)
      saveToDos(checkDeleteFilter)
   })
}
