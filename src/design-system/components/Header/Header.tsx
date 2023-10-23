import {
  Content,
  HeaderContainer,
  HeaderIcon,
  HeaderItem,
} from './Header.styles';
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
          <HeaderItem>
            <HyperLink href="/">
              <HeaderIcon src={Icons.Icon} />
            </HyperLink>
          </HeaderItem>
          {children}
        </HeaderContainer>
      </Content>
    </>
  );
};

export default Header;
