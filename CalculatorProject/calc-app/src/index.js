import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// const e = React.createElement;

// class NumForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ""};

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }

//     handleSubmit(event) {
//         alert(this.state.value);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit = {this.handleSubmit}>
//             <label>
//                 <input type="submit" value={this.state.value} onChange={this.handleChange}></input>
//             </label>
//             <input type="submit" value="Submit" />
//         </form>
//     )
// }
// }

// const domContainer = document.querySelector("#addend1");
// ReactDOM.render(e(NumForm),App);

// 'use strict';

// const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
