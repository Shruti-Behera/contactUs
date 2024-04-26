import React, { useState, useEffect, useMemo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CounterFile = () => {
  const [count, setCount] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [pausedAt, setPausedAt] = useState(null);

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        if (count < 50) {
          setCount(prevCount => prevCount + 1);
        }
      }, 50);
    } else if (pausedAt !== null) {
      interval = setInterval(() => {
        setCount(prevCount => Math.max(0, prevCount - 1));
      }, 50);
    }
    return () => clearInterval(interval);
  }, [count, isPaused, pausedAt]);

  const handleStart = () => {
    setIsPaused(false);
    setPausedAt(null);
  };

  const handlePause = () => {
    setIsPaused(true);
    setPausedAt(count);
  };

  const displayCount = useMemo(() => {
    return count; 
  }, [count]);

  return (
    <Container>
      <Row>
        <Col md={12} className='text-center'>Counter: {displayCount}</Col>
        <Col md={12} className='text-center'>
          <button onClick={handleStart} disabled={!isPaused}>Start</button>
        </Col>
        <Col md={12} className='text-center'>
          <button onClick={handlePause} disabled={isPaused}>Pause</button>
        </Col>
      </Row>
    </Container>
  );
};

export default CounterFile;