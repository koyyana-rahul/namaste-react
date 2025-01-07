import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement('h1',{id:"heading", xyz:"abc"},"hello rahul");

// console.log(heading); //react element which is nothing but js object



{/* <div id="parent">
     <div id="child">
          <h1>hello react from h1</h1>
     </div>
</div> */}


{/* <div id="parent">
     <div id="child">
          <h1>hello react from h1</h1>
          <h2>hello react from h2</h2>
     </div>
</div> */}


{/* <div id="parent">
     <div id="child">
          <h1>hello react from h1</h1>
          <h2>hello react from h2</h2>
     </div>
     <div id="child2">
          <h1>hello react from h1</h1>
          <h2>hello react from h2</h2>
     </div>
</div> */}


const heading = React.createElement(
     "div",
     {id: "parent"},
     [React.createElement(
          "div",
          {id: "child"},
          [React.createElement(
               "h1",
               {},
               "hello react from h1"
          ),
          React.createElement(
               "h2",
               {},
               "hello react from h2"
          )]
     ),
     React.createElement(
          "div",
          {id: "child2"},
          [React.createElement(
               "h1",
               {},
               "hello react from h1"
          ),
          React.createElement(
               "h2",
               {},
               "hello react from h2"
          )]
     ) ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);