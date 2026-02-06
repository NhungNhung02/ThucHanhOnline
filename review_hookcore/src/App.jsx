import UseStateDemo from "./hooks-review/UseStateDemo";
import UseEffectDemo from "./hooks-review/UseEffectDemo";
import UseReducerDemo from "./hooks-review/UseReducerDemo";
import UseMemoDemo from "./hooks-review/UseMemoDemo";
import UseRefDemo from "./hooks-review/UseRefDemo";
import UseCallbackDemo from "./hooks-review/UseCallbackDemo";
import MemoDemo from "./hooks-review/MemoDemo";

function App() {
  return (
    <div>
      <h1>React Hooks Review</h1>

      <UseStateDemo />
      <UseEffectDemo />
      <UseReducerDemo />
      <UseMemoDemo />
      <UseRefDemo />
      <UseCallbackDemo />
      <MemoDemo />
    </div>
  );
}

export default App;
