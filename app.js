const operatorButtons = document.querySelectorAll("span.operator");
const numberButtons = document.querySelectorAll("span:not(.operator)");
const zeroButton = document.querySelector("#zero");
const equalsButton = document.querySelector("#equals");
const screen = document.querySelector("#screen");

operatorButtons[1].innerHTML = "/";
operatorButtons[2].innerHTML = "*";

numberButtons.forEach(button => button.addEventListener('click', function(){
  screen.textContent += button.textContent;
}))

function parse(str){
  return Function(`'use strict'; return (${str})`)();
}

operatorButtons.forEach(button => button.addEventListener('click', function(){
  if (button.textContent == "C"){
    screen.textContent = "";
  } else if (button.textContent == "="){
    screen.textContent = parse(screen.textContent);
  } else {
    screen.textContent += button.textContent;
  }
}))

