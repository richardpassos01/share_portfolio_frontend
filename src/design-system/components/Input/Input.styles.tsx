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

export const CheckInput = styled.input`
  border: ${(props) => props.theme.colors.darkGray};
  cursor: pointer;

  &::before {
    content: '';
    width: 1.15em;
    height: 1.15em;
    border-radius: 0.15em;
    display: inline-block;
    vertical-align: text-bottom;
    border: 1px solid ${(props) => props.theme.colors.softBlue};
  }

  &:checked {
    border: 1px solid ${(props) => props.theme.colors.softBlue};
    border: none;
    text-align: center;
    font-weight: bold;
    background: url("data:image/svg+xml,%3Csvg fill='%2362a0ea' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 78.369 78.369' xml:space='preserve'%3E%3Cg id='SVGRepo_bgCarrier' stroke-width='0'%3E%3C/g%3E%3Cg id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'%3E%3C/g%3E%3Cg id='SVGRepo_iconCarrier'%3E %3Cg%3E %3Cpath d='M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704 c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704 C78.477,17.894,78.477,18.586,78.049,19.015z'%3E%3C/path%3E %3C/g%3E %3C/g%3E%3C/svg%3E");
  }
`;

export const CheckInputLabel = styled.label`
  font:
    12px 'Roboto',
    sans-serif;
  color: ${(props) => props.theme.colors.darkGray};
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
  right: 15px;
  top: 55%;
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
    margin: -8px 0 0 -7.5px;
  }

  &:hover::before {
    background-color: ${(props) => props.theme.colors.gray};
    opacity: 0.5;
  }
`;
