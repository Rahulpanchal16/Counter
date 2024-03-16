let totalPeople = 0;
let count = 0;

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

function reset() {
  totalPeople += count;
  console.log(totalPeople);
  count = 0;
  document.getElementById("count").innerText = count;
  document.getElementById(
    "total"
  ).innerText = `Total People Entered: ${totalPeople}`;
}
