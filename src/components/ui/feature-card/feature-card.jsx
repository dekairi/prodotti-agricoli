import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { StyledFeatureCard, Image, StyledType, StyledText } from "./styles";

export const featureType = {
  agricoli: "Prodotti agricoli",
  negozio: "Conservare i prodotti"
};

function FeatureCard({ title, text, image, type }) {
  return (
    <StyledFeatureCard $type={featureType[type]}>
      <Image src={image} width={56} height={56} alt="icon" />
      <StyledType $type={featureType[type]}>{featureType[type]}</StyledType>
      <Title size={TitleSize.EXTRA_SMALL} as="h3">
        {title}
      </Title>
      <StyledText>{text}</StyledText>
    </StyledFeatureCard>
  );
}

export default FeatureCard;
