import "swiper/css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

import ProductCard from "/src/components/ui/ProductCard/ProductCard";
import { useProducts } from "/src/context/ProductsHook";

import { SliderBoxView } from "./style";

function Slider(props) {
  const { onSwiper } = props;
  const { products } = useProducts();

  return (
    <SliderBoxView>
      <Swiper
        onSwiper={onSwiper}
        direction={"vertical"}
        slidesPerView={"auto"}
        scrollbar={true}
        spaceBetween={12}
        loop={true}
      >
        {products &&
          products.length &&
          products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
      </Swiper>
    </SliderBoxView>
  );
}

export default Slider;
