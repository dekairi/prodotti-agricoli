import React, { useState } from "react";
import Button from "/src/components/ui/button/button";
import Price from "/src/components/blocks/price/price";
import { Form } from "/src/components/styled";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { StyledWrapper } from "./styles";
import Input from "../../ui/input/input";

function Buy({ totalPrice, order }) {
  const [address, setAddress] = useState("");

  const handleBuy = (e) => {
    e.preventDefault();
    alert(
      `Grazie per il suo ordine.
       Ha preso: ${order.join(", ")}.
       Il prezzo: ${totalPrice} €.
       Indirizzo: ${address}`
    );
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  return (
    <StyledWrapper>
      <Form onSubmit={handleBuy}>
        <Title size={TitleSize.EXTRA_SMALL}>Effettuare un ordine</Title>
        <Input
          placeholder="Inserisci l'indirizzo di spedizione"
          name="address"
          value={address}
          onChange={handleAddress}
          required
        />
        <Price price={totalPrice}></Price>
        <Button type="submit" disabled={totalPrice === 0 || address === ""}>
          Acquista
        </Button>
      </Form>
    </StyledWrapper>
  );
}

export default Buy;
