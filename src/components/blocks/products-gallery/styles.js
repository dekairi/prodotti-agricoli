import styled from "styled-components";
import { Swiper } from "swiper/react";

export const ProductsItem = styled.div`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colorWhite};
  margin-bottom: ${(props) => props.theme.indent};
  &:last-child {
    margin-bottom: 0;
  }
  padding: ${(props) => props.theme.indent};
`;

export const ProductSwiper = styled(Swiper)`
  width: 727px;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;
