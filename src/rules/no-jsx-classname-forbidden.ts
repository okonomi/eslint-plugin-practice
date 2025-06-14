import { ESLintUtils } from '@typescript-eslint/utils'

const createRule = ESLintUtils.RuleCreator(
  name => `https://example.com/rule/${name}`,
)

export default createRule({
  name: 'no-jsx-classname-forbidden',
  meta: {
    docs: {
      description: 'Disallow JSX elements with className="forbidden".',
    },
    messages: {
      forbiddenClass: 'JSX element with className="forbidden" is not allowed.',
    },
    type: 'problem',
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      JSXAttribute(node) {
        if (
          node.name.name === 'className' &&
          node.value.type === 'Literal' &&
          node.value.value === 'forbidden'
        ) {
          context.report({ node, messageId: 'forbiddenClass' });
        }
      },
    }
  },
})
