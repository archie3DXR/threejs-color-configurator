import React, { useEffect, useState } from "react"

export default function Clicker() {
  const [count, setCount] = useState(
    parseInt(localStorage.getItem("count") ?? 0)
  )

  useEffect(() => {}, [])

  useEffect(() => {
    localStorage.setItem("count", count)
  }, [count])

  const buttonClick = () => {
    setCount(count + 1)
  }

  const buttonClock = () => {
    setCount(count - 2)
  }

  const buttonReset = () => {
    setCount(0)
  }

  return (
    <div>
      <div>number: {count} </div>
      <button onClick={buttonClick}>add 1</button>
      <button onClick={buttonClock}>minus 2</button>
      <button onClick={buttonReset}>reset</button>
    </div>
  )
}
