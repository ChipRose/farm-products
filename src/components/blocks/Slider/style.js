import { SwiperSlide } from "swiper/react";
import styled from "styled-components";

const SliderBoxView = styled.div`
  height: inherit;
  width: inherit;
  overflow: hidden;
  .swiper {
    height: 100%;
    width: 100%;
  }
  .swiper-slide {
    height: 288px;
    width: 100%;
  }
`;

const SlideView = styled(SwiperSlide)`
  height: 288px;
  width: 100%;
`;

export { SliderBoxView, SlideView };
