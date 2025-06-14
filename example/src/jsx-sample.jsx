// JSXのno-jsx-fooルールの動作確認用サンプル
const App = () => (
  <div>
    <foo /> {/* ここでエラーになるはず */}
    <Foo /> {/* これはOK */}
    <span>bar</span>
  </div>
)

export default App;
