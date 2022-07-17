# The lottery ticket selection

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description 
This project as part of a task to create a web application for a user to quick select
last week's draw numbers and purchase a lottery ticket. It uses default list of numbers for quick 
selection. The numbers are pre populated and highlights the selected numbers. The quick selection
can be reset to freshly start quick selection again.

There are 4 components used in this project

1. `Main` Component 

    This component embraces all the child components to display the UI and handle the quick selections 


2. `Draw numbers` 

   This component is the first most component inside Main, it shows the quick selected numbers in a single row for
   nice and easy view of 7 normal numbers and 1 powerball number


3. `Normal numbers` 

    This component handles the normal numbers selection which is different to powerball i.e. numbers from 1 to 35
    It handles the selection of numbers from quick list and highlights the selected numbers


4.  `PowerBall numbers`

   This component displays the numbers from 1 to 20 to show the selected powerball number from last week's draw.
   The selected Powerball number is highlighted on quick selection of numbers



## Steps to run the project

1. If npm is not installed, use `npm install` to install node package manager
2. run `npm start` to run the project
3. run `npm test` to run the tet suits in the project

This project runs in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
