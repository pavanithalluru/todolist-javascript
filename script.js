window.addEventListener('load', () => {
	const form = document.querySelector("#new-todo-form");
	const input = document.querySelector("#content");
	const list_el = document.querySelector("#todo-list");
    const del_all=document.getElementById("trash");
    const upload=document.getElementById("upload_text");
    let filteredList;
    var list_todo=[];
	form.addEventListener('submit', (e) => {
		e.preventDefault();
        del_all.style.display="block";
		upload.style.display="block";

		const task = input.value;
		const task_el = document.createElement('div');
		task_el.classList.add('task');
		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');
		task_el.appendChild(task_content_el);
		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');
        list_todo.push(task_input_el.value);
		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);
            console.log("Edited element",task_actions_el.value,task_edit_el.value);
		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';
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
      console.log("Hello");
      console.log(list_todo);
		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
            console.log("Deleted list",task_input_el.value);
            filteredList = list_todo.filter(number => number !== task_input_el.value);
            console.log(filteredList);
		});
        del_all.addEventListener('click',(e)=>{
            task_el.innerHTML="";
            del_all.style.display="none";
			upload.style.display="none"

        })
        upload.addEventListener('click',(e)=>{
            var blob = new Blob(["This is a sample file content."], {
                type: "text/plain;charset=utf-8",
             });
             saveAs(blob, "download.txt");
            // console.log("List of data",list_todo.length);
            // const file = new Blob([filteredList], { type: 'text/plain;charset=utf-8' });
            // saveAs(file, "download.txt");
        })
	});
    
});
