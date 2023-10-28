import {
  Content,
  NavHeaderContainer,
  NavHeaderItem,
  Underline,
} from './NavHeader.styles';
import { Paragraph, Colors } from '../../index';
import { useState } from 'react';

interface Props {
  $backgroundColor?: string;
  children?: JSX.Element[];
}

export function Item({
  name,
  onClick,
  activated,
}: {
  name: string;
  onClick: () => void;
  activated: string;
}) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };

  const isCurrentItemActivate = name === activated;

  return (
    <NavHeaderItem
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={onClick}
    >
      <Paragraph
        $color={Colors.darkGray}
        $weight={isCurrentItemActivate ? 600 : 400}
      >
        {name}
      </Paragraph>
      {isMouseOver || isCurrentItemActivate ? (
        <Underline $activated={true} />
      ) : (
        <Underline />
      )}
    </NavHeaderItem>
  );
}

const NavHeader: React.FC<Props> = ({ $backgroundColor, children }) => {
  return (
    <>
      <Content $backgroundColor={$backgroundColor}>
        <NavHeaderContainer>{children}</NavHeaderContainer>
      </Content>
    </>
  );
};

export default NavHeader;
