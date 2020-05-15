import React, { useState, useEffect } from "react"

const piWorker = new Worker('./worker.js', { type: 'module' });

const Component = () => {
  const [data, setData] = useState(0)

  useEffect(() => {
    piWorker.onmessage = event => {
      setData(event.data)
    }
  }, [])
  return (
    <div>
      My Component {data}
      <button onClick={() => piWorker.postMessage(data)}>click me</button>
    </div>
  )
}

export default Component