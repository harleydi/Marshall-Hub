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

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0410f9f7-9b88-40b0-9b6a-d5e7d180e353/Screen_Shot_2020-03-05_at_6.16.02_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0410f9f7-9b88-40b0-9b6a-d5e7d180e353/Screen_Shot_2020-03-05_at_6.16.02_PM.png)

- Desktop Landing

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5d5b2024-3d47-41a0-b9dd-728e04bff156/Screen_Shot_2020-03-05_at_6.28.21_PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5d5b2024-3d47-41a0-b9dd-728e04bff156/Screen_Shot_2020-03-05_at_6.28.21_PM.png)

### **Component Hierarchy**

> Use this section to show your React components and the data architecture of your app.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6c540f90-117d-4014-806f-0aa7115f7e37/digiPocket2x.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6c540f90-117d-4014-806f-0aa7115f7e37/digiPocket2x.png)

### **Component Breakdown**

[Untitled](https://www.notion.so/4ea9937c044a4cd791892fac895949df)

### **MVP Server (Back End)**

### **ERD Model**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1095471d-f286-47d8-8faa-37a04e5c88be/erd.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1095471d-f286-47d8-8faa-37a04e5c88be/erd.png)

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

## **Planning**

> You've got a little over a week to reach your Minimum Viable Product. Use these sections to plan out your approach.

### **Timeframes**

> Use this section to estimate the time necessary to build out the various sections of your project. You may include an additional priority matrix, if you desire.

[Untitled](https://www.notion.so/85f49309dcbb4c2cb62431a75e2fc1e0)

> Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

### **Schedule**

> Use this section to look at your project week and plan out when and what you want to do.

[Untitled](https://www.notion.so/2056a4cf9b9a44d3a2bb8e209274d87c)

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