import React, { useEffect, useState, useRef } from 'react';

function StatCounter ({ endValue }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; 
    const incrementTime = duration / endValue

    const updateCounter = () => {
      start += 1;
      setCount(start);
      if (start < endValue) {
        setTimeout(updateCounter, incrementTime);
      }
    };

    updateCounter();
  }, [isVisible, endValue]);

  return <span ref={ref}>{count}</span>;
};

export default StatCounter;
