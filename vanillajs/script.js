document.addEventListener('DOMContentLoaded', () => {
  var userInputElement = document.querySelector(".userInput");
  var createBtnElement = document.querySelector(".createBtn");
  var todoListElement = document.querySelector(".todos");

  function addTodo() {
    var randomId = (Math.random() + 1).toString(36).substring(7);

    var checkboxElement = document.createElement("input");
    checkboxElement.setAttribute("type", "checkbox");
    checkboxElement.setAttribute("id", randomId);
  
    var todoLabel = document.createElement("label");
    todoLabel.textContent = userInputElement.value
    todoLabel.setAttribute('for', randomId);

    var todoParentElement = document.createElement('div');
    todoParentElement.appendChild(checkboxElement)
    todoParentElement.appendChild(todoLabel)
    
    todoListElement.appendChild(todoParentElement);
  }


  function resetTodo() {
    userInputElement.value = '';
  }

  createBtnElement.addEventListener("click", () => {
    if (userInputElement.value.length) {
      addTodo();
      resetTodo();
    }
  });
});