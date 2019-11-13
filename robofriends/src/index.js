import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {robots} from './robots' // we do this because it is a variable not a component so it isnt a export default
// import Card from './Card'
import App from './App'
import 'tachyons'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<App/>


  , document.getElementById('root'));


  // <div>
  // <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
  //
  // <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
  //
  // <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />

// </div>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
