import React from 'react';
import {useState,useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
function Counter() {
  const [songList,setSongList]=useState([])
  const [count, setCount] = useState(0)
  function handleShow() {
    setTimeout(() => {
      console.log(count);
    }, 3000);
  }
  function handleAdd() {
    setCount(count + 1);
  }
  useEffect(() => {
    fetch('http://neteasecloudmusicapi.zhaoboy.com/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA')
    .then(res => res.json())
    .then((res) => {
      setSongList(res.result.songs)
    })
  })
  return (
    <div>
      count: { count }
      <button onClick={handleAdd}> + </button>
      <button onClick={handleShow}>show count</button>
    </div>
  )
}
function App() {
  return (
    <div className="App">
       <Counter />
    </div>
  );
}

export default App;
