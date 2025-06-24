let display = document.getElementById('display');
let currentInput = '';

function appendNumber(num) {
  currentInput += num;
  display.innerText = currentInput;
}

function appendOperator(op) {
  if (currentInput !== '' && !isNaN(currentInput.slice(-1))) {
    currentInput += op;
    display.innerText = currentInput;
  }
}

function clearDisplay() {
  currentInput = '';
  display.innerText = '0';
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  display.innerText = currentInput || '0';
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    display.innerText = currentInput;
  } catch {
    display.innerText = 'Error';
    currentInput = '';
  }
}

// Keyboard support
document.addEventListener('keydown', (e) => {
  if (!isNaN(e.key) || ['+', '-', '*', '/', '.'].includes(e.key)) {
    appendNumber(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    deleteLast();
  } else if (e.key.toLowerCase() === 'c') {
    clearDisplay();
  }
});
