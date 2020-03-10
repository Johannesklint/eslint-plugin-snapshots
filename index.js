module.exports.rules = {
  'no-snapshots': context => {
    ({ExpressionStatement :node => {
        const name = node.expression.callee.property.name;
        if (name === "toMatchSnapshot") {
          context.report({
            node,
            message: "Do not use template literals",

            fix(fixer) {
              return [fixer.remove(node)];
            }
          });
        }
      }
    })
  }
}