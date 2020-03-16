"use strict";

function getName(node) {
  return (
    node &&
    node.expression &&
    node.expression.callee &&
    node.expression.callee.property &&
    node.expression.callee.property.name
  );
}

module.exports = function(context) {
  return {
    ExpressionStatement: function(node) {
      const name = getName(node);
      if (!name) {
        return;
      }

      if (name === "toMatchSnapshot") {
        context.report({
          node,
          message: "Avoid testing functionality using snapshots, try toHaveStyle() instead"
        });
      }
    }
  };
};

module.schema = [];
