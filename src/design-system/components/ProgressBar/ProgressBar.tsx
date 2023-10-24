import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #e0e0e0;
  z-index: 999;
`;

const ProgressBarFill = styled.div<{ width: number }>`
  height: 100%;
  width: ${(props) => props.width}%;
  background-color: #007bff;
  transition: width 0.3s ease;
`;

const ProgressBar = ({ isLoading }: { isLoading: boolean }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight - windowHeight;
      const progress = (scrollPosition / pageHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  useEffect(() => {
    if (isLoading) {
      let progress = 0;

      const interval = setInterval(() => {
        if (progress < 100) {
          setLoadingProgress(progress);
          progress += 1;
        } else {
          clearInterval(interval);
        }
      }, 30);
    }
  }, [isLoading]);

  return (
    <ProgressBarContainer>
      {isLoading ? (
        <ProgressBarFill width={loadingProgress} />
      ) : (
        <ProgressBarFill width={100} />
      )}
    </ProgressBarContainer>
  );
};

export default ProgressBar;
