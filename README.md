Calculator App
This JavaScript code implements a basic calculator application with HTML and CSS. The calculator allows users to perform addition, subtraction, multiplication, division, and modulus operations. The user interface is designed with HTML and styled using CSS, while the functionality is implemented using JavaScript.

Overview
The code defines several variables to interact with HTML elements, such as number buttons, delete button, sign buttons, clear button, display screen, and equal button. The script maintains state variables (isFirstValue and isSecondValue) and values (firstValue and secondValue) to keep track of user input and operations.

Event Listeners
Number Buttons
The code uses a loop to add click event listeners to all number buttons. When a number button is clicked, the corresponding value is retrieved and processed. If it's the first value, it is appended to firstValue; if it's the second value, it is appended to secondValue. The displayed value on the calculator screen is also updated accordingly.

Sign Buttons
The script assigns event listeners to the sign buttons (+, -, *, /, %). When a sign button is clicked, the corresponding operation is set, and the sign is displayed on the screen. The script then updates the state variables to indicate that the second value is being entered.

Clear Button
The clear button resets all values and state variables, clearing the calculator screen.

Delete Button
The delete button removes the last digit entered, depending on whether the first or second value is currently being entered.

Equal Button
The equal button triggers the calculation when clicked. The code checks if both the first and second values are present and performs the corresponding operation based on the selected sign. The result is displayed on the screen, and firstValue is updated for any subsequent calculations.

Calculation Logic
The calculation logic is encapsulated in a function named calculateResult. This function is invoked when the equal button is clicked. It checks if both values and a sign are present before performing the calculation. The result is then displayed, and firstValue is updated with the result for potential further calculations.

Usage
This calculator is designed to provide a simple and intuitive user experience. Users can input values using number buttons, select the desired operation with sign buttons, clear the input with the clear button, and delete the last digit entered with the delete button. The equal button computes the result and displays it on the screen.

Conclusion
This JavaScript code creates a functional calculator with basic arithmetic operations. It serves as an educational example of how to handle user input, update the DOM dynamically, and perform calculations in a web application using vanilla JavaScript. The code is well-organized, making it easy to understand and modify for different requirements.
