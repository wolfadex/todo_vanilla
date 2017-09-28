
function startTodo() {
  let listEl = document.getElementsByTagName('ul')[0];
  let inputEl = document.getElementById('itemToAdd');
  let buttonEl = document.getElementById('addButton');

inputEl.addEventListener('input', function(e){
  if (e.target.value === '') {
    buttonEl.setAttribute('disabled', true);
  } else {
    buttonEl.removeAttribute('disabled');
  }
})


function FuckYou() {
  addItem(inputEl.value);
  inputEl.value = '';
}
  buttonEl.addEventListener('click', FuckYou);
  inputEl.addEventListener('keydown', function(e){
    if(e.keyCode === 13){
      FuckYou();
    }
  })
}






function addItem(text) {
  let listEl = document.getElementsByTagName('ul')[0];
  let newTodo = document.createElement('li');
  let span = document.createElement('span');
  let closeButton = document.createElement('i');
  span.innerText = text;
  newTodo.appendChild(span);
  newTodo.appendChild(closeButton);
  closeButton.innerText = 'X';
  listEl.appendChild(newTodo);
  closeButton.addEventListener('click', function(e){
    listEl.removeChild(newTodo);
  });
  span.addEventListener('click', function(){
  span.classList.add('todo-list__item--completed'); 
});
}






















function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(startTodo);
