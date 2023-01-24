const form = document.querySelector("form");

// Storage
function StoreList() {
  window.localStorage.todoList = list.innerHTML;
}

function getTodo() {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li>Cliquez sur un todo pour le supprimer</li>`;
  }
}

window.addEventListener("load", getTodo);
getTodo();

// add éléments
form.addEventListener("submit", (e) => {
  e.preventDefault();

  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  StoreList();
});

// Remove éléments
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  StoreList();
});
