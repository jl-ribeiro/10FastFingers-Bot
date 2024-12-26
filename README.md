![demo-gif](./demo/demo.gif)


# Typing Test Automation on 10FastFingers with Cypress

## Description
This repository contains an automation project developed with [Cypress](https://www.cypress.io/) and [Cucumber](https://cucumber.io/) (via [cypress-cucumber-preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor)) to interact with the [10fastfingers](https://10fastfingers.com/) website, a popular online typing test platform. The goal of the project is to access the site, change the language to the one defined in a test scenario, capture the words displayed in the interface, and automate the typing process in the input field until the test ends.

## Features
- Access the 10FastFingers website.
- Change the typing test language based on the scenario defined in Gherkin.
- Capture the words displayed in the site's HTML field.
- Automatically type the words into the input field.
- Manage the typing flow until the timer ends or wait for the timer to finish if the words end before time.

## Technologies Used
- **Node.js**: Runtime environment.
- **Cypress**: E2E testing framework.
- **Cucumber**: Language to write test scenarios in Gherkin format.
- **cypress-cucumber-preprocessor**: Plugin to integrate Cypress with Cucumber.
- **cypress-wait-until**: Utility for custom waiting conditions in Cypress tests.

## Project Structure
```
/
├── cypress/
│   ├── integration/
│   │   ├── feature/
│   │   │   └── TypingTest.feature  # Scenarios written in Gherkin
│   ├── plugins/
│   │   └── index.js                # Cypress plugin configuration
│   ├── support/
│   │   ├── step_definitions/       # Steps associated with the scenarios
│   │   │   └── StepDefinitions.js  # Step definitions for the TypingTest.feature
│   │   ├── commands.js             # Custom Cypress commands
│   │   └── index.js                # Cypress support file
├── demo/
│   └── demo.gif                    # Demo GIF showcasing the project
├── cypress.json                    # Cypress configuration file
├── package.json                    # Project dependencies and scripts
├── package-lock.json               # Dependency lockfile
└── README.md                       # Project documentation
```

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/jl-ribeiro/10FastFingers-Bot.git
   cd 10FastFingers-Bot
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Install Cypress dependencies:
   ```bash
   npm install cypress
   npm install --save-dev cypress-cucumber-preprocessor
   npm i -D cypress-wait-until
   ```

   *Note*: If you are using Linux or other OS, please use the [Cypress install guide](https://docs.cypress.io/app/get-started/install-cypress).

## Running the Tests
### Interactive Mode
Run Cypress in interactive mode:
```bash
npx cypress open
```

### Headless Mode
Run the tests in headless mode:
```bash
npx cypress run
```

## Example Scenario (Gherkin)
The scenario is located on [Gherkin file](./cypress/integration/feature/TypingTest.feature). The funcionalities is located on [StepDefinitions.js file](./cypress/support/step_definitions/StepDefinitions.js).

## Contributions
Contributions are welcome! Feel free to open issues or submit pull requests with improvements, bug fixes, or new features.

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
For questions or suggestions, contact me at: [jlribeiro at id dot uff dot br](https://linkedin.com/in/jlribeiro).

