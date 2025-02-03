import { TodoItem } from '../features/add'
export const createHtml = (single: TodoItem) => {
   return `
      <li class="multiple_todo" >
         <div data-id=${single.id} class = ${single.todoCheck ? 'todo_content_checked' : 'todo_content'}>
            <label for="todoCheckbox">
               <input type="checkbox" class="todo_checkboxes" ${single.todoCheck ? 'checked' : ''}/>
            </label>
            <span class="todo_text ${single.completeButton ? 'complete' : ''}"  style="color: ${single.textColor}">${single.todo} </span>
            <i class="edit_mark ${single.completeButton ? 'complete' : ''}" style="display: ${single.editMark ? 'inline-block' : 'none'}">(수정됨)</i>
            <i class="todo_date ${single.completeButton ? 'complete' : ''}">${single.todoDate}</i>
            <button type="button" class="complete_buttons" >
                <span>완료</span>
            </button>
            <button type="button" class="edit_buttons">
               <span>수정</span>
            </button>
            <button type="button" class="delete_buttons">
               <span>삭제</span>
            </button>
         </div>
         <form class="edit_content">
            <label for="editInput">
               <input type="text" class="edit_input" />
            </label>
            <label for="editTextColorChange">
               <input type="color" class="edit_text_color input_color" />
            </label>
            <button class="complete_edit_button">
               <span>수정완료</span>
            </button>
            <button type="button" class="cancle_edit_button">
               <span>수정취소</span>
            </button>
         </form>
      </li>
   `
}
