"use strict";

const getName = ({ expression }) =>
  expression &&
  expression.callee &&
  expression.callee.property &&
  expression.callee.property.name;

module.exports = context => ({
  ExpressionStatement: node => {
    const name = getName(node);
    if (!name) {
      return;
    }

    if (name === 'toMatchSnapshot') {
      context.report({
        node,
        message:
          'Avoid testing functionality using snapshots, try toHaveStyle() instead'
      });
    }
  }
});

module.schema = [];
