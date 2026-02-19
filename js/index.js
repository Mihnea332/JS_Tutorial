saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
console.log(saveEl);
let count = 0;
function increment() {
  count++;
  countEl.textContent = count;
}
function save() {
  let prev = count + " - ";
  saveEl.textContent += prev;
  countEl.textContent = 0;
  count = 0;
}
