import React from 'react';
import { Loader } from '../Loader';
import { ButtonStyle, Props } from './Button.styles';
import { Colors } from '../../styles/Colors';

type ButtonProps = Props & {
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ disabled, $isLoading, ...rest }) => {
  return (
    <ButtonStyle
      {...rest}
      disabled={$isLoading || disabled}
      $isLoading={$isLoading}
    >
      {$isLoading ? (
        <Loader $color={Colors.darkGray} $size={20} />
      ) : (
        rest.children
      )}
    </ButtonStyle>
  );
};

export default Button;
