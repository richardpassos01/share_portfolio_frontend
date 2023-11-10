import React from 'react';
import {
  Footer,
  Header,
  HeaderDescription,
  HeaderTitle,
  HeaderMoney,
  LoadingLinkContainer,
} from './Overview.styles';
import { Card, Containers, Skeleton } from '@designSystem';
import { BalanceLoading } from '@components/Balance';

const Loading: React.FC = () => {
  return (
    <>
      <Containers.CardContainer>
        <Card>
          <Header>
            <HeaderTitle>
              <HeaderDescription>Perda total</HeaderDescription>
              <HeaderMoney>
                <Skeleton $width={80} $height={20} />
              </HeaderMoney>
            </HeaderTitle>

            <HeaderTitle>
              <HeaderDescription>Lucro total</HeaderDescription>
              <HeaderMoney>
                <Skeleton $width={80} $height={20} />
              </HeaderMoney>
            </HeaderTitle>

            <HeaderTitle>
              <HeaderDescription>Lucro desse mês</HeaderDescription>
              <HeaderMoney>
                <Skeleton $width={80} $height={20} />
              </HeaderMoney>
            </HeaderTitle>
          </Header>
          <BalanceLoading />
          <Footer>
            <Skeleton $width={150} $height={35} />
            <LoadingLinkContainer>
              <Skeleton $width={100} $height={20} />
            </LoadingLinkContainer>
          </Footer>
        </Card>
      </Containers.CardContainer>
    </>
  );
};

export default Loading;
