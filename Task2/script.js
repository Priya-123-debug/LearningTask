
// function render() {
//     list.innerHTML = "";

//     todos.forEach(todo => {

//         const li = document.createElement("li");

//         const span = document.createElement("span");
//         span.textContent = todo.text;

//         if (todo.completed) {
//             li.classList.add("completed");
//         }

//         // delete button
//         const delbtn = document.createElement("button");
//         delbtn.textContent = "Delete";

//         delbtn.addEventListener("click", function () {
//             todos = todos.filter(t => t.id !== todo.id);
//             render();
//         });

//         // edit button
//         const editbtn = document.createElement("button");
//         editbtn.textContent = "Edit";

//         editbtn.addEventListener("click", function () {
//             input.value = todo.text;

//             todos = todos.filter(t => t.id !== todo.id);
//             render();
//         });

//         // toggle complete
//         span.addEventListener("click", function () {
//             todo.completed = !todo.completed;
//             render();
//         });

//         li.appendChild(span);
//         li.appendChild(delbtn);
//         li.appendChild(editbtn);

//         list.appendChild(li);
//     });
// }
// addBtn.addEventListener("click",function(){
// 	const value=input.value.trim();
// 	if(value=="") return;
// 	todos.push({
// 		id:id++,
// 		text:value,
// 		completed:false,
// 	});
// 	input.value="";
// 	render();

// })
const input = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#todoList");

// array state
let todos = [];
let id = 0;

// ADD TODO
addBtn.addEventListener("click", function () {

    const value = input.value.trim();
    if (value === "") return;

    todos.push({
        id: id++,
        text: value,
        completed: false
    });

    input.value = "";
    render();
});


// RENDER FUNCTION
function render() {

    list.innerHTML = "";

    todos.forEach(todo => {

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = todo.text;
        span.dataset.action = "toggle";
        span.dataset.id = todo.id;

        if (todo.completed) {
            li.classList.add("completed");
        }

        const delbtn = document.createElement("button");
        delbtn.textContent = "Delete";
        delbtn.dataset.action = "delete";
        delbtn.dataset.id = todo.id;

        const editbtn = document.createElement("button");
        editbtn.textContent = "Edit";
        editbtn.dataset.action = "edit";
        editbtn.dataset.id = todo.id;

        li.appendChild(span);
        li.appendChild(delbtn);
        li.appendChild(editbtn);

        list.appendChild(li);
    });
}


// EVENT DELEGATION (ONLY ONE LISTENER)
list.addEventListener("click", function (e) {

    const action = e.target.dataset.action;
    const id = Number(e.target.dataset.id);

    if (!action) return;

    // DELETE
    if (action === "delete") {
        todos = todos.filter(todo => todo.id !== id);
        render();
    }

    // EDIT
    if (action === "edit") {
        const todo = todos.find(t => t.id === id);
        input.value = todo.text;

        todos = todos.filter(todo => todo.id !== id);
        render();
    }

    // TOGGLE COMPLETE
    if (action === "toggle") {
        const todo = todos.find(t => t.id === id);
        todo.completed = !todo.completed;
        render();
    }
});