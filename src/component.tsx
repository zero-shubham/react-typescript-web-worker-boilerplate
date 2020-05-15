import React, { useState, useEffect } from "react"
import { useWorker } from 'react-hooks-worker';

const createWorker = () => new Worker('./slowFib.worker', { type: 'module' });

const piWorker = new Worker('./worker.js', { type: 'module' });


const CalcFib = ({ count }) => {
  const { result, error } = useWorker(createWorker, count);
  if (error) return <div>Error: {error}</div>;
  return <div>Result: {result}</div>;
};

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

      <CalcFib count={10} />
    </div>
  )
}

export default Component