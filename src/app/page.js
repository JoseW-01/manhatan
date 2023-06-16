"use client";

import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0);

  function increase(){
    setCount(count+1); 
  }

  return (
    <>
      <button onClick={increase}>UP</button>
      <p>{count}</p>
    </>
  )
}