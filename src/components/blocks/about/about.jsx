import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { StyledSection, TextWrapper, Text } from "./styles";

function About() {
  return (
    <StyledSection>
      <TextWrapper>
        <Title size={TitleSize.BIG}>
          Negozio di prodotti agricoli con consegna
        </Title>
        <Text>
          Tutti i prodotti sono realizzati su ordinazione. Gli agricoltori
          iniziano a preparare il cibo il giorno prima che l'ordine venga
          inviato ai clienti. Ecco perché accettiamo gli ordini in anticipo e
          consegniamo i prodotti il ​​più freschi possibile.
        </Text>
      </TextWrapper>
    </StyledSection>
  );
}

export default About;
