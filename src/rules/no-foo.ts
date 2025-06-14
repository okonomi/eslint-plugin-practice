import { ESLintUtils } from '@typescript-eslint/utils'

const createRule = ESLintUtils.RuleCreator(
  name => `https://example.com/rule/${name}`,
);

export default createRule({
  name: 'no-foo',
  create(context) {
    return {
      Identifier(node) {
        if (node.name === "foo") {
          context.report({ node, messageId: 'noFoo' });
        }
      }
    }
  },
  meta: {
    docs: {
      description: 'Disallow the use of "foo" as an identifier.',
    },
    messages: {
      noFoo: '"foo" is not allowed.',
    },
    type: 'suggestion',
    schema: [],
  },
  defaultOptions: [],
})
