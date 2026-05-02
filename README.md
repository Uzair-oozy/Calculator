## Calculator Web Application

A simple, interactive web-based calculator built with HTML, CSS, and JavaScript.
Perfect for basic arithmetic operations with a clean, user-friendly interface.

### Features

- **Basic Operations**: Addition, subtraction, multiplication, and division
- **Number Input**: Supports digits 0-9 and decimal point (.) for floating-point calculations
- **Clear Function**: AC button to reset the display and start a new calculation
- **Responsive Display**: Real-time display of input and calculation results
- **Intuitive UI**: Visual distinction between operators and number buttons

### Technical Details

- **Frontend Stack**: HTML5, CSS3, JavaScript (ES6)
- **Layout**: CSS Grid for responsive button layout
- **Calculation Engine**: JavaScript `eval()` function for expression evaluation
- **Styling**: 
  - Pink/Palevioletred background
  - Black display area with white text
  - Gray number buttons with hover and active states
  - Orangered equals button (spans multiple rows for emphasis)

### Files

- `Calculator.html` - Main HTML structure with button layout and input display
- `Calculator.css` - Styling for calculator container, buttons, and display
- `Calculator.js` - JavaScript logic for display input, calculation, and clearing

### How to Use

1. Open `Calculator.html` in a web browser
2. Click number buttons to enter values
3. Select an operator (+, -, ×, ÷)
4. Enter another number
5. Click the = button to see the result
6. Click AC to clear and start over

### Browser Compatibility

Works in all modern browsers that support ES6 JavaScript (Chrome, Firefox, Safari, Edge)

### Notes

- Educational project demonstrating basic web development concepts
- Uses inline event handlers for button clicks
- Simple single-expression calculation model
