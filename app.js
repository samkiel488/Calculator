function vibrate() {
    if (navigator.vibrate) {
        navigator.vibrate(100); // Vibrate for 50 milliseconds
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

function copyText() {
    const inputField = document.getElementById('display');

    // Select the text inside the input
    inputField.select();
    inputField.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    navigator.clipboard.writeText(inputField.value).then(() => {
        alert('Text copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

