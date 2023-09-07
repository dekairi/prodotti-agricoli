import React from "react";
import Title from "/src/components/ui/title/title";
import FeatureCard from "/src/components/ui/feature-card/feature-card";
import Button from "/src/components/ui/button/button";
import { StyledSection, FeaturesList, FeaturesItem } from "./styles";

function Features({ features }) {
  return (
    <StyledSection>
      {features?.length ? (
        <>
          <Title as="h2">Perché i prodotti agricoli sono migliori?</Title>
          <FeaturesList $isGridList>
            {features.map((feature) => (
              <FeaturesItem key={feature.id}>
                <FeatureCard {...feature} />
              </FeaturesItem>
            ))}
          </FeaturesList>
          <Button link="/order">Acquista</Button>
        </>
      ) : null}
    </StyledSection>
  );
}

export default Features;
