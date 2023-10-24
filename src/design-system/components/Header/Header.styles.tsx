import styled from 'styled-components';

import { Roboto_Serif } from 'next/font/google';
const dancingScript = Roboto_Serif({ weight: '500', subsets: ['latin'] });

interface ContentProps {
  backgroundColor?: string;
  boxShadown?: boolean;
}

export const Content = styled.header<ContentProps>`
  height: 80px;
  background-color: ${(props) =>
    props.backgroundColor ?? props.theme.colors.white};
  display: flex;
  padding: 0 12% 0 12%;
  align-items: center;
  justify-content: flex-start;
  box-shadow: ${(props) =>
    props.boxShadown ? '0px 8px 12px rgba(200, 200, 200, 0.5)' : '0'};

  @media ${(props) => props.theme.tokens.tablet} {
    padding: 0 2% 0 2%;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media ${(props) => props.theme.tokens.tablet} {
    flex-direction: column;
  }
`;

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h2.attrs((props) => ({
  className: dancingScript.className,
}))`
  color: ${(props) => props.theme.colors.darkBlue};
  margin-left: 15%;

  @media ${(props) => props.theme.tokens.tablet} {
    margin-left: 0;
    margin-top: 10px;
    text-align: center;
  }
`;
