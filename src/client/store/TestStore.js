"use strict";
const Reflux = require("reflux");
const actions_1 = require("../actions");
class TestStore extends Reflux.Store {
    constructor() {
        super(...arguments);
        this.listenables = actions_1.default;
        this.state = {
            counter: 0
        };
    }
    onIncrementSomething() {
        this.setState({
            counter: ++this.state.counter
        });
    }
}
exports.TestStore = TestStore;
