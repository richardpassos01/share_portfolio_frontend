import styled from 'styled-components';

import { Roboto_Flex } from 'next/font/google';
const dancingScript = Roboto_Flex({ subsets: ['latin'] });

interface ContentProps {
  backgroundColor?: string;
}

export const Content = styled.header<ContentProps>`
  height: 60px;
  width: 100%;
  background-color: ${(props) => props?.theme?.colors?.blue};
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: flex-start;
`;

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 5% 1fr 10%;
  grid-auto-rows: 50px;
  grid-gap: 10px;
  width: 100%;

  @media ${(props) => props?.theme?.tokens?.desktop} {
    grid-template-columns: 20% 1fr 20%;
  }
`;

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  :nth-child(2) {
    justify-content: flex-end;
  }

  @media ${(props) => props?.theme?.tokens?.desktop} {
    :nth-child(3) {
      order: -1;
    }
  }
`;

export const HeaderTitle = styled.h2.attrs((props) => ({
  className: dancingScript.className,
}))`
  color: ${(props) => props?.theme?.colors?.dark};
`;
