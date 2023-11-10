import styled, { keyframes, css } from 'styled-components';

const SkeletonKeyframe = keyframes`
  0% {
    background-position: 200px 0;
  }
  100% {
    background-position: -200px 0;
  }
`;

interface SkeletonProps {
  $width: number;
  $height: number;
  $circular?: boolean;
}

const skeletonStyles = css<SkeletonProps>`
  animation: ${SkeletonKeyframe} 2s infinite linear;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0f0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  width: ${(props) => `${props.$width}px`};
  height: ${(props) => `${props.$height}px`};
  border-radius: ${(props) => (props.$circular ? '50%' : '15px')};
`;

const Skeleton = styled.div<SkeletonProps>`
  ${skeletonStyles}
`;

export default Skeleton;
