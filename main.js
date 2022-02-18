const homeList = document.getElementById("homelist"); // div berisi list
let newList = document.getElementById("listname"); // textbox

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
    let listText = `<div class='list-li'>
      <div class='home-list list-text px-1' onclick='toggle(this)'> ${newList.value} </div>
      <div onclick='removeList(this)' class='bi-trash trash-ico list-del'></div>
    </div>`;
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
