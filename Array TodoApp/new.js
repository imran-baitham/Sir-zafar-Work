const list = [];
const inp = document.getElementById("inp");
const btn = document.getElementById("btn");

const clear = document.getElementById("clear");
const todolist = document.getElementById("todolist");

// for show the user value
btn.addEventListener("click", function (event) {
	event.preventDefault();
	if (inp.value) {
		list.push(inp.value);
	}
	inp.value = "";
	showlist();
});
// for create Array & input in li list
function showlist() {
	todolist.innerHTML = "";
	list.forEach(function (n, i) {
		todolist.innerHTML += `<li>  ${n}<div onclick ='deleteitems(${i})'> X</div><div onclick ='edititem(${i})'>Edit</div> </li>`;
	});
}

// create close button
function deleteitems(i) {
	list.splice(i, 1)
	showlist()
}


// edit the li of list 
function edititem(i) {
	const newValue = prompt('Please insert your new value')
	list.splice(i, 1, newValue)
	showlist()

}

// for remove list task from li
clear.addEventListener("click", function (e) {
	if (list.length) {
		list.splice(0, list.length)
		showlist()
	}
});


// direcat by muhammad imran

