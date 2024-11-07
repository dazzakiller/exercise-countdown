import React, { useState, useEffect } from 'react';

function CountdownClock() {
  const [restDuration, setRestDuration] = useState(10);
  const [exerciseDuration, setExerciseDuration] = useState(30);
  const [time, setTime] = useState(10);
  const [intervalId, setIntervalId] = useState(null);
  const [cycle, setCycle] = useState(1);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime(prevTime => {
          if (prevTime <= 0) {
            const nextCycle = cycle === 1 ? 2 : 1;
            setCycle(nextCycle);
            return nextCycle === 1 ? restDuration : exerciseDuration;
          }
          return prevTime - 1;
        });
      }, 1000);

      setIntervalId(id);
      return () => clearInterval(id);
    }
  }, [isRunning, cycle, restDuration, exerciseDuration]);

  const handleStop = () => {
    setIsRunning(false);
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  const handleStart = () => {
    setTime(cycle === 1 ? restDuration : exerciseDuration);
    setIsRunning(true);
  };

  const handleReset = () => {
    setTime(restDuration);
    setCycle(1);
    setIsRunning(false);
  };

  const handleRestDurationChange = (e) => {
    const value = parseInt(e.target.value);
    setRestDuration(value);
    if (!isRunning && cycle === 1) {
      setTime(value);
    }
  };

  const handleExerciseDurationChange = (e) => {
    const value = parseInt(e.target.value);
    setExerciseDuration(value);
    if (!isRunning && cycle === 2) {
      setTime(value);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 text-white p-8 rounded-xl shadow-2xl w-96">
        {/* Duration Controls */}
        <div className="space-y-6 mb-8">
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm">Rest Duration</label>
              <span className="text-blue-500 font-bold">{restDuration}s</span>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="5"
                max="60"
                step="5"
                value={restDuration}
                onChange={handleRestDurationChange}
                disabled={isRunning}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer
                          disabled:opacity-50 disabled:cursor-not-allowed
                          [&::-webkit-slider-thumb]:appearance-none
                          [&::-webkit-slider-thumb]:w-4
                          [&::-webkit-slider-thumb]:h-4
                          [&::-webkit-slider-thumb]:bg-blue-500
                          [&::-webkit-slider-thumb]:rounded-full
                          [&::-webkit-slider-thumb]:cursor-pointer"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm">Exercise Duration</label>
              <span className="text-green-500 font-bold">{exerciseDuration}s</span>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="10"
                max="120"
                step="5"
                value={exerciseDuration}
                onChange={handleExerciseDurationChange}
                disabled={isRunning}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer
                          disabled:opacity-50 disabled:cursor-not-allowed
                          [&::-webkit-slider-thumb]:appearance-none
                          [&::-webkit-slider-thumb]:w-4
                          [&::-webkit-slider-thumb]:h-4
                          [&::-webkit-slider-thumb]:bg-green-500
                          [&::-webkit-slider-thumb]:rounded-full
                          [&::-webkit-slider-thumb]:cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Timer Display */}
        <h2 className="text-2xl font-bold mb-4 text-center">
          {cycle === 1 ? `Rest (${restDuration}s)` : `Exercise (${exerciseDuration}s)`}
        </h2>
        <div className={`text-8xl font-bold mb-6 text-center transition-colors ${
          cycle === 1 ? 'text-blue-500' : 'text-green-500'
        }`}>
          {time}
        </div>

        {/* Control Buttons */}
        <div className="flex gap-4">
          {isRunning ? (
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg w-full transition-colors"
              onClick={handleStop}
            >
              Stop
            </button>
          ) : (
            <div className="flex gap-2 w-full">
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg flex-1 transition-colors"
                onClick={handleStart}
              >
                Start
              </button>
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg flex-1 transition-colors"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CountdownClock;
