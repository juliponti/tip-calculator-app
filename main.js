function bill() {
  const billValue = document.getElementById("bill-input").value;
  return parseInt(billValue);
}

function peopleInput() {
  return document.getElementById("num-input");
}

function amountNum() {
  return document.getElementById("amount-num");
}

function totalNum() {
  return document.getElementById("total-num");
}

function resetBtn() {
  return document.getElementById("reset-btn");
}

// Botones de porcentajes

function percent(number) {
  const billValue = bill();
  if (billValue !== 0) {
    let result = Math.ceil((billValue * number) / 100);
    amountNum().innerText = "$" + result;
    resetBtn().disabled = false;
  } else {
    alert("invalid bill");
  }
}

// Input de porcentaje customizado

document.getElementById("custom-percent").addEventListener("keypress", customP);

function customP(e) {
  const newPercent = e.target.value;
  const billValue = bill();

  if (e.keyCode === 13 && billValue !== 0 && newPercent !== 0) {
    let result = Math.ceil((billValue * newPercent) / 100);
    amountNum().innerText = "$" + result;
  }
}

//Input número de personas

document.getElementById("num-input").addEventListener("keypress", onKeyPress);
const error = document.getElementById("error");

function onKeyPress(e) {
  let numOfPeople = e.target.value;
  const billValue = bill();
  if (e.keyCode === 13 && billValue !== 0 && numOfPeople != 0) {
    peopleInput().classList.remove("error");
    error.classList.remove("error-menssage-on");
    num = parseInt(amountNum().textContent.slice(1));
    const partialResult = Math.ceil(num / numOfPeople);
    const result = Math.ceil(bill() / numOfPeople + partialResult);

    amountNum().innerHTML = "$" + partialResult;
    totalNum().innerHTML = "$" + result;
  } else if (e.keyCode === 13 && (numOfPeople == 0 || numOfPeople == " ")) {
    peopleInput().classList.add("error");
    error.classList.add("error-menssage-on");
  }
}

// Botón de reseteo

resetBtn().addEventListener("click", reset);

function reset() {
  document.getElementById("bill-input").value = "";
  peopleInput().value = "";
  amountNum().innerHTML = "$0.00";
  totalNum().innerHTML = "$0.00";
  resetBtn().disabled = true;
}
