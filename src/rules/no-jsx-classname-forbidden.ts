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
          node.name.name === 'className'
        ) {
          // 直接リテラルの場合
          if (node.value && node.value.type === 'Literal' && node.value.value === 'forbidden') {
            context.report({ node, messageId: 'forbiddenClass' });
          }
          // clsx関数経由の場合
          if (
            node.value &&
            node.value.type === 'JSXExpressionContainer' &&
            node.value.expression &&
            node.value.expression.type === 'CallExpression' &&
            node.value.expression.callee.type === 'Identifier' &&
            node.value.expression.callee.name === 'clsx'
          ) {
            const args = node.value.expression.arguments;
            for (const arg of args) {
              if (
                arg.type === 'Literal' && arg.value === 'forbidden'
              ) {
                context.report({ node, messageId: 'forbiddenClass' });
              }
              // テンプレートリテラル対応
              if (
                arg.type === 'TemplateLiteral' &&
                arg.quasis.some(q => q.value.cooked === 'forbidden')
              ) {
                context.report({ node, messageId: 'forbiddenClass' });
              }
            }
          }
        }
      },
    }
  },
})
