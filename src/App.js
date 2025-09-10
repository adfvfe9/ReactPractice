import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const print = () => {
    console.log("내용");
  };
  const NewSpace = () => {
    alert("내용")
  }
  function abc() {
    console.error("에러")
  }
  let cnt = 0
  const [count, setCount] = useState(localStorage.getItem("a"))
  localStorage.setItem("a", count)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          p태그
        </p>
        <a href="./App2">링크</a>
        <img src={logo} className="App-logo2"></img>
        <button onClick={print}>버튼</button><br></br>
        <button onClick={abc}>버튼</button><br></br>
        <button onClick={NewSpace}>버튼</button><br></br>
        <button onClick={() => setCount(Number(count) + 1)}>증가</button>
        <button onClick={() => setCount(count - 1)}>감소</button>
        <p>현재 숫자: {localStorage.getItem("a")}</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </header>
    </div>
  );
}

export default App;
