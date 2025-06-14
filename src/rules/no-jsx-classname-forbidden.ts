import { ESLintUtils } from '@typescript-eslint/utils'

const createRule = ESLintUtils.RuleCreator(
  name => `https://example.com/rule/${name}`,
)

function hasForbiddenClass(classList: string): boolean {
  return classList.split(/\s+/).includes('forbidden');
}

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
        if (node.name.name !== 'className' || !node.value) return;
        // 直接リテラルの場合
        if (node.value.type === 'Literal' && typeof node.value.value === 'string') {
          if (hasForbiddenClass(node.value.value)) {
            context.report({ node, messageId: 'forbiddenClass' });
          }
        }
        // clsx関数経由の場合
        if (
          node.value.type === 'JSXExpressionContainer' &&
          node.value.expression &&
          node.value.expression.type === 'CallExpression' &&
          node.value.expression.callee.type === 'Identifier' &&
          node.value.expression.callee.name === 'clsx'
        ) {
          const args = node.value.expression.arguments;
          for (const arg of args) {
            if (
              arg.type === 'Literal' && typeof arg.value === 'string' && hasForbiddenClass(arg.value)
            ) {
              context.report({ node, messageId: 'forbiddenClass' });
            }
            // テンプレートリテラル対応
            if (
              arg.type === 'TemplateLiteral' &&
              arg.quasis.some(q => hasForbiddenClass(q.value.cooked || ''))
            ) {
              context.report({ node, messageId: 'forbiddenClass' });
            }
          }
        }
      },
    }
  },
})
