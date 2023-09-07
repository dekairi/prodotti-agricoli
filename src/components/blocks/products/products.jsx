import React from "react";
import Checkbox from "../../ui/checkbox/checkbox";
import Title, { TitleSize } from "../../ui/title/title";
import { ProductsItem, ProductsList, StyledWrapper } from "./styles";

function Products({ products, onChange, checkedItems }) {
  const canBuy = products.length > 0;

  return (
    <StyledWrapper>
      {canBuy ? (
        <>
          <Title size={TitleSize.EXTRA_SMALL}>Seleziona prodotti</Title>
          <ProductsList>
            {products.map((product) => (
              <ProductsItem key={product.id}>
                {product.title}
                <Checkbox
                  selectValue={
                    checkedItems.includes(product.title) && product.title
                  }
                  name={product.title}
                  value={product.title}
                  onChange={onChange}
                  id={product.id}
                />
              </ProductsItem>
            ))}
          </ProductsList>
        </>
      ) : (
        <p>I prodotti erano troppo gustosi e sono stati presi tutti</p>
      )}
    </StyledWrapper>
  );
}

export default Products;
