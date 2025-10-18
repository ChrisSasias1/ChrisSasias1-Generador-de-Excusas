let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = ["before the class", "right on time", "when I finished", "during my lunch", "while I was praying"];

function Generadorexcusas(quien, action, que, cuando) {
  let numQuien = Math.floor(Math.random() * quien.length);
  let numAction = Math.floor(Math.random() * action.length);
  let numQue = Math.floor(Math.random() * que.length);
  let numCuando = Math.floor(Math.random() * cuando.length);

  let e = " ";

  return (
    quien[numQuien] + e + action[numAction] + e + que[numQue] + e + cuando[numCuando]
  );
}
function onLoad() {
  let excusa = document.getElementById("excusa");
  excusa.innerHTML = Generadorexcusas(who, action, what, when);
}
window.onload = onLoad;