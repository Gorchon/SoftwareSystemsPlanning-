Software Planning Project 1

Overview

This repository contains a software planning project with a focus on testing and calculator operations. The project appears to involve automated testing for various edge cases and scenarios.

Project Structure

├── src/
│   ├── index.js           # Main source file
│   ├── README.md          # Project documentation
│
├── tests/
│   ├── bothOperandsEmpty.spec.js                  # Test: Both operands empty
│   ├── firstOperandEmpty.spec.js                  # Test: First operand empty
│   ├── invalidNumberFormatMultipleDecimalPoints.spec.js # Test: Invalid number format
│   ├── nonNumericFirstOperand.spec.js             # Test: First operand non-numeric
│   ├── nonNumericSecondOperand.spec.js            # Test: Second operand non-numeric
│   ├── secondOperandEmpty.spec.js                 # Test: Second operand empty
│   ├── validOperationwithNegativeNumber.spec.js   # Test: Negative number operation
│   ├── zeroAdditionEdgeCase.spec.js               # Test: Edge case with zero addition
│   ├── calculator.side                            # Selenium test file
│   ├── package.json                               # Dependencies and project metadata
│
├── node_modules/                                  # Dependencies (ignored in git)
├── package-lock.json                              # Lock file for dependencies

Setup & Installation

Clone the Repository

git clone https://github.com/yourusername/softwarePlanningProject1.git
cd softwarePlanningProject1

Install Dependencies

npm install

Running Tests

To execute the test cases:

npm test

Alternatively, if using Jest:

npx jest

Contributing

Fork the repository

Create a new branch (git checkout -b feature-branch)

Commit your changes (git commit -m 'Feature: Added new test')

Push to your branch (git push origin feature-branch)

Open a Pull Request

License

This project is licensed under the MIT License. See LICENSE for details.

