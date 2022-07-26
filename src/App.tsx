import "./App.css";
import { MyCombobox } from "./MyCombobox";

function App() {
  return (
    <>
      <div>
        <p>
          <p>
            This is a{" "}
            <a href="https://headlessui.com/react/combobox">Combobox</a> that
            uses `as='textarea'` to allow for multi-line input.
          </p>
          <p>
            Notice that if you use arrow up or down, the combobox opens/closes
            and let you selects and item.
          </p>
          <p>
            Type a long text to see that arrow left and right still work as
            expected but arrow up and down are ignored even though there are no
            valid options to select, i.e. Combobox is open=false.
          </p>
        </p>
      </div>
      <MyCombobox />
      <div>
        <p>This is a regular textarea that is not a Combobox.</p>
        <p>If you type long text you can navigate it using arrows.</p>
      </div>
      <textarea />
    </>
  );
}

export default App;
