window.addEventListener('load', () => {
        const form = document.querySelector("#new-task")
        const input = document.querySelector("#new-task-input")
        const list_el = document.querySelector("#tasks")

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const task = input.value
            
            const task_el = document.createElement('div')
            task_col_el.classList.add('card-body')

            const task_row_el = document.createElement('div')
            task_col_el.classList.add('row')

            const task_col_el = document.createElement('div')
            task_col_el.classList.add('col-9')

            const task_input_el = document.createElement('input')
            task_input_el.classList.add('text')
            task_input_el.type = 'text'
            task_input_el.value = task
            task_input_el.setAttribute('readonly', 'readonly')

            task_col_el.appendChild(task_input_el)
            task_row_el.appendChild(task_col_el)

            const task_coll_el = document.createElement('div')
            task_coll_el.classList.add('col-3')

            const task_actions_el = document.createElement('div')
            task_coll_el.classList.add('actions')

            const task_edit_el = document.createElement('button')
            task_edit_el.classList.add('btn btn-warning edit')
            task_edit_el.innerText = 'Edit'

            const task_delete_el = document.createElement('button')
            task_delete_el.classList.add('btn btn-danger delete')
            task_delete_el.innerText = 'Delete'

            const task_duplicate_el = document.createElement('button')
            task_delete_el.classList.add('btn btn-info duplicate')
            task_delete_el.innerText = 'Duplicate'

            task_actions_el.appendChild(task_edit_el)
            task_actions_el.appendChild(task_delete_el)
            task_actions_el.appendChild(task_duplicate_el)

            task_coll_el.appendChild(task_actions_el)
            task_row_el.appendChild(task_coll_el)
            task_el.appendChild(task_row_el)
            list_el.appendChild(task_el)

            input.value = ''

            task_edit_el.addEventListener('click', (e) => {
                if (task_edit_el.innerText.toLowerCase() == "edit") {
                    task_edit_el.innerText = "Save";
                    task_input_el.removeAttribute("readonly");
                    task_input_el.focus();
                } else {
                    task_edit_el.innerText = "Edit";
                    task_input_el.setAttribute("readonly", "readonly");
                }
            });
    
            task_delete_el.addEventListener('click', (e) => {
                list_el.removeChild(task_el);
            })
            task_duplicate_el.addEventListener('click', (e) => {
                list_el.appendChild(task_el);
            })
    })
});