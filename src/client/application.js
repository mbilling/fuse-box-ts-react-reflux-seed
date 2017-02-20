"use strict";
const React = require("react");
const ReactDOM = require("react-dom");
const HelloWorld_1 = require('./components/HelloWorld');
const Parse = require('parse');
/**
 * Render application into a div
 */
exports.render = (element) => {
    // bootstrap
    require("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
    // our app
    require("./styles/main.scss");
    Parse.ini;
    ReactDOM.render(React.createElement("div", null, 
        React.createElement(HelloWorld_1.HelloWorld, null)
    ), document.querySelector(element));
};
const hmr_1 = require('./hmr');
hmr_1.setStatefulModules('hmr', 'store/', 'actions/');
