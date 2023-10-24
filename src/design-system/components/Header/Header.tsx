import {
  Content,
  HeaderContainer,
  HeaderItem,
  HeaderTitle,
} from './Header.styles';
import Image from 'next/image';
import { HyperLink, Icons } from '../../index';

interface Props {
  backgroundColor?: string;
  children?: JSX.Element[];
}

const Header: React.FunctionComponent<Props> = ({
  backgroundColor,
  children,
}) => {
  return (
    <>
      <Content backgroundColor={backgroundColor}>
        <HeaderContainer>
          <HyperLink href="/">
            <HeaderItem>
              <Image src={Icons.Icon} width={70} height={70} alt="Icon" />
              <HeaderTitle>Analytics</HeaderTitle>
            </HeaderItem>
          </HyperLink>

          {children}
        </HeaderContainer>
      </Content>
    </>
  );
};

export default Header;
