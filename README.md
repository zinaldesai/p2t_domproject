# Path2Tech DOM Book Store Project
[Description](#description) | [Demo](#demo) | [Important Git/Github Expectations](#important-gitgithub-expectations) | [Getting Started](#getting-started) | [Requirements](#getting-started) | [Bonuses](#bonuses)
## Description
You will be building a Book Store Website using HTML, CSS, and JavaScript (aka, the DOM) based on a demo shown below. This application will enhance existing knowledge of client side development basics.
<br>
Below you will see a demo of the Book Store Application that will show you what features need to be added into this interactable website.

## Demo
Your Project needs to have:
- A `index.html` file that contains the HTML and structure of the website.
- A `style.css` file that will be used to style the website
- A `index.js` file that allows the user to be able to interact with the website, such as pressing buttons, making HTML dynamic, and making HTTP requests to remote API's.
- You will need to make a GET request using `fetch` to a bookstore API, there is a free open source bookstore api that can be access at [Bookstore API documentation](https://bookstore-api-six.vercel.app/)

Code Example:
```JavaScript
fetch('https://bookstore-api-six.vercel.app/api/books')
.then(response => response.json())
.then(json => console.log(json))
```
- You will need to make a POST request using `fetch` to the bookstore API mentioned earlier.

Code Example:
```JavaScript
fetch('https://bookstore-api-six.vercel.app/api/books', {
  method: 'POST',
  body: JSON.stringify({
    ...the object you want to send to the server goes here
  }),
  headers: {
    'Content-Type': 'application/json',
  },
})
.then(response => response.json())
.then(json => console.log(json))
```
- You will need to make a DELETE request using `fetch` to the bookstore API mentioned earlier.

Code Example:
```JavaScript
fetch('https://bookstore-api-six.vercel.app/api/books/1', {
  method: 'DELETE',
})
.then(response => response.json())
.then(json => console.log(json))
```
Here is a Demo video of what your project should look like when you complete the HTML, CSS and JavaScript.

![Demo Video](assets/DOM%20Book%20Store%20Project%20Demo.gif)
[View larger version of demo here](https://app.screencastify.com/v3/watch/MgYl5U5QzdwMSH11lG30)

## Important Git/GitHub Expectations:
- [ ] Set up a GitHub repository for your group, after the repository is set up add branch protections that require at least one PR approval before merging into `main`
- [ ] All your work should be done within branches, and code only should be moved to `main` after a teammate has approved a pull request. As you work, do regular adds/commits to give yourself multiple "save points" just in case something goes wrong.
- [ ] <strong>It is very important that you create a new branch off of the updated `main` branch every time you start a new feature. This branch should be used to complete the functionality associated with that branch and should be named accordingly</strong> Once the feature/functionality in this branch is finished, a PR can be made to merge the branch into `main`, and a new branch can be created for your next task. <strong>This process is crucial to minimize mere conflicts and mimicking the workfow you'll use once you join a development team.</strong>
- [ ] Use clear, descriptive, and professional commit messages. (This will make things easier if you ever have to revert to a prior commit, and it looks great to potential employers!)
- [ ] Reference the Git Collaboration Workflow Document for a list of Git best practices! 


## Getting Started
- [ ] Take time to read through the [core requirements](#requirements) below, and think through what components your app will need, what data you'll need to access, what you might store in state, etc.
- [ ] Consider using [Trello](https://trello.com/) to create a project board to track tasks, priorities and deadlines, and for visibility into project progress and remaining priorities. [See here](https://trello.com/b/WjhFXOdJ/demo-project-board) for an example of how one might be organized.
- [ ] In your project folder you will need to create a `index.html` file, a `style.css` file, and a `index.js` file, once you create these three files, you will then need to connect them in your `index.html` file.
- [ ] After you have linked your files together, open the `index.html` file and run the project with the Live Server extension on Visual Studio Code.
- [ ] Dig into the HTML, CSS or JavaScript documentation if you get stuck!
- [ ] When you run into a bug or other unexpected behavior, use your debugging tools wisely: read error messages critically, set breakpoints, use `console.log()` and watch variables, use your Google Fu, etc.
- [ ] Challenge yourself to use ES6 syntax whenever possible: arrow functions, destructuring, the spread operator, object property value shorthand, template literals, etc

## Requirements 
- [ ] <strong>No code should be merged into `main` until all console and terminal errors and warnings are corrected</strong>
- [ ] Implement a form to submit a new book, handle form submission in JavaScript and make an HTTP POST request using the `fetch` API.
- [ ] Fetch books from the provided API and display them in the `#books-container` section, using an HTTP GET request with the `fetch` API.
- [ ] Implement functionality to delete books from the list, ensure each book entry has a delete button, using an HTTP DELETE request with the `fetch` API.
- [ ] Use Tailwind CSS for styling the application.
- [ ] Hide any API keys using a `.env.local` or `.env` file.
- [ ] Make your code as DRY (<strong>D</strong>on't <strong>R</strong>epeat <strong>Y</strong>ourself) as possible!

## Bonuses
- [ ] Use `localStorage` to cache your results. You can use `localStorage` to save your books array in, this can improve the performance of your application, because you can fetch your data from `localStorage` instead of having to wait on data to be retrieved from a remote API.
- [ ] Deploy your application and share the url with the team so we can all try it!
- [ ] Write a detailed README.md file using best practices: [README Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)