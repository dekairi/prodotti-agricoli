import React from "react";
import Description from "../description/description";
import Characteristics from "/src/components/ui/characteristics/characteristics";
import Title, { TitleSize } from "/src/components/ui/title/title";
import Tabs from "/src/components/ui/tabs/tabs";
import { ProductImage, DescriptionWrap } from "./styles";
import Properties from "../properties/properties";

function GalleryCard({ product }) {
  const tabs = [
    {
      title: "Descrizione",
      content: (
        <Description
          description={product.description.text}
          price={product.description.price}
          weight={product.description.weight}
        />
      )
    },
    {
      title: "Caratteristiche",
      content: (
        <Characteristics
          exactWeight={product.characteristics.exactWeight}
          expire={product.characteristics.expire}
          race={product.characteristics.race}
          origin={product.characteristics.origin}
        />
      )
    },
    {
      title: "Valori nutriz. medi",
      content: (
        <Properties
          energyValue={product.properties.energyValue}
          nutritionalValue={product.properties.nutritionalValue}
        />
      )
    }
  ];

  return (
    <>
      <ProductImage src={product.image} />
      <DescriptionWrap>
        <Title size={TitleSize.SMALL}>{product.title}</Title>
        <Tabs tabs={tabs} />
      </DescriptionWrap>
    </>
  );
}

export default GalleryCard;
