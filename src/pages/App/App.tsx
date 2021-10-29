import React, { useCallback, useState } from 'react';
import { Product, products } from '~/assets/mock/products';
import ProductCard from '~/global/components/ProductCard';
import { Container, Title, List } from './styles';

function App() {
  const [data, setData] = useState(products);

  function addOrRemoveProductFromMinicart(id: string): void {
    const updatedProducts: Product[] = data.map(
      (product: Product, index: number) => {
        if (index === parseInt(id, 10)) {
          return {
            ...product,
            status: {
              ...product.status,
              onMinicart: !product.status.onMinicart,
            },
          };
        }

        return product;
      }
    );

    setData(updatedProducts);
  }

  const addOrRemoveProductFromMinicartCallback = useCallback(
    addOrRemoveProductFromMinicart,
    [data]
  );

  function addOrRemoveFromWhishList(id: string): void {
    const updatedProducts: Product[] = data.map(
      (product: Product, index: number) => {
        if (index === parseInt(id, 10)) {
          return {
            ...product,
            status: {
              ...product.status,
              onWishList: !product.status.onWishList,
            },
          };
        }

        return product;
      }
    );

    setData(updatedProducts);
  }

  const addOrRemoveFromWhishListCallback = useCallback(
    addOrRemoveFromWhishList,
    [data]
  );

  return (
    <Container className="App">
      <Title>Produtos</Title>
      <List>
        {data.map((product: Product, index: number) => (
          <ProductCard
            key={index.toString()}
            id={index.toString()}
            image={product.image}
            title={product.title}
            fullPrice={product.fullPrice}
            price={product.price}
            installments={product.installments}
            status={product.status}
            onClickMinicart={addOrRemoveProductFromMinicartCallback}
            onClickWhishList={addOrRemoveFromWhishListCallback}
          />
        ))}
      </List>
    </Container>
  );
}

export default App;
