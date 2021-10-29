import styled from 'styled-components';
import { Colors } from '~/global/styles/colors';

interface IContainer {
  background: Colors;
  hoverBackground: Colors;
  textColorHover: Colors;
  color: Colors;
  width: string;
}

export const Container = styled.button<IContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  padding: 12px 24px;
  border-radius: 5px;
  background: ${(props) => props.background};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1px;
  color: ${(props) => props.color};
  transition: all 500ms;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.hoverBackground};
    color: ${(props) => props.textColorHover};
  }
`;
