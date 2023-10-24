import { Span } from './Title.styles';

interface Props {
  children: string;
  color?: string;
}

const Title: React.FC<Props> = ({ children, color }) => {
  return (
    <>
      <Span color={color}>{children}</Span>
    </>
  );
};

export default Title;
