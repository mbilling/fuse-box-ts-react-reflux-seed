"use strict";
const Reflux = require("reflux");
const React = require("react");
const actions_1 = require("../actions");
const TestStore_1 = require('../store/TestStore');
class HelloWorld extends Reflux.Component {
    constructor() {
        super(...arguments);
        this.store = TestStore_1.TestStore;
    }
    render() {
        // this only shows that initially the inport does not exist
        // but after pressing the button it will exists as it will be cached
        return (React.createElement("button", {onClick: () => {
            actions_1.default.incrementSomething();
            const loaded = (module) => {
                console.log("Lazy loaded", module);
                module.default();
            };
            const moduleName = "~/lazy";
            FuseBox.exists(moduleName)
                ? loaded(require(moduleName)) :
                FuseBox.import("./bundles/lazy.js", () => loaded(require(moduleName)));
        }, className: "btn btn-primary", type: "button"}, 
            "Message increment ", 
            React.createElement("span", {className: "badge"}, this.state.counter)));
    }
}
exports.HelloWorld = HelloWorld;
