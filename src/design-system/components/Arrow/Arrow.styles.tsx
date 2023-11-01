import styled from 'styled-components';

export const ArrowButton = styled.div`
  display: block;
  position: relative;
  cursor: pointer;
  border-radius: 4px;
  padding: 0px 5px 3px 14px;

  .left-bar,
  .right-bar {
    position: absolute;
    background-color: transparent;
    top: 0;
    width: 12px;
    height: 8px;
    display: block;
    float: right;
    border-radius: 2px;
  }

  .left-bar:after,
  .right-bar:after {
    content: '';
    background-color: DodgerBlue;
    width: 12px;
    height: 3px;
    display: block;
    float: right;
    transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 0.8);
    z-index: -1;
  }

  .right-bar {
    left: 10px;
    transform: rotate(-40deg);
    &:after {
      border-radius: 10px 6px 6px 10px;
      transform-origin: center center;
    }
  }

  .left-bar {
    left: 0;
    transform: rotate(40deg);
    &:after {
      border-radius: 6px 10px 10px 6px;
      transform-origin: center center;
    }
  }

  &.open .left-bar:after {
    transform: rotate(-80deg);
  }

  &.open .right-bar:after {
    transform: rotate(80deg);
  }
`;
