# SharePoint Filters

This project has for goal to provide an interface while editing a project on SharePoint. It is a implementation of the smtps checklist.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
NodeJs : https://nodejs.org/en/download/
```

### Installing and building distribution files

After installing nodeJs, you will need to pull this repository and run in the root folder :
```
npm install
```
After installed, in order to build the project, run :
```
npm run build
```
The dist folder will then be filled with the files to use in deployment.

## Deployment

In order to deploy, you need to create a script editor web part on sharepoint. You then paste the html file found in the dist folder after building the project. The .js and .css file need to be hosted in the shared documents library of your SharePoint server.

## Built With

* [Vuejs](https://vuejs.org/) - The web framework used

## Authors

* **Jonathan Fillion** - *Initial work* - 
