"use strict";

const hasArguments = ({ callee }) =>
  callee &&
  callee.object &&
  callee.object &&
  callee.object.arguments.length === 0;

module.exports = context => ({
  ExpressionStatement: node => {
    const { expression } = node;

    if (expression.arguments.length !== 0) {
      context.report({
        message: 'Nothing called on expect()',
        node
      });
    }

    if (hasArguments(expression)) {
      context.report({
        message: 'Pass an argument to expect',
        node
      });
    }
  }
});

module.schema = [];
