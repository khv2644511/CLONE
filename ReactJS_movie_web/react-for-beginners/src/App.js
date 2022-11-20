import { useState, useEffect } from "react";
import Button from "./Button";

function App() {
  const [counter, SetValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => {
    SetValue((prev) => prev + 1);
  };
  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    console.log("i run all the time");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 6) {
      console.log("I ren when 'keyword' changes");
    }
  }, [keyword]);

  useEffect(() => {
    console.log("I ren when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I ren when 'keyword & counter' changes");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here.."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
