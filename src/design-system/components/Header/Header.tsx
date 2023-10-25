import {
  Content,
  HeaderContainer,
  HeaderItem,
  HeaderTitle,
} from './Header.styles';
import Image from 'next/image';
import { Hide, HyperLink, Icons, Tokens } from '../../index';

interface Props {
  backgroundColor?: string;
  boxShadown?: boolean;
  HamburgerMenu?: React.FC;
  children?: JSX.Element[];
}

const Header: React.FC<Props> = ({ backgroundColor, boxShadown, children }) => {
  return (
    <>
      <Content backgroundColor={backgroundColor} boxShadown={boxShadown}>
        <HeaderContainer>
          <HeaderItem>
            <HyperLink href="/">
              <Image src={Icons.Icon} width={60} height={60} alt="Icon" />
              <Hide on={Tokens.MAX_WIDTH_MOBILE}>
                <HeaderTitle>Portfólio</HeaderTitle>
              </Hide>
            </HyperLink>
          </HeaderItem>
          {children}
        </HeaderContainer>
      </Content>
    </>
  );
};

export default Header;
