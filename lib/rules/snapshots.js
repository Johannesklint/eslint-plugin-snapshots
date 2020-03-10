"use strict";

module.exports = function(context) {
  return {
    ExpressionStatement: function(node) {
      const name =
        node &&
        node.expression &&
        node.expression.callee &&
        node.expression.callee.property &&
        node.expression.callee.property.name;
      if (!name) {
        return;
      }
      if (name === "toMatchSnapshot") {
        context.report({
          node,
          message: "Do not test with snapshot"
        });
      }
    }
  };
};

module.schema = [];
