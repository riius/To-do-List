const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (a) {
    //toggles the button checked and unchecked//
    if (a.target.tagName === "LI") {
      a.target.classList.toggle("checked");
      saveData();
      //removes the parent element that is the LI//
    } else if (a.target.tagName === "SPAN") {
      a.target.parentElement.remove();
      saveData();
    }
  },
  false,
);
//saves the data from the task created in the to do list//
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
//it shows the task without erasing the info when ir was last seen//
function showTask() {
  listContainer.innerHTML = localstorage.getItem("data");
}
//it makes sure there are no null objects displayed//
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data") || "";
}
showTask();
