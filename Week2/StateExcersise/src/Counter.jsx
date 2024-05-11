import React, { useState, useEffect } from 'react';

function Counter({ initialValue = 0, incrementValue = 1 }) {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount !== null ? Number(savedCount) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  const increment = () => {
    setCount(count + incrementValue);
  }

  const decrement = () => {
    setCount(count - incrementValue);
  }

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default Counter;