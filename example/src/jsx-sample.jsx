// JSXのno-jsx-fooルールの動作確認用サンプル
import { clsx } from "clsx"

const App = () => (
  <div>
    <foo /> {/* ここでエラーになるはず */}
    <Foo /> {/* これはOK */}
    <span className="forbidden">bar</span> {/* classNameチェック用: エラーになる */}
    <span className="ok">baz</span> {/* OK */}
    <span className={clsx("forbidden")}>qux</span> {/* clsx経由: エラーになる */}
    <span className={clsx("ok")}>quux</span> {/* OK */}
    <span className="camelCaseClass">camel</span> {/* kebab-caseルール: 警告 */}
    <span className="snake_case_class">snake</span> {/* kebab-caseルール: 警告 */}
    <span className="kebab-case-class">kebab</span> {/* OK */}
    <span className="foo forbidden bar">multi forbidden</span> {/* スペース区切り: forbidden検出 */}
    <span className={clsx("foo forbidden bar")}>multi forbidden clsx</span> {/* clsx+スペース区切り: forbidden検出 */}
  </div>
)

export default App
