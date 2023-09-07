import React from "react";
import GalleryCard from "../../ui/gallery-card/gallery-card";
import { ProductSwiper, ProductsItem } from "./styles";
import { SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";

function ProductsGallery({ products, setSwiperRef }) {
  const canBuy = products.length > 0;

  return canBuy ? (
    <ProductSwiper
      onSwiper={setSwiperRef}
      modules={[Pagination, Mousewheel, Scrollbar]}
      spaceBetween={0}
      direction="vertical"
      slidesPerView="auto"
      scrollbar={{ draggable: true }}
      mousewheel
      pagination={{
        type: "fraction"
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductsItem>
            <GalleryCard product={product}></GalleryCard>
          </ProductsItem>
        </SwiperSlide>
      ))}
    </ProductSwiper>
  ) : (
    <p>I prodotti erano troppo gustosi e sono stati presi tutti</p>
  );
}

export default ProductsGallery;
