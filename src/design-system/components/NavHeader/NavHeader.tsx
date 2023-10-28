import {
  Content,
  NavHeaderContainer,
  NavHeaderItem,
  Underline,
} from './NavHeader.styles';
import { HyperLink, Paragraph, Colors } from '../../index';

interface Props {
  $backgroundColor?: string;
  HamburgerMenu?: React.FC;
  children?: JSX.Element[];
}

const NavHeader: React.FC<Props> = ({ $backgroundColor, children }) => {
  return (
    <>
      <Content $backgroundColor={$backgroundColor}>
        <NavHeaderContainer>
          <HyperLink href="/">
            <NavHeaderItem>
              <Paragraph $color={Colors.darkGray}>Inicío</Paragraph>
              <Underline />
            </NavHeaderItem>
          </HyperLink>
          {children}
        </NavHeaderContainer>
      </Content>
    </>
  );
};

export default NavHeader;
