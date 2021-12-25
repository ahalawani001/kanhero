<h1>KanHero- Project Management Software</h1>
A Kanban-style webapp that helps you organize and plan your project.

<b>You can find the code in the Master branch :D</b>
<br>
<h2>Technologies used:</h2>
 <h3> - Front End :</h3>
      - WebApp: The web app was designed and developed using ReactJs <br>
      - Drag and drop: This functionality was developed using the library react-beautiful-dnd 
      
 <h2>Functionalities:</h2>
   <h3>  1. List: </h3>
        - User can add a new list<br>
        - User can edit an existing list<br>
        - User can delete an existing list<br>
        
   <h3>  2. Ticket (Task)</h3>
        - User can create a ticket in whatever list he wants<br>
        - User can edit the content of an exisring ticket<br>
        - User can delete an exisring ticket<br>
        - User can drag and drop any ticket from one list to another in any order he seeks<br>
        - User can rearrange tickets in the same list in any order<br>

  <hr> 
  
  <h3>Flow</h3>
   
  - When creating a new list you can add a title and color for the list
  
 ![image](https://user-images.githubusercontent.com/92730472/147390640-14dc5e81-26db-4ee7-b18b-f79534b53730.png)
  
  - When creating a new list you can add a title and color for the list

 ![image](https://user-images.githubusercontent.com/92730472/147390727-c5a1cb83-7362-4939-a969-27dcac0011ab.png)

  By default the list color is white
  
   - Every list box contains 
    - tickets counter
    - edit list button 
    - Add task button 
    
![image](https://user-images.githubusercontent.com/92730472/147390855-64694747-f62d-420d-9eb3-87488df6aa2b.png)

  - Every list can contain a number of tasks called tickets
  
![image](https://user-images.githubusercontent.com/92730472/147390874-e65edc21-dc8c-4cbc-bbd9-bdb2317b409c.png)

  - When adding a ticket a popup appears to let user insert ticket details 

![image](https://user-images.githubusercontent.com/92730472/147390898-26204419-6128-49d0-9273-b186add20632.png)

  - User can drag and drop any ticket from its original place to any desired list
  
![image](https://user-images.githubusercontent.com/92730472/147391632-c5637916-87f8-4b42-acd0-c76506d34587.png)

  - User can click on anyticket to update it's content or change it's priority level
  
 ![image](https://user-images.githubusercontent.com/92730472/147390993-a0a218ca-a5ea-404d-90ad-a96e53686635.png)

 
  - User has the option to delete any desired ticket/list

![image](https://user-images.githubusercontent.com/92730472/147390944-0a6ff0d2-9d96-48a1-935c-9a49e0b568c3.png)


<br>
<h2>Drag and drop overview:</h2>
The drag and drop functionality was built with the react-beautiful-dnd library: 

![image](https://user-images.githubusercontent.com/92730472/147391042-0bb5f9c3-8cf2-4f78-aa24-2e17d4186db4.png)

  - <b> DragDropContext</b>  - Wraps the part of your application you want to have drag and drop enabled for
  - <b>Droppable</b>  - An area that can be dropped into. Contains Draggables
  - <b>Draggable </b> - What can be dragged around

![screenshot](https://user-images.githubusercontent.com/92730472/147391724-7caf006e-bc05-45af-a59e-b60471585075.png)

In our case the entire board is the <b> DragDropContext</b>, each list is a <b>Droppable</b>  and each ticket is a <b>Draggable </b> 

<br/>

 # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
 
