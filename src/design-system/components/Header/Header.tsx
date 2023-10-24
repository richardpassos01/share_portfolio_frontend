import {
  Content,
  HeaderContainer,
  HeaderItem,
  HeaderTitle,
} from './Header.styles';
import Image from 'next/image';
import { HyperLink, Icons } from '../../index';
import Menu from '@components/Hamburguer';

interface Props {
  backgroundColor?: string;
  boxShadown?: boolean;
  children?: JSX.Element[];
}

const Header: React.FC<Props> = ({ backgroundColor, boxShadown, children }) => {
  return (
    <>
      <Menu />
      {/* <Content backgroundColor={backgroundColor} boxShadown={boxShadown}>
        <HeaderContainer>
          <HeaderItem>
            <HyperLink href="/">
              <Image src={Icons.Icon} width={60} height={60} alt="Icon" />
              <HeaderTitle>Portfólio</HeaderTitle>
            </HyperLink>
          </HeaderItem>
          {children}
        </HeaderContainer>
      </Content> */}
    </>
  );
};

export default Header;
