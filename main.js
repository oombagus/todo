const homeList = document.getElementById("homelist");
let newList = document.getElementById("listname");

newList.addEventListener("keyup", function (event) {
  if (event.keyCode === 13 && newList.value != "") {
    event.preventDefault();
    document.getElementById("button-create").click();
    clearTextbox();
  }
});

function clearTextbox() {
  // empty textbox
  newList.value = "";
}

function create() {
  // add new list to ul
  if (newList.value != "") {
    let listText = "<li class='home-list px-1'><span onclick='toggle(this)'>" + newList.value + "</span><span onclick='removeList(this)' class='bi-trash trash-ico'></span></li>";
    homeList.insertAdjacentHTML("afterbegin", listText);
    clearTextbox();
  }
}

function toggle(el) {
  el.classList.toggle("done");
}

function removeList(el) {
  el.parentElement.remove();
}
