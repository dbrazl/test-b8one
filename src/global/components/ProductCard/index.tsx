import React, { useCallback, useMemo } from 'react';
import { Installments, Status } from '~/assets/mock/products';
import { Colors } from '~/global/styles/colors';

import Button from '../Button';
import WhishList from '../WhishList';

import {
  Container,
  ImageContainer,
  WhishListContainer,
  Image,
  Title,
  PriceInfo,
  InstallmentsContainer,
  Label,
  Price,
  FullPrice,
  Bold,
  Check,
} from './styles';

interface IProduct {
  id: string;
  image: string;
  title: string;
  fullPrice: number;
  price: number;
  installments: Installments;
  status: Status;
  // eslint-disable-next-line no-unused-vars
  onClickMinicart?: (id: string) => void;
  // eslint-disable-next-line no-unused-vars
  onClickWhishList?: (id: string) => void;
}

const ProductCard: React.FC<IProduct> = ({
  id,
  image,
  title,
  fullPrice,
  price,
  installments,
  status,
  onClickMinicart = () => {},
  onClickWhishList = () => {},
}) => {
  const index: number = useMemo(() => parseInt(id, 10) + 1, [id]);

  function getPriceFormatted(value: number): string {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  function getFormattedInstallments(): string {
    return `${installments.quantity}x de ${getPriceFormatted(
      installments.price
    )}`;
  }

  function onClickMinicartButton(): void {
    onClickMinicart(id);
  }

  const onClickMinicartButtonCallback = useCallback(onClickMinicartButton, [
    onClickMinicartButton,
    id,
  ]);

  function onClickWhishListButton(): void {
    onClickWhishList(id);
  }

  const onClickWhishListButtonCallback = useCallback(onClickWhishListButton, [
    onClickWhishListButton,
    id,
  ]);

  return (
    <Container index={index}>
      <ImageContainer>
        <WhishListContainer>
          <WhishList
            selected={status.onWishList}
            onClick={onClickWhishListButtonCallback}
          />
        </WhishListContainer>
        <Image src={image} />
      </ImageContainer>
      <Title>{title}</Title>
      <PriceInfo>
        <FullPrice>{getPriceFormatted(fullPrice)}</FullPrice>
        <Price>{getPriceFormatted(price)}</Price>
        <InstallmentsContainer>
          <Label>
            em até <Bold>{getFormattedInstallments()}</Bold>
            {!installments.hasFees && ' sem juros'}
          </Label>
        </InstallmentsContainer>
      </PriceInfo>
      {!status.onMinicart && (
        <Button onClick={onClickMinicartButtonCallback} width="100%">
          adicionar
        </Button>
      )}
      {status.onMinicart && (
        <Button
          onClick={onClickMinicartButtonCallback}
          width="100%"
          buttonBackground={Colors.LightGreen}
          textColor={Colors.DarkGrey}
        >
          <Check />
          adicionado
        </Button>
      )}
    </Container>
  );
};

export default ProductCard;
