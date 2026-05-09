const display = document.getElementById('display');

        function appendToDisplay(input) {
            display.value += input;
        }

        function clearDisplay() {
            display.value = '';
        }

        function calculate() {
            try {
                if (display.value === "") return;
                
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Erro';
                setTimeout(clearDisplay, 1500);
            }
        }