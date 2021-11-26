# ExamPlus 💎
## [ Microsoft Engage'21 Mentorship Program   ]

## 🎯 Overview 

#### ‣ Given Problem statement:
Build a functional prototype of a platform that gives students an array of digital academic and social tools to stay engaged with their studies, peers and broader university community during pandemic.

#### ‣ Project Idea:
The COVID-19 Pandemic has changed the education system dramatically, with the distinctive rise of e-learning, whereby teaching is undertaken remotely and on digital platforms. Even the exams are being held in a remote fashion. Thus, this project provides an integrated platform for the students as well as the teachers to conduct examinations digitally in a hassle-free manner. One can create, attempt and monitor tests, and maintain score records easily.  
This project has been built solely during the period of **Microsoft Engage'21 Mentorship Program** conducted by Microsoft to provide mentorship and to enrich students with various software development techniques.  

- [x] Status : Accomplised Successfully

## 🎯 Flow Diagram
<img width=70% src="https://user-images.githubusercontent.com/51702245/142895712-17f16c4d-c56d-42bd-b6c6-23ba1a68ecbf.jpg" >

## 🎯 Links for project:
 Video link : 

## 🎯 Agile methology and workflow:
Agile methodology was followed by implementation of a sprint of 5 days in a week for 3 weeks along with continuous integration and development using Git version control. The website has been hosted on Heroku. The intent of the project, customer viewpoint, visual hierarchy and comfortable colour scheme were in mind while developing this project. Bugs were solved according to priority scale.

Priority scale : P0 (Maximum) to P4 (Minimum)

| Week | Task |  Remarks |
|------|------|---------|
| Week 1: <br>(Design Phase & Initial Development) | <ul><li>P0: Basic app built by exploring technologies. Set up Node.js and Express for backend, React for front-end, and MongoDB for the database.</li> <li>P1: Develop Home Page UI and Backend</li> <li>P1: Authorization Page UI (Sign-in and Sign up options)</li><li>P2: JWT Authorization Backend Set-Up</li><li>P2: Access Control Set-up (Separate Interface for Teacher and Student)</li><li>P3: Build the profile section for users</li></ul>  |   Set-up successful, Initial Development (Phase 1) completed            |
| Week 2: <br>(Developing major features) | <ul><li>P0: Develop the Create Test functionalities </li><li>P4: Develop the Attempt Test functionalities </li><li>P1: Develop Test Instructions and the Test Live Preview</li><li>P3: Result compilation</li> |    Major features implemented and Bugs resolved             |
| Week 3: <br>(Conclusion) | <ul><li>P1: Develop Result functionality with graphs</li><li>P0: Test Preview (Bug fix)</li><li>P2: Develop Final Dashboard functionality</li><li>P3: [Conclusion] Code clean-up, removing redundant code, and maintaining proper documentation</li><li>P4: Hosting the Website</li></ul>    |     Problem Statement completed successfully, improved Code Maintainability  |

## 🎯 Features:
Check out the detailed document: [ExamPlus Features] (https://docs.google.com/document/d/1kWqUSSMTywZP3J7nt4YDqmYmVTypFjfXcYraaN3agBE/edit?usp=sharing)
Feature | Feature 
-------- | -------- 
|**Home Page**: Home Page contains the website information customized using React and Bootstrap. <br><br> ![Home Page](https://user-images.githubusercontent.com/51702245/143594962-4162a7bd-a201-4798-9a7f-415c1e213a6e.gif) |**Sign-in**: Sign In options for registered users. Mouse Interactive UI developed using react-particle-js. <br><br> ![Sign In](https://user-images.githubusercontent.com/51702245/143594988-23e0876c-3669-4d34-891f-d249674354a8.gif) |
|**Sign-Up**: Sign Up option for new users. Mouse Interactive UI developed using react-particle-js. Authentication done using JWT Authentication. <br><br> ![Sign Up](https://user-images.githubusercontent.com/51702245/143594998-c58d41d4-3456-4a22-b139-567e80ef10ea.gif) | **Profile**: Users can see their profile. <br><br>  ![Profile](https://user-images.githubusercontent.com/51702245/143594983-4748e672-fad5-4749-8697-51a35243c4bf.png)|
|**Create Test (Teacher)**: Teachers can create tests for Students for a particular class - filling up Test Name, Category, Class, Section,  Duration, Marks, Rules, Questions, Options etc. <br><br> ![Create Test](https://user-images.githubusercontent.com/51702245/143594960-ebb17842-e658-4b06-85d5-89804855f513.png) | **Assigned Tests (Teacher)**: Teachers can see all the tests they have assigned. <br><br> ![Assigned Test (Teacher)](https://user-images.githubusercontent.com/51702245/143594951-f1f6e314-407c-4f58-bceb-8b77611a8904.png) |
| **Test Status (Teacher)**: Teachers can the students who attempted a particular test and their marks analysis in detail. <br><br> ![Test Status (Teacher)](https://user-images.githubusercontent.com/51702245/143594943-1edda817-90f7-48fe-9dd9-ebd7578b37a5.png) | **Teacher Dashboard**: Teachers can see a summarized dashboard with all the tests they have recently assigned and the registered classes. <br><br> ![Teacher Dashboard](https://user-images.githubusercontent.com/51702245/143595009-9396a645-2d43-4265-bcef-c954123d68e9.png) |
|**Student Dashboard**: Students can see a summarized dashboard with all the available and the attempted tests. <br><br> ![Student Dashboard](https://user-images.githubusercontent.com/51702245/143595005-78493d15-ed25-4e01-bb89-794b6096642f.png)| **Available Tests (Student)**: Students can see all the tests available tests given by teachers. <br><br> ![Available Test (Student)](https://user-images.githubusercontent.com/51702245/143594955-8b406ba3-e850-490f-81aa-38400946c54e.png) |
| **Test Instructions (Student)**: After choosing to attempt a test, students would be redirected to the test instructions page. <br><br> ![Test Instructions (Student)](https://user-images.githubusercontent.com/51702245/143595011-577185dd-2469-4ac5-b444-6a46f3a72907.png) | **Attempt Test (Student)**: Students can attempt an assigned test. The test will be live.<br><br> ![Live Test](https://user-images.githubusercontent.com/51702245/143594981-02098664-b31e-46b8-a663-4ad484191d9d.png)|
|**Results (Student)**: Students can check the results of an attempted test. Graphical formations developed using react-google-charts. <br><br> ![Result (Student)](https://user-images.githubusercontent.com/51702245/143594986-99ab613d-c710-40c6-b70a-2f927030615a.png)| **Live Test features**: <br><ul><li>The test is resumable.</li><li>Test countdown timer.</li><li>Only one attempt per test</li><li>Auto Submit Test on completion of the test duration.</li><li>Next and previous options.</li><li>Can clear the selected response to a question.</li><li>Can flag a particular question during the test.</li> </ul> |

 

## 🎯 Technologies used:
#### Backend : <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="Node.js" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/><img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/> 
#### Frontend :  <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/><img alt="React" src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"/><img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white"/>
#### DataBase : <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
#### Version Control : <img alt="Git" src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"/>  
#### Hosting : <img alt="Heroku" src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white"/>
###### You can also see the list of dependencies in the package.json file.
 
## 🎯 Installation/Environment Setup:

  Prerequisites For Running The Project Locally:
  <pre>• Node     • NPM     • Git </pre>
 
  #### 1. Clone App
  
   Create a new folder and clone the repository there using the following command: 
  
  ```
   $ git clone https://github.com/Shatakshis667/Microsoft-Engage-2021-Project.git
  ```
    
 #### 2. Backend Set-Up and Installations:
 
   Head inside the cloned folder and install the dependencies using npm:
  ```
   $ npm install 
  ```
 
   Next, create a .env file in the root of the project directory and  put all the config keys in this manner:
  ```
   JWT_SECRET = 
   MONGODB_DATABASE_NAME = 
   MONGODB_USERNAME = 
   MONGODB_PASSWORD = 
  ```
 
   Now, to start the backend server run:
  ```
    $ node index.js
  ```
 
#### 3. Frontend Set-Up and Installations:
 
   Head to the client side:
  ```
    $ cd client/
    $ cd ep-client/
  ```
 
   Install the dependencies using npm:
  ```
    $ npm install
  ```
 
   Finally, run:
  ```
    $ npm start
  ```
  
 ###### NOTE: It would automatically spin up a development server for you on ```PORT:3000``` & backend server on ```PORT 5000```

## 🎯 Future Scopes:-
Feature | Explanation
------------ | -------------


Thank you ! Microsoft Team for such a wonderful mentorship program ❤️
