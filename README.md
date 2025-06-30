# CS-465 Full Stack Development

**Course Description**

Students will design and develop a full stack application through the utilization of programming language frameworks. In creating a full stack application, students will also be responsible for developing a database as well as the code that interfaces their application to the database. This course is the first course in a two-course sequence.

**Course Competencies**

This course covers the following competencies, which represent the knowledge and skills relevant to your field:

* CS-30427: Design the architecture of a web application
* CS-40428: Build a web application using frameworks
* CS-40429: Develop and integrate a database using frameworks

## Module 8  Reflection

### 1. Architecture

#### Prompt: Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the SPA.

For this project, I used two different approaches for the frontend. First was using Express with HTML templates. This method builds pages on the server and sends them to the client. It works well for simple apps and loads pages quickly, but every update requires reloading the page. Then I used Angular to build a single page application (SPA). The SPA only loads once and updates parts of the page without reloading, making it feel smoother and faster for users. Angular’s component structure also made it easier to manage different parts of the UI.

#### Prompt: Why did the backend use a NoSQL MongoDB database?

The backend used MongoDB because it’s a NoSQL database that stores data in flexible, JSON like documents. This made it easy to work with the trip data. MongoDB is also fast for reading and writing data, and using Mongoose with it simplified how I added or updated trip records.

### 2. Functionality

#### Prompt: How is JSON different from JavaScript and how does it tie together the frontend and backend?

JSON is similar to JavaScript in syntax, but it’s just a format for storing and transferring data. Unlike JavaScript, JSON can’t include functions or undefined values. For this project, I used JSON to send data back and forth between Angular on the frontend and Express on the backend. For example, trip details and login responses were sent as JSON, allowing both sides to use the data easily.

#### Prompt: Provide instances of refactoring to improve functionality or efficiency, and explain benefits from reusable UI components.

One example of refactoring was creating an authentication service to handle logging in, saving tokens, and logging out, instead of repeating that code in different components. This made the code cleaner and easier to update later. Another example is using the trip-card component to display trips. By reusing this component, I didn’t have to rewrite the same layout for each trip, which saved time and kept the UI consistent, and adjustable to the users' screen.

### 3. Testing

#### Prompt: Explain testing methods, endpoints, and security layers in a full stack application.

For testing, I checked if the GET requests returned the correct trip data, and if POST and PUT requests worked for adding and updating trips. I also repeatedly tested that only signed in users could add or edit trips by checking if requests without a valid token were blocked. Adding JWT authentication added a layer of security to make sure that only authorized users could make changes.

### 4. Reflection

#### Prompt: How has this course helped your professional goals? Skills learned or mastered?

This course taught me how to build a full stack app from scratch. I learned to connect frontend and backend code, use Angular for SPAs, and secure routes with JWT tokens. These skills are important for any software development job, and I feel more confident applying for roles that require working with web applications or the MEAN stack. I’ve had a strong interest in full stack development, so this course was a great way to explore that area and see how both sides connect in real projects. I've come to realize I enjoy working on both frontend and backend code to build a complete application. 
