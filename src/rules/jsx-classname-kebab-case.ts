import { ESLintUtils, TSESTree } from '@typescript-eslint/utils'

const createRule = ESLintUtils.RuleCreator(
  name => `https://example.com/rule/${name}`,
);

function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

export default createRule({
  name: 'jsx-classname-kebab-case',
  meta: {
    docs: {
      description: 'Enforce kebab-case for className values in JSX.',
    },
    fixable: 'code',
    messages: {
      notKebab: 'className value should be kebab-case: {{expected}}',
    },
    type: 'suggestion',
    schema: [],
  },
  defaultOptions: [],
  create(context) {
    return {
      JSXAttribute(node: TSESTree.JSXAttribute) {
        if (node.name.name !== 'className' || !node.value) return;
        if (node.value.type === 'Literal' && typeof node.value.value === 'string') {
          const original = node.value.value;
          const kebab = toKebabCase(original);
          if (original !== kebab) {
            context.report({
              node: node.value,
              messageId: 'notKebab',
              data: { expected: kebab },
              fix: fixer => fixer.replaceText(node.value, `"${kebab}"`)
            });
          }
        }
      },
    }
  },
})
