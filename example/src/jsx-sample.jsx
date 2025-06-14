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
  </div>
)

export default App
