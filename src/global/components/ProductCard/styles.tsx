import styled from 'styled-components';
import { FiCheck } from 'react-icons/fi';
import { Colors } from '~/global/styles/colors';

interface IContainer {
  index: number;
}

function isDivideByThree(props: IContainer): boolean {
  return props.index % 3 === 0;
}

function isDivideByTwo(props: IContainer): boolean {
  return props.index % 2 === 0;
}

export const Container = styled.li<IContainer>`
  list-style: none;
  background: ${Colors.White};
  border-radius: 8px;
  padding: 32px;
  width: calc(304px - 64px);
  margin: 0 44px;
  margin-bottom: 44px;

  @media (min-width: 740px) {
    margin: 0;
    margin-bottom: 44px;
    margin-right: ${(props) => (!isDivideByTwo(props) ? 44 : 0)}px;
  }

  @media (min-width: 1088px) {
    margin-right: ${(props) => (!isDivideByThree(props) ? 44 : 0)}px;
  }
`;

export const WhishListContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const ImageContainer = styled.div`
  margin: 0 auto;
  width: 240px;
  height: 240px;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Title = styled.h3`
  margin-top: 32px;
  font-size: 14px;
  font-weight: 500;
  color: ${Colors.DarkGrey};
`;

export const PriceInfo = styled.div`
  margin-top: 24px;
  margin-bottom: 32px;
`;

export const FullPrice = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${Colors.Grey};
  text-decoration: line-through;
`;

export const Price = styled.p`
  margin: 4px 0;
  font-size: 20px;
  font-weight: 600;
  color: ${Colors.Red};
`;

export const InstallmentsContainer = styled.p`
  display: flex;
`;

interface ILabel {
  black?: boolean;
}

export const Label = styled.p<ILabel>`
  color: ${(props) => (props.black ? Colors.Black : Colors.Grey2)};
`;

export const Bold = styled.b`
  color: black;
`;

export const Check = styled(FiCheck)`
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;
