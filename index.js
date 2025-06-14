export default {
  rules: {
    "no-foo": {
      create(context) {
        return {
          Identifier(node) {
            if (node.name === "foo") {
              context.report({ node, message: "'foo' is not allowed." });
            }
          }
        }
      }
    }
  }
}
