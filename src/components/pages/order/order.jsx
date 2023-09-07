import React, { useState, useEffect } from "react";
import ProductsGallery from "/src/components/blocks/products-gallery/products-gallery";
import Buy from "/src/components/blocks/buy/buy";
import Products from "/src/components/blocks/products/products";
import { LeftWrapper, StyledSection } from "./styles";

function Order({ products }) {
  const [checkedItems, setCheckedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);

  useEffect(() => {
    let newPrice = 0;
    for (let i = 0; i < checkedItems.length; i++) {
      for (let j = 0; j < products.length; j++) {
        if (checkedItems[i] === products[j].title) {
          newPrice += products[j].description.price;
        }
      }
    }
    setTotalPrice(newPrice);
  }, [checkedItems, products]);

  const handleChange = (event) => {
    if (!checkedItems.includes(event.target.name)) {
      setCheckedItems([...checkedItems, event.target.name]);
      swiperRef.slideTo(event.target.id, 0);
    } else {
      setCheckedItems((prev) =>
        prev.filter((item) => item !== event.target.name)
      );
    }
  };

  return (
    <StyledSection>
      <LeftWrapper>
        <Products
          products={products}
          onChange={handleChange}
          checkedItems={checkedItems}
        />
        <Buy totalPrice={totalPrice} order={checkedItems} />
      </LeftWrapper>
      <ProductsGallery products={products} setSwiperRef={setSwiperRef} />
    </StyledSection>
  );
}

export default Order;
