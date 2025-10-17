import React, { useState, useEffect } from 'react';

export default function App() {
  const [customFocusTime, setCustomFocusTime] = useState(25);
  const [minutes, setMinutes] = useState(customFocusTime);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes !== 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg").play();
            setIsActive(false);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, minutes]);

  const handleFocusTimeChange = (value) => {
    const newTime = parseInt(value, 10);
    if (!isNaN(newTime) && newTime > 0) {
        setCustomFocusTime(newTime);
        if (!isActive) {
            setMinutes(newTime);
            setSeconds(0);
        }
    }
  };

  const startTimer = () => {
    if (minutes === 0 && seconds === 0) {
        setMinutes(customFocusTime);
    }
    setIsActive(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(customFocusTime);
    setSeconds(0);
  };
  
  useEffect(() => {
    document.title = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} - Focus Timer`;
  }, [minutes, seconds]);

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen bg-gray-900 transition-colors duration-500`}>
      <div className="bg-gray-800 p-8 sm:p-12 rounded-3xl shadow-2xl w-11/12 max-w-md text-center text-white">
        
        <div className="mb-8">
          <label htmlFor="focus-time" className="block text-sm font-medium text-gray-300 mb-2">
            Focus Time (minutes)
          </label>
          <input
            id="focus-time"
            type="number"
            min="1"
            value={customFocusTime}
            onChange={(e) => handleFocusTimeChange(e.target.value)}
            disabled={isActive}
            className="w-full px-3 py-2 text-center bg-gray-700 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          />
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-bold tracking-wider uppercase text-gray-100">
          Focus Timer
        </h1>
        
        <div className="my-10">
          <p className="text-7xl sm:text-8xl md:text-9xl font-mono font-extrabold text-white">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 min-h-[60px]">
          {!isActive ? (
            <>
              <button
                onClick={startTimer}
                className={`w-full sm:w-auto px-12 py-4 text-xl font-bold text-white uppercase tracking-wider bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105`}
              >
                Start
              </button>
              <button
                onClick={resetTimer}
                className="w-full sm:w-auto px-8 py-3 font-semibold text-white bg-gray-600 rounded-xl hover:bg-gray-700 transition-all duration-300"
              >
                Reset
              </button>
            </>
          ) : (
            <div className={`w-full sm:w-auto px-12 py-4 text-xl font-bold text-white uppercase tracking-wider bg-blue-600 rounded-xl shadow-lg opacity-50 cursor-not-allowed`}>
              In Progress
            </div>
          )}
        </div>
      </div>
      
      <footer className="absolute bottom-4 text-gray-500 text-sm">
        Built for pure, unbreakable focus.
      </footer>
    </div>
  );
}

