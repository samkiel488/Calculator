function vibrate() {
    if (navigator.vibrate) {
        navigator.vibrate(70); // Vibrate for 50 milliseconds
    }
}

function clearDisplay() {
    document.querySelector('input[name="display"]').value = '';
}

function deleteLast() {
    const display = document.querySelector('input[name="display"]');
    display.value = display.value.toString().slice(0, -1);
}

function addToDisplay(value) {
    const display = document.querySelector('input[name="display"]');
    display.value += value;
}

function calculate() {
    const display = document.querySelector('input[name="display"]');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
