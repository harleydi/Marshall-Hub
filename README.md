# Marshall-Hub
The Marshall Hub is a website based off "The Marshall Project" thats tracks the data of criminal justices incidents as well as keeping up with diversity reports in efforts to change our awful criminal justice system and continue to truly help the citizens and minorities of the United States by allowing them to be involved and share their opinions and come together to make a difference.

## **Overview**

The Marshall Hub *is a website based off "The Marshall Project" thats tracks the data of criminal justices incidents as well as keeping up with diversity reports in efforts to change our awful criminal justice system and continue to truly help the citizens and minorities of the United States by allowing them to be involved and share their opinions and come together to make a difference.*

### **Permissions**

    Nothing currently

---

## **MVP**

*The Marshall HUB MVP will allow the user the option to login and sign up for the site. As well as it will allow them to be able to contribute to the case studies by posting their personal stories otherwise known as cases. As well as being able to post their own opinions.*

### **MVP Goals**

- Make a profile that makes you a profile as well as keeping the demographics of the person registering.
- Ability to fill out form of interaction/altercation (HUB REPORT)
- Have signup and log-in
- Displaying of digi-code
- A place to see all the cases that are currently open and thoes that are closed.

---

### MVP Libraries

---

### **MVP Client (Front End)**

### **Wireframes**

<img width="1117" alt="Screen Shot 2020-03-05 at 6 16 02 PM" src="https://media.git.generalassemb.ly/user/25135/files/8afc3280-5f8e-11ea-8e1e-52c75c70fbf4">

- Desktop Landing

<img width="1117" alt="Screen Shot 2020-03-05 at 6 28 21 PM" src="https://media.git.generalassemb.ly/user/25135/files/86377e80-5f8e-11ea-95a0-09a487ec1726">

### **Component Hierarchy**

![digiPocket@2x](https://media.git.generalassemb.ly/user/25135/files/7750cc00-5f8e-11ea-8d8e-f14e40e82da2)

### **Component Breakdown**

- Header: The header will contain the navigation and logo.
- NavBar: The navigation will provide a link to create a Hub Report and view your profile
- Profile: This is your profile where you can control how you are presented to others.
- Hub Report: This is where you can create a hub report.
- Footer: The footer will show info about me and a link to my portfolio.
- Login / Sign-up: This is where you can sign in or register.
- Main: This is where all the changes to the page and where the state will be held.
- App: This is the main component where state will start.
- Home: This is the main page you will come across when you first enter the app. A news feed of all the cases.


### **MVP Server (Back End)**

### **ERD Model**

<img width="1137" alt="Screen Shot 2020-03-06 at 2 28 27 PM" src="https://media.git.generalassemb.ly/user/25135/files/cc083d00-5fb6-11ea-9b0d-617fee011c36">


### **Endpoints**

- GET `/`
    - Returns the route to the Home page
- GET `/signup`
    - Signup
- GET `/login`
    - Login
- GET `/cases`
    - Returns all the cases
- GET `/cases/:id`
    - Returns single case
- POST `/cases`
    - Create route for a new hub report/case
- PUT `/cases/:id`
    - Update a user by id to create an association to the ballots table
- DELETE `/cases/:id`
    - Deletes cases

---

## **Planning**

> You've got a little over a week to reach your Minimum Viable Product. Use these sections to plan out your approach.

### **Timeframes**

| Task | Priority | Estimated Time | Actual Time |
| ---- | :------: | :--------------:| :----------:|
| Add Case form | Medium | 3hrs | 0hrs |
| Create CRUD Functionality | High | 6hrs | 0hrs |
| Create Front-end Applications | Medium | 5hrs | 0hrs |
| Auth | High | 9hrs | 0hrs |
| PMVP | Medium | 10hrs | 0hrs |
| Psuedocoding | Medium | 6hrs | 0hrs |
| Seed data | Medium | 3hrs | 0hrs |
| CSS | Medium | 8hrs | 0hrs|
| Total | High | 50hrs | 0hrs |


### **Schedule**

| Day | Deliverables | 
| ---- | :------: | 
| Mar 5th | PROJECT PITCH/END POINTS |
| Mar 6th | BUILD OUT BACKEND |
| Mar 7th | USER AUTHENTICATION |
| Mar 8th | ROUTING |
| Mar 9th | FRONT-END |
| Mar 10th | MVP |
| Mar 11th | MVP |
| Mar 12th | CSS |
| Mar 13th | FINAL PRESENTATIONS |

---

## **Post-MVP**

> Post MVP abilities will be making the website more focused on the users needs and wants and making this a anonmys website for people to share their  experiences and be able to contribute in helping the project.

- Add the ability to be able to comment and react to other peoples hub reports.
- The ability to be able to rate the precint in different locations
- Ability to create events that people can agree to come to.
- Making the security to where all users are anonomys.

---

## **Project Change Log**

> This section should be expanded and revised as you work on your project.

## **Code Showcase**

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## **Code Issues & Resolutions**

> Use this section to list of all major issues encountered and their resolution, if you'd like.