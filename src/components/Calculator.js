import React, { useState, useEffect } from 'react'

const arr = ['AC', 'LC', '%', '+', '9', '8', '7', '-', '6', '5', '4', '*', '3', '2', '1', '/', '0', '.', , '=']
const specialChars = /[+\-*]/
const Calculator = () => {
  const [state, setState] = useState(0)
  const [res, setRes] = useState(0)

  // useEffect(() => {
  //   console.log(state)
  //   let ch = state[state.length - 1]
  //   let str = state.slice(0, -1)
  //   specialChars.test(ch) && setState(str)
  //   setRes(eval(state))
  // }, [state])

  const handleBtn = (e) => {
    let temp = e.target.value
    if (temp === '=') {
      // let ch = state[state.length - 1]
      // let str = state.slice(0, -1)
      // specialChars.test(ch) && setState(str)
      setRes(eval(state))
      // console.log(res)
    }
    else if (temp === 'AC') {
      setState(0);
      setRes(0)
    }
    else if (temp === 'LC') {
      const slicedStr = state && state.slice(0, -1);
      state.length === 1 ? setState(0) : setState(slicedStr)
      setRes(0)
    }
    else {
      if (specialChars.test(temp)) {
        let ch = state[(state.length) - 1]
        const s = state && (specialChars.test(ch) ? state.replace(ch, temp) : state.concat(temp))
        setState(s)
        // console.log(s)
      }
      else {
        setState(state ? state.concat(temp) : temp)
      }
    }

  }
  return (
    <div className='d-flex align-items-center justify-content-center' style={{ height: '91vh', backgroundColor: '#141515' }}>
      <div className="calciWrapper">
        <div className="result">
          {<h1 className='m-1 p-1'>{state}</h1>}
          {<h4 className='m-1 p-1'>{res ? `= ${res}`: res}</h4>}
        </div>
        <div className='calciBox'>
          {arr.map((e, i) => {
            return (
              <button className='calciBtn' key={i} value={e} onClick={handleBtn}>{e}</button>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default Calculator