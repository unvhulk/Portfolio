let todoItems = [];

function addTodo(text) {
	const todo = {
		text,
		checked: false,
		id: Date.now(),
	};

	todoItems.push(todo);
	renderTodo(todo);
	console.log(todoItems);
}

const todoList = document.querySelector(".todoList");
const formNode = document.createElement("form");
const inputNode = document.createElement("input");
const listNode = document.querySelector(".js-todo-list");

todoList.append(formNode);
todoList.append(listNode);
formNode.append(inputNode);

formNode.addEventListener("submit", (event) => {
	event.preventDefault();

	const text = inputNode.value.trim();
	if (text != "") {
		addTodo(text);
		inputNode.value = "";
		inputNode.focus();
	}
});

function renderTodo(todo) {
	const isChecked = todo.checked ? "done" : "";
	const liNode = document.createElement("li");
	const item = document.querySelector(`[data-key='${todo.id}']`);

	liNode.setAttribute(`class`, `todo-item ${isChecked}`);
	liNode.setAttribute(`data-key`, todo.id);

	liNode.innerHTML = `
    <input id="${todo.id}" type='checkbox'/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class='delete-todo'> X </button>
    `;
	if (item) {
		listNode.replaceChild(liNode, item);
	} else listNode.append(liNode);
}

listNode.addEventListener("click", (event) => {
	console.log(listNode.classList);
	if (event.target.classList.contains("js-tick")) {
		const itemKey = event.target.parentElement.dataset.key;
		toggleDone(itemKey);
	}
});

function toggleDone(key) {
	const index = todoItems.findIndex((item) => item.id === Number(key));
	todoItems[index].checked = !todoItems[index].checked;
	console.log(todoItems[index]);
	renderTodo(todoItems[index]);
}
