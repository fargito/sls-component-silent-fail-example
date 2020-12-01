const { Component } = require('@serverless/core');

class MyComponent extends Component {
    async default(inputs = {}) {
        return {};
    }

    async deploy(inputs = {}) {
        console.log("deploy");
        throw new Error("blob");
        return inputs;
    }


    async remove(inputs = {}) {
        console.log("remove");
        return inputs;
    }
}

module.exports = MyComponent;
