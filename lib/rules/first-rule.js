"use strict";

module.exports = function(context) {
  return {
    CallExpression: function(node) {
      var callee = node.callee;
      if (
        callee.object.name === "sounds" &&
        callee.property.name === "get" &&
        node.arguments[0] &&
        node.arguments[0].value === null
      ) {
        context.report(
          node,
          "Method sounds.get() called without argument or first argument is null"
        );
      }
    }
  };
};

module.schema = [];
