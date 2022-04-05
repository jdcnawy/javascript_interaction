let button1 = document.getElementById("button1");
let outputElement = document.getElementById("output_text");
let inputElement = document.getElementById("my_input");
let tastes = ["  is scrumptious", " has a very sophisticated flavor profile", "  contains lots of love!", "  sets my mouth on fire...", "  makes my face twist(it's sour.)"];
document.addEventListener("DOMContentLoaded", function(){
  button1 = document.getElementById("button1");
  outputElement = document.getElementById("output_text");
  inputElement = document.getElementById("my_input");
  button1.addEventListener("click", function(){ generate();
  });

});
function generate(){
  let input_text = inputElement.value;
  let tastesIndex = Math.floor(Math.random()*tastes.length);
  outputElement.innerText = input_text  + tastes[tastesIndex];
  restyle();
}
function restyle() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  let color_string = "rgb(" + r + "," + g + "," + b + ")";
  outputElement.style.color = color_string;
  document.getElementById("output_text").style.fontSize = Math.floor((Math.random() * 100) + 1)+"px";

  let rBG = Math.random() * 255;
  let gBG = Math.random() * 255;
  let bBG = Math.random() * 255;
  let color_stringBG = "rgb(" + rBG + "," + gBG + "," + bBG + ")";
  outputElement.style.backgroundColor = color_stringBG;
}
