import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const baseUrl = 'http://localhost:3000'
const loginForm = document.querySelector("#login-form")
const usernameInput = document.querySelector("#username-input")
const imageInput = document.querySelector("#image-input")
const loginContainer = document.querySelector("#login-container")
const mainContainer = document.querySelector(".main_container")
const createImageButton = document.querySelector("#create-image-button")
const userChatList = document.querySelector("#user-chat-list")
const messageList = document.querySelector(".messages")
const submitMessageButton = document.querySelector("#message-submit-button")
const messageInput = document.querySelector("#create_message")
let userImage = document.querySelector(".user_image")
let userDisplayName = document.querySelector(".user_display_name")
let chatSearchInput = document.querySelector("#chat_search_input")




const state = {
  users: null,
  current_user: null,
  current_chat: null,
  other_chat_user: null,
}

// Login Page Setup Functions //
//-------------------------//

toggleImageInput = (event) => {
      event.preventDefault()
      imageInput.style.display == 'block' ? imageInput.style.display = 'none' : imageInput.style.display = 'block'
    }

createImageButton.addEventListener("click", toggleImageInput)

loginSetup = () => {
  fetch(baseUrl + "/users")
    .then(response => response.json())      state.users = data
      loginForm.addEventListener("submit", logUserIn)
  })
}

//Solve these problems:

//#1 Create a one line function that adds adds two parameters

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
