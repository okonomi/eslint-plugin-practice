// JSXのno-jsx-fooルールの動作確認用サンプル
const App = () => (
  <div>
    <foo /> {/* ここでエラーになるはず */}
    <Foo /> {/* これはOK */}
    <span className="forbidden">bar</span> {/* classNameチェック用: エラーになる */}
    <span className="ok">baz</span> {/* OK */}
  </div>
)

export default App;
