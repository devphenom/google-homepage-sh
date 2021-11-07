# Google Homepage

## About

This Project is to get our hands dirty (as a Team and Individually every member of SideHustle's Jon-Snow Team), to be able work as a team with the use of Git, GitHub Version Control System, while developing with React Framework, with other supporting technologies and dependencies from Node Package Manager:
And Utilise all the concepts and Programming knowledge we have learnt through the two weeks of the program thus, far;
to build a replica of the Popular Google Landing Page, with some specified functionalities and displays; given by our SideHustle Instructors.

## Built With

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- React.js
- SCSS
- JavaScript
- HTML
- CSS

## Get Started (Resources)

> ### Link to Deployed-App
>
> see App [Team Jon-Snow](https://google-team-jon-snow.netlify.app/ "SideHustle's Team Jon-Snow")
> to view it in the browser.

or copy-paste in Browser<https://google-team-jon-snow.netlify.app/>

> spot the difference [Google Home_Page](https://google.com/ "Visit Google's Homepage")
> Visit Google site

## Usage

- When User first Enters the site!

![When User first Enters the site!](./src/img/witLogo2_2021-11-06_23-51-59.jpg "User visits")

- When User enters text in search-box!
  ![When User enters text in search-box!](./src/img/witoutLogo_2021-11-06_23-51-59.jpg "User inputs text in search-box")

### Functionalities

#### Input text and the text replaces the logo in the Main Section

we use react useState, with the setTxt function to update the state;
the create another function that uses setTxt function to update the state more dynamically(its a EventHandler and its called when the EventListener is triggers).
We set parameter of setTxt using the Target property, as Target helps get the element (and maybe it's surrounding data; in this case the _value_) that triggers a specific event; as we used Event-listener _'onChange'_ on the element (input Element; that we wants it's data)

We give the useState parameter as _Null_ (which is the default value of the constant in the useState) to be able to use Ternary operator (more suitable than regular if statement), as Null is a falsy-value.

Thus, the const txt variable is initially Null, using Ternary we define a statement: when ever txt (which is Null by default until onChange listener is triggered and E-Handler renderUserText is used to make txt equal to the value in the search-box) is True (most values are true) the content in the Search-box should display as a h1, and with React States it will render these changes in the page DOM (from the Search-box) without refreshing the page of the User.
While, when txt is false-(Null) SideHustle Logo should display instead of the value of txt variable.

#### The Search feature that refer Users to Google site with their Query

## Road-Map

1. Setup React App and dependencies; then developed the _main Section_ Responsive UI (in which most of the features will be built upon)

2. Created the _Repo_ on GitHub for the Team and Host the App on **Netlify**

3. Used **React useState** to help develop the feature in which; while user type in the search box, the Side Hustle changes to the inputted text (in the search-box)

4. Then developed the **search feature** in which; when Users search they'll be referred to Google site with their query/questions

5. then developed the other sections of this project; Header and Footer section's _Responsive UI_

6. Worked on our **HashNode Article:** About our Project and time with Side Hustle Cohort 4\.0 program [Hashnode_Article](https://teamjonsnow.hashnode.dev/ "Team-JonSnow Hashnode Article")

## Acknowledgement

- [Material-UI/Core](https://mui.com/core/)
- [Material-UI/Icon](https://mui.com/components/material-icons/)

- [Awesome READMe Guide](https://github.com/othneildrew/Best-README-Template)

## Contact

- **Group Name:** Team_Jon-Snow

- **Project Repo_Link:** _<https://github.com/devphenom/google-homepage-sh>_
