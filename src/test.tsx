import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import './test.css'
interface Entry extends IntersectionObserverEntry {
  isVisible: boolean
}
export function Test() {
  const [stat, setStat] = useState(0)
  const ref = useRef() as MutableRefObject<HTMLDivElement>
  const rootEle = useRef() as MutableRefObject<HTMLDivElement>
  useEffect(() => {
    const ob = new IntersectionObserver(
      entries => {
        console.log((entries[0] as Entry).intersectionRatio)
        setStat(entries?.[0]?.intersectionRatio)
      },
      { root: rootEle.current }
    )
    console.log(123)
    ob.observe(ref.current)
    return () => {
      ob.disconnect()
    }
  }, [])
  return (
    <div className="wrap" ref={rootEle}>
      <div className="a"></div>
      <div className="b" ref={ref}></div>
      <div className="c"></div>
      <div className="d"></div>
      <div className="d"></div>
      <div className="d"></div>
    </div>
  )
}
