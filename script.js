function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculateResult() {
  let display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}
document.getElementById("equal").addEventListener("click", calculateResult);
document.getElementById("clear").addEventListener("click", clearDisplay);
