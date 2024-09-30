import { useState, useEffect, useRef } from 'react';


function useTimer() {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    
    const startTimer = () => {
        if (!isRunning) {
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        }
    };

    
    const stopTimer = () => {
        if (isRunning) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
        }
    };


    const resetTimer = () => {
        clearInterval(intervalRef.current);
        setTimer(0);
        setIsRunning(false);
    };

    
    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    return { timer, isRunning, startTimer, stopTimer, resetTimer };
}

export default useTimer;