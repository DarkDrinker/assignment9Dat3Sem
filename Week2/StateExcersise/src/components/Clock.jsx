import React, {useState, useEffect} from 'react';

export default function IntervalCount(){
    const [count, setCount] = useState(0)
    const [startCountDown, setStartCountDown] = useState(false)

    useEffect(() => {
        let intervalId;

        if (startCountDown) {
            intervalId = setInterval(() => {
                setCount(prevCount => {
                    if (prevCount === 0) {
                        clearInterval(intervalId);
                        setStartCountDown(false);
                    }
                    return prevCount - 1;
                });
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [startCountDown]);

    const handleStartCountByInput = () => {
        const minutes = parseInt(document.getElementById('minutes').value);
        const seconds = parseInt(document.getElementById('seconds').value);
        console.log(minutes, seconds);
        const totalSeconds = minutes * 60 + seconds;

        setCount(totalSeconds);
        setStartCountDown(true);
    };

    const handleStartCountFixed = (minutes) => {
        const totalSeconds = minutes * 60;
        setCount(totalSeconds);
        setStartCountDown(true);
    }


    const handleResetCount = () => {
        setCount(0);
        setStartCountDown(false);
    };

    return (
        <div>
            <h2>{count}</h2>
            <form>
                <input type="number" id="minutes" placeholder='Minutes'></input>
                <input type="number" id="seconds" placeholder='Seconds'></input>
                <button onClick={handleStartCountByInput}>Start</button>
                <button onClick={handleResetCount}>Reset</button>
            </form>
            <button onClick={() => handleStartCountFixed(5)}>Start 5 minute</button>
            <button onClick={() => handleStartCountFixed(10)}>Start 10 minutes</button>
            <button onClick={() => handleStartCountFixed(15)}>Start 15 minutes</button>
        </div>
    )
}