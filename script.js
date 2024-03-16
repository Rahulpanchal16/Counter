let totalPeople = 0;
let count = 0;
const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", resetCount);
resetButton.addEventListener("dblclick", resetAllCount);

function increment() {
  count++;
  document.getElementById("count").innerText = count;
}

function decrement() {
  if (count > 0) {
    count--;
    document.getElementById("count").innerText = count;
  }
}

function resetCount() {
  totalPeople += count;
  count = 0;
  document.getElementById("count").innerText = count;
  document.getElementById("total").innerText = `Total: ${totalPeople}`;
}

function resetAllCount() {
  totalPeople = 0;
  count = 0;
  document.getElementById("count").innerText = count;
  document.getElementById("total").innerText = `Total: ${totalPeople}`;
}
