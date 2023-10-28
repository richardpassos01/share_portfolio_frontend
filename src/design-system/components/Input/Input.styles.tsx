import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`;

export const TextField = styled.div`
  position: relative;
  width: 100%;
`;

export const Label = styled.label<{ $error: string }>`
  position: absolute;
  font-size: 1rem;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  color: ${(props) =>
    props.$error ? props.theme.colors.red : props.theme.colors.darkGray};
  padding: 0 0.3rem;
  margin: 0 0.5rem;
  transition: 0.1s ease-out;
  transform-origin: left top;
  pointer-events: none;
  user-select: none;
`;

export const Input = styled.input<{ $error: string }>`
  width: 100%;
  font-size: 15px;
  font-weight: 300;
  outline: none;
  border: 1px solid
    ${(props) =>
      props.$error ? props.theme.colors.red : props.theme.colors.gray};
  border-radius: 5px;
  padding: 1rem 0.7rem;
  color: ${(props) => props.theme.colors.darkGray};
  transition: 0.1s ease-out;

  &:focus {
    border-color: ${(props) => props.theme.colors.blue};
  }

  &:focus + ${Label} {
    color: ${(props) => props.theme.colors.blue};
  }

  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    font-size: 14px;
    top: 0;
    transform: translateY(-50%) scale(0.9);
  }
`;

export const ErrorText = styled.p`
  color: ${(props) => props.theme.colors.red};
  font-size: 0.8rem;
  margin-top: 0.2rem;
`;

export const ShowPasswordButton = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    width: 35px;
    height: 35px;
    background-color: transparent;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s;
    margin: -7px 0 0 -8px;
  }

  &:hover::before {
    background-color: ${(props) => props.theme.colors.gray};
    opacity: 0.5;
  }
`;
