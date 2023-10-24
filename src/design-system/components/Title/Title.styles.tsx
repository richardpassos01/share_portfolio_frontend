import styled from 'styled-components';

interface Props {
  color?: string;
}

export const Span = styled.span<Props>`
  font-family: system-ui;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5em;
  line-height: 32px;
  color: ${(props) => props.color ?? props.theme.colors.black};
  margin-left: 0.3em;
  font-size: 27px;
`;
