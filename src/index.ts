import noFooRule from "./rules/no-foo"
import noJsxFooRule from "./rules/no-jsx-foo"
import noJsxClassnameForbiddenRule from "./rules/no-jsx-classname-forbidden"

export default {
  rules: {
    "no-foo": noFooRule,
    "no-jsx-foo": noJsxFooRule,
    "no-jsx-classname-forbidden": noJsxClassnameForbiddenRule,
  }
}
