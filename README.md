# Personal Budget Calculator

This is a small app for anyone who wants to keep records of their transactions. The app can calculate a budget for a week or a month, helping users plan their future spending.

## Features

This Budget Calculator has two main parts:

### 1. Input Data Dialog Box

![Input Data Dialog Box](assets/css/images/datadialog.png)

- There are three data input areas in this dialog box:
    - Users can enter the date of the transaction or the current date.
    - Users can describe what they have spent or earned.
    - There is a section for the spent or received amount.
- Users do not need to write negative values for expenditures, these are generated automatically by clicking the 'Expense' button.
- If the amount is a gain, it will be shown as a positive value once the 'Income' button is clicked.

### Special Features

- Once the Income or Expense button is clicked, the input dialog box disappears and the user is taken to the main dialog box.
- This dialog box can also be closed manually by clicking the "x" mark at the top right corner.

### 2. Main Dialog Box

![Main Dialog Box](assets/css/images/maindialog.png)

This is where the input data is going to be displayed.

- Insert transaction tab is located at the top of the dialog box just below the name.
    - which opens input dialog box when clicking on it.

-  All the input data displayed in the table, which is below the 'Insert Transaction' tab.
    - The table has four headings:
        - Date/Time – shows the preferred date or current date.
        - Description – shows the name of the income or expense.
        - Amount of Transaction – shows the amount in numbers.
        - Amendments 
          - If the user wants to change details of any section, there is an "Edit" button under this section.
          - There is a "Delete" button to remove the entire row of entry.

  - Total Income 
    - Total income is automatically calculated according to the input amounts.

  - Total Expenditure
    - Total expenditure is also calculated by adding up all the negative values.

  - Total Remaining
    - This amount is calculated by adding up all the income and expense values together.

- Users can plan their future investments by looking at these values. 

- _Goal_

My goal for this project is to make an app to support people in calculating and keeping records of their daily activities.
 
### Features Left to Implement

- Planning to add a sign-in option

## Testing 

This app was tested various times, and all features worked as expected.

This app was tested on Google, Yahoo, Microsoft Bing, and Microsoft Edge, and it worked perfectly.

The app is fully responsive.

When deploying the app onto GitHub Pages, the CSS file was not recognized at first, but later, with the help of my mentor, the issue was resolved.


### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)

- JavaScript
  - No errors were found when passing through the  linter [(JShint)](https://jshint.com/)

### Unfixed Bugs
There are no unfixed bugs in the code.


## Deployment

The project was deployed to the hosting platform GitHub.

- Following steps were followed to deploy to GitHub pages: 

  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

- Early deployment was done. Several modifications were made afterwards.
- There was an issue that prevented the system from identifying the CSS file, but after a few attempts, the bug was identified and removed. 

The live link can be found here - https://srivish12.github.io/my-second-project/


## Credits 

- I would like to thank Sri Lankan tutors and YouTubers for providing learning materials and helping me develop this project.
- I collected extra knowledge from online books and W3Schools tutorials.

- Special thanks go to my mentor Victor Miclovich for his patience and support throughout the project.

### How to View the Project

- [View the deployed code](https://srivish12.github.io/my-second-project/)
