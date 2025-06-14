import { ESLintUtils, TSESTree } from '@typescript-eslint/utils'

const createRule = ESLintUtils.RuleCreator(
  name => `https://example.com/rule/${name}`,
);

export default createRule({
  name: 'no-jsx-foo',
  meta: {
    docs: {
      description: 'Disallow JSX elements or identifiers named "foo".',
    },
    messages: {
      noJsxFoo: 'JSX element or identifier named "foo" is not allowed.',
    },
    type: 'problem',
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      JSXIdentifier(node: TSESTree.JSXIdentifier) {
        if (node.name === 'foo') {
          context.report({ node, messageId: 'noJsxFoo' });
        }
      },
      JSXOpeningElement(node: TSESTree.JSXOpeningElement) {
        if (
          node.name.type === 'JSXIdentifier' &&
          node.name.name === 'foo'
        ) {
          context.report({ node: node.name, messageId: 'noJsxFoo' });
        }
      },
    }
  },
})
