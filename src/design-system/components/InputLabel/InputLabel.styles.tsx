import styled from "styled-components";

export const InputLabel = styled.label`
  font-weight: 300;
  text-align: left;
  font-size: 14px;
  font-family: system-ui;
  color: ${props => props.color ?? props.theme.colors.black};
`;
