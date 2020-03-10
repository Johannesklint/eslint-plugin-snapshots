"use strict";

module.exports = function(context) {
  return {
    ExpressionStatement: function(node) {
      const name = node.expression.callee.property.name;
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
