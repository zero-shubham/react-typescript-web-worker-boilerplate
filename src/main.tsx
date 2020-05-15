import ReactDOM from 'react-dom';
import React from 'react';
import Component from "./component"


const jsx = (
    <div>
        It works!
        <Component />
    </div>
)
ReactDOM.render(jsx, document.getElementById("root"));