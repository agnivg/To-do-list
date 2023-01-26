# To-do-list

## Build a To-do list using MERN stack with the following functionalities(mark them as complete after completing them):

### Frontend
- [ ] Develop a register/sign-in system for users
- [ ] Create a home page where users are provided with the option to create a new to-do and view the previously created to-do's
- [ ] While displaying the previously generated to-do's, the following things need to be displayed:
    - [ ] Title, Description, Date of Creation(DD:MM:YYYY HH:MM:SS), type, deadline, subtask(if type is team)
    - [ ] Buttons namely edit, delete and mark as complete/incomplete
    - [ ] Any to-do after being marked as complete, must appear as ~~strikethrough~~ text until deleted
- [ ] While Creating a to-do, title, description, type(see additional features) & deadline must be taken as input. The date of creation field should also be taken care of according to system time
- [ ] While modifying a to-do, title, description and deadline should only be modified. The date of creation field should also be taken care of according to system time(here creation date is modification date)
- [ ] Create a pagination tab that takes input as 5,10,20,50 and display the to-do's according to the value specified
For eg: 105 entries are present and value selected is 20, then 6 pages must be present with 20 entries each in the first 5 pages and 5 entries in the last page<br>
***Note:*** Provision must be there for next and previous page and entries must be sorted in descending order according to date of creation
- [ ] Use various frontend libraries and frameworks to make the User interface look good<br>
***Note:*** Use ReactJs for frontend

### Backend
- [ ] Create appropriate routes and middlewares for authentication of users. User should give only their username and password as input while registering/signing.
Appropriate steps should be taken to maintain uniqueness
- [ ] Create appropriate routes and API's for CRUD operations and pagination
- [ ] Create separate folders for defining the routes, model schema and middlewares<br>
***Note:*** Use NodeJS and ExpressJs for backend and MongoDB for database

### Additional features
- [ ] Rewards for completing tasks
- [ ] Specifying type of task- personal or professional or team
- [ ] Sending reminder notifications based on deadline given
- [ ] Collaborative to-do's for team tasks that can be shared between people
***Note:*** The frontend & backend must be implemented accordingly and also collaborative to-do's are allowed only for type team to-do's
 
- - - -
# How to start:
```
git clone https://github.com/agnivg/To-do-list.git
cd frontend
npm install
npm start

cd backend
npm install
node server
```
