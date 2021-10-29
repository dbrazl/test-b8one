import styled from 'styled-components';

import { FaHeart } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { Colors } from '~/global/styles/colors';

interface IContainer {
  selected: boolean;
}

export const Container = styled.button<IContainer>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.selected ? Colors.Red : Colors.LightGrey)};
  transition: all 500ms;
  cursor: pointer;

  &:hover {
    background: ${(props) =>
      props.selected ? Colors.DarkRed : Colors.LightPink};
  }
`;

export const Heart = styled(FaHeart)`
  width: 24px;
  height: 24px;
  color: ${Colors.White};
`;

interface IHeartOutline {
  hover: boolean;
}

export const HeartOutline = styled(FiHeart).attrs((props: IHeartOutline) => ({
  color: props.hover ? Colors.Red : Colors.DarkGrey,
}))<IHeartOutline>`
  width: 24px;
  height: 24px;
  transition: color 500ms;
`;
