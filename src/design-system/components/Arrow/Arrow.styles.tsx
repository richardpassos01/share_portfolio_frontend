import styled from 'styled-components';

export const ArrowButton = styled.div`
  display: block;
  position: relative;
  cursor: pointer;
  border-radius: 4px;
  padding: 0px 4px 3px 10px;

  .left-bar,
  .right-bar {
    position: absolute;
    background-color: transparent;
    top: 0;
    width: 8px;
    height: 6px;
    display: block;
    float: right;
    border-radius: 2px;
  }

  .left-bar:after,
  .right-bar:after {
    content: '';
    background-color: DodgerBlue;
    width: 8px;
    height: 2px;
    display: block;
    float: right;
    transition: all 0.5s cubic-bezier(0.25, 1.7, 0.35, 0.8);
    z-index: -1;
  }

  .right-bar {
    left: 7px;
    transform: rotate(-40deg);
    &:after {
      border-radius: 6px 4px 4px 6px;
      transform-origin: center center;
    }
  }

  .left-bar {
    left: 0;
    transform: rotate(40deg);
    &:after {
      border-radius: 4px 6px 6px 4px;
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
