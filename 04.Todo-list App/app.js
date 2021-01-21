// Select Elements
var clearBtn = document.querySelector('.clearStorage');
//console.log(clearBtn)
var dateItem = document.querySelector('.date');
// console.log(dateI);
var itemsList = document.querySelector('#list');
// console.log(input)
const input = document.querySelector('#add-item');


// Getting some Classe
let check = "fa-check-circle";
let unCheck = "fa-circle";
let line = "lineThrough";

// VARIABLES 
let list = [];
let id = 0;

// get Items from local Storage
let data = localStorage.getItem("TODO");

// check if something in data

if (data) {
    list = JSON.parse(data)
    id = list.id;
    loadList(list)
}
else {
    list = [];
}

// Load Items from Local Storage
function loadList(array) {
    array.forEach(function (item) {
        addTodo(item.name, item.id, item.done, item.trash)
    })
}

// Clearing Local Storage

clearBtn.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
})

// Displaying To Day's Date:
let date = new Date();
const p = document.createElement("p");
const text = document.createTextNode(dateMaker(date));
p.appendChild(text)
dateItem.appendChild(p);

// DateMaker Function
function dateMaker(d) {
    //months Array
    let months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"]

    // getting months using date function 
    let month = months[d.getMonth()]

    // getting date using date function 
    let date = d.getDate()

    // getting year using date function 
    let year = d.getFullYear()

    return ` ${date} ${month},${year}`
}



// Add TO DO IN THE List 

document.addEventListener('keyup', function (event) {
    if (event.keyCode == 13) {
        const todo = input.value;
        if (todo) {
            addTodo(todo, 1, false, false);
            list.push({
                name: todo,
                id: id,
                done: false,
                trash: false
            })
            id++;
            localStorage.setItem("TODO", JSON.stringify(list))
        }
        input.value = "";
    }

})

// ADD todo Function

function addTodo(todo, id, done, trash) {

    if (trash) {
        return;
    }
    const doneJob = done ? check : unCheck;
    const lineThrough = done ? line : "";
    items = `<li class="item">
    <i class="far ${doneJob} complete" job="complete" id="${id}"></i>
    <p class="text ${lineThrough}">${todo}</p>
    <i class="fas fa-trash delete" job="delete" id="${id}"></i>
</li>`;
    itemsList.insertAdjacentHTML("beforeend", items)

}

// Complete TODO 

function completeTodo(element) {
    element.classList.toggle(check);
    element.classList.toggle(unCheck);
    element.parentNode.querySelector(".text").classList.toggle(line);

    list[element.id].done = list[element.id].done ? false : true;
}

// remove todo 

function removeTodo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    list[element.id].trash = true;
}

// target the items dynamically

itemsList.addEventListener("click", function (event) {
    const element = event.target
    const elementJob = element.attributes.job.value;
    if (elementJob == "complete") {
        completeTodo(element)
    }
    else if (elementJob == "delete") {
        removeTodo(element)
    }
    localStorage.setItem("TODO", JSON.stringify(list))
})