--------- README - Trade Table ---------

Link for hosted app: https://trade-table-e6532.web.app/

How to start the app locally:
 - open terminal in project directory
 - run command "npm install"
 - run command "npm run start"
 - a browser tab should appear and load the app (Alternatively, go to http://localhost:3000/)

Assumptions:
 1. Included an extra column in the table with action buttons for delete/edit actions.
 2. The validation rules for the create/edit fields include the following:
    - SecurityCode: required (must not be empty), between 1 and 5 characters, alphanumeric
    - TradePrice: required, maximum 1,000,000 , will autocorrect to float number if input contains incorrect characters
    - TradeVolume: required, maximum 1,000,000 , will autocorrect to integer number if input contains incorrect characters
    - TradeOwner: required (must not be empty), between 2 and 30 characters, alphanumeric

Design decisions:
 1. Used table, form and button components from AntDesign library (https://ant.design/components/overview).
 2. For an organised architecture, each component has its own directory with separate files for
 constants, models, styles, index etc.
 3. Included styling for responsive mode, which has an impact on the table display:
    - on devices smaller than 992px, TradeOwner column will not be visible
    - on devices smaller than 769px, TradeOwner and TradeVolume columns will not be visible
 4. Used typescript for type safety.
 5. Hosted using firebase.