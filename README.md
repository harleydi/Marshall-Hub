# Marshall-Hub
The Marshall Hub is a website based off "The Marshall Project" thats tracks the data of criminal justices incidents as well as keeping up with diversity reports in efforts to change our awful criminal justice system and continue to truly help the citizens and minorities of the United States by allowing them to be involved and share their opinions and come together to make a difference.

## **Overview**

The Marshall Hub *is a website based off "The Marshall Project" thats tracks the data of criminal justices incidents as well as keeping up with diversity reports in efforts to change our awful criminal justice system and continue to truly help the citizens and minorities of the United States by allowing them to be involved and share their opinions and come together to make a difference.*

### **Permissions**

Digital assets used with full licensing and permission from [Death to Stock Photo](https://git.generalassemb.ly/sei-nyc-blizzard/project_4/blob/master), [Freepik](https://git.generalassemb.ly/sei-nyc-blizzard/project_4/blob/master), and [Unsplash](https://git.generalassemb.ly/sei-nyc-blizzard/project_4/blob/master). Custom digital design and branding by John Lansing. Digital assets stored locally and on [Imgur](https://git.generalassemb.ly/sei-nyc-blizzard/project_4/blob/master).

## **MVP**

*The Marshall HUB MVP will allow the user the option to login and sign up for the site. As well as it will allow them to be able to contribute to the case studies by posting their personal stories otherwise known as cases. As well as being able to post their own opinions.*

### **MVP Goals**

- Make a profile that makes you a profile as well as keeping the demographics of the person registering.
- Ability to fill out form of interaction/altercation (HUB REPORT)
- Have signup and log-in
- Displaying of digi-code
- A place to see all the cases that are currently open and thoes that are closed.

---

[MVP Libraries](https://www.notion.so/07674141dd7246a6b6db0bba8217bc73)

### **MVP Client (Front End)**

### **Wireframes**

> Use the Wireframes section to display desktop, tablet and mobile views.

<img width="1117" alt="Screen Shot 2020-03-05 at 6 16 02 PM" src="https://media.git.generalassemb.ly/user/25135/files/8afc3280-5f8e-11ea-8e1e-52c75c70fbf4">

- Desktop Landing

<img width="1117" alt="Screen Shot 2020-03-05 at 6 28 21 PM" src="https://media.git.generalassemb.ly/user/25135/files/86377e80-5f8e-11ea-95a0-09a487ec1726">

### **Component Hierarchy**

> Use this section to show your React components and the data architecture of your app.

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

![erd](https://media.git.generalassemb.ly/user/25135/files/71f38180-5f8e-11ea-9e73-65984da86485)


### **Endpoints**

> Use this section to list a selection of your intended endpoints and their uses. Please list any and all custom-created endpoints.

- GET `/home`
    - Returns the route to the Home page
- GET `/cases`
    - Returns all the cases
- GET `/cases/:id`
    - Returns single case
- POST `/cases/post`
    - Create route for a new hub report/case
- PUT `/cases/:id/update`
    - Update a user by id to create an association to the ballots table
- DELETE `/cases/:id/delete`
    - Deletes cases

---

auth
pmvp
puedocoding
seed data
CSS

## **Planning**

> You've got a little over a week to reach your Minimum Viable Product. Use these sections to plan out your approach.

### **Timeframes**

> Use this section to estimate the time necessary to build out the various sections of your project. You may include an additional priority matrix, if you desire.

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


> Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

### **Schedule**

> Use this section to look at your project week and plan out when and what you want to do.

| Day | Deliverables | 
| ---- | :------: | 
| Mar 5th | PROJECT PITCH/END POINTS |
| Mar 6th | BUILD OUT BACKEND |
| Mar 7th | BUILD OUT FRONT-END COMPONENTS |
| Mar 8th | USER AUTHENTICATION |
| Mar 9th | MVP |
| Mar 10th | PMVP |
| Mar 11th | PMVP |
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