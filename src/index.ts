import noFooRule from "./rules/no-foo"
import noJsxFooRule from "./rules/no-jsx-foo"
import noJsxClassnameForbiddenRule from "./rules/no-jsx-classname-forbidden"
import jsxClassnameKebabCaseRule from "./rules/jsx-classname-kebab-case"

export default {
  rules: {
    "no-foo": noFooRule,
    "no-jsx-foo": noJsxFooRule,
    "no-jsx-classname-forbidden": noJsxClassnameForbiddenRule,
    "jsx-classname-kebab-case": jsxClassnameKebabCaseRule,
  }
}
