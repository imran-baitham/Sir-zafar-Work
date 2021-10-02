const todos = [];
const todosFragment = document.createDocumentFragment();//
const $todosList = document.querySelector('.js-todos-list');//ul li list add for
const $formAddButton = document.querySelector('.js-btn-add');//add list button
const $formInput = document.querySelector('.js-form-input');//input tag form
const $formMessage = document.querySelector('.js-alert');//not click pop up
const $FilterBtnCollection = document.querySelectorAll('.js-filter-btn');//btns
let count = 0;

function resetForm() {   // Function one
  $formInput.value = '';
  // $formMessage.innerHTML = '';
  // $formMessage.classList.remove('Alert--error');
}

function setTodoStatus(event) {  // function two
  const searchId = parseInt(event.target.parentNode.dataset.id);
  const index = todos.findIndex(todo => todo.id === searchId);
  const currentTodo = todos[index]; 
  currentTodo.complete = !currentTodo.complete;
}

function createListItemNode(todo) {   // function three
  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  const label = document.createElement('label');
  const checkboxName = `checkbox-${todo.id}`;
  checkbox.id = checkboxName;
  checkbox.type = 'checkbox';
  checkbox.checked = todo.complete;
  checkbox.onclick = setTodoStatus;
  label.textContent = todo.text;
  label.setAttribute('for', checkboxName);
  listItem.setAttribute('data-id', todo.id);
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  return listItem;
}

function appendFragmentToList(todo, fragment) { //function fore
  const todoNode = createListItemNode(todo);
  fragment.appendChild(todoNode);
  $todosList.appendChild(fragment);
}

function addTodo(event) {  //function five
  event.preventDefault();
  if (!$formInput.value) {
    throw Error('Please add text in your task :)');
  }
  const todo = {
    id: count++,
    text: $formInput.value,
    complete: false
  };
  todos.push(todo);
  appendFragmentToList(todo, todosFragment);
  resetForm();
  $formInput.focus();
}

function removeAllChildNodesFrom($element) { // function six
  while($element.hasChildNodes()) {
    $element.removeChild($element.lastChild);
  }
}

function filterList(todos, fragment, filterCallback) { // function seven
  todos.filter(filterCallback)
    .forEach(filteredTodo => appendFragmentToList(filteredTodo, todosFragment));
}

/* Event Listeners */
$formAddButton.addEventListener('click', (e) => {   // function eight
  try {
    console.time("js addTodo");
    addTodo(e);
    console.timeEnd("js addTodo");
  } catch(error) {
    $formMessage.classList.add('Alert--error');
    $formMessage.innerHTML = error.message;
  }
});

$FilterBtnCollection.forEach($filterBtn => {     // function nine
  $filterBtn.addEventListener('click', (event) => {
    const filter = event.target.dataset.filter || 'all';
    removeAllChildNodesFrom($todosList);
    switch(filter) {
      case 'completed':
        filterList(todos, todosFragment, (todo) => todo.complete);
        break;
      case 'active':
        filterList(todos, todosFragment, (todo) => !todo.complete);
        break;
      default:
        filterList(todos, todosFragment, (todo) => todo);
    }
  });
});