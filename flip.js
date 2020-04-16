var display = document.querySelector("#display");
var button = document.querySelector("#flipbutton");
var counter = document.querySelector("#counter");
var count = 0;
var limit = 100;
var over = false;

var mybody = document.querySelector("body");
var toggler = document.querySelector("#toggler");
toggler.addEventListener("click", function () {
  mybody.classList.toggle("dark");
});
button.addEventListener("click", coinflip);
function coinflip() {
  if (!over) {
    var output = Math.ceil(Math.random() * 2);
    if (output === 1) {
      display.textContent = "Heads!";
      count++;
      if (count < limit) {
        counter.textContent = count;
      } else {
        counter.textContent = "Counter has stoped, Reset page!";
      }

      if (count === limit) over = true;
    } else {
      display.textContent = "Tails!";
      count++;
      if (count < limit) {
        counter.textContent = count;
      } else {
        counter.textContent = "Counter has stoped, Reset page!";
      }

      if (count === limit) over = true;
    }
  }
}
