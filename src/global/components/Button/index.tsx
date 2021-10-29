import React, { ReactNode } from 'react';
import { Colors } from '~/global/styles/colors';

import { Container } from './styles';

interface IButton {
  buttonBackground?: Colors;
  buttonHoverBackground?: Colors;
  textColor?: Colors;
  textColorHover?: Colors;
  children: ReactNode;
  width?: string;
  onClick?: () => void;
}

const Button: React.FC<IButton> = ({
  buttonBackground = Colors.Primary,
  buttonHoverBackground = Colors.DarkGreen,
  textColor = Colors.White,
  textColorHover = Colors.White,
  children,
  width = 'auto',
  onClick = () => {},
}) => (
  <Container
    background={buttonBackground}
    hoverBackground={buttonHoverBackground}
    textColorHover={textColorHover}
    color={textColor}
    width={width}
    onClick={onClick}
  >
    {children}
  </Container>
);

export default Button;
