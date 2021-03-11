# FrontEnd of the Tasklist

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Only Run](#only-run)
* [Setup](#setup)

## General info
This project is the Frontend of the Tasklist Chalenge
	
## Technologies
Project is created with:
* [craco](https://github.com/gsoft-inc/craco) version: 6.1.1
* [axios](https://github.com/axios/axios) version: 0.21.1
* [react](https://github.com/facebook/react) version: 17.0.1
* [tailwindcss](https://github.com/tailwindlabs/tailwindcss) version: 2.0.3
	
## Only Run
To only run this project, we need docker and docker-compose installed

First clone the project
```bash
git clone https://github.com/morexlt/tasklist-client
cd ../tasklist-client
```
Then you can only run the client:
```bash
docker-compose up
```
Then go to [http://localhost:3000](http://localhost:3000)

### One alternative is running everything from the [Backend](https://github.com/morexlt/tasklist-server)


## Setup
To run this project, localy without using docker we need npm

First clone the project
```bash
git clone https://github.com/morexlt/tasklist-client
cd ../tasklist-client
```
Then install dependencies
```bash
nvm use
npm install
npm start
```
Then go to [http://localhost:3000](http://localhost:3000)
