# Mission 4 
**Command Line Interface**
## Description

Task 1: Install MongoDB Locally

Installation: Install MongoDB and MongoDB Compass locally.

Task 2: Seed Cars Data into MongoDB  

The task given was to build a version controlled CLI tool to seed and delete data to and from a local MongoDB instance.
This CLI program contains commands to seed the database using sample data contained in its package.
It is also possible to:

* Add individual entries to the database
* List all documents contained in the database
* Delete a document providing its unique ID

Task 3: Display Similar Cars from Database

## Getting Started

### Dependencies

* Node
* ES Modules
* Mongoose
* Commander
* Inquirer

### Installing

* npm install mongoose commander inquirer esm
* npm link

### Executing program

* Use "cardb" to run the program
* Commands available: cardb seed | cardb add | cardb list | cardb remove <_id>
* cardb seed - seeds the database with sample data
* cardb add - allows to add an individual document to the database through prompted questions
* cardb list - lists all documents contained in the database
* cardb remove <_id> - deletes a document from the database by its id
