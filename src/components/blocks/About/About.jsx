import React from "react";

import { ReactComponent as FarmerImg } from "/src/assets/decorative/farmer.svg";
import Title from "/src/components/ui/Title/Title";
import { P } from "/src/components/styled";

import {
  AboutSectionView,
  AboutContainerView,
  AboutTextBlockView,
  AboutImageBlockView
} from "/src/components/blocks/About/style";

function About({ mb = 0 }) {
  return (
    <AboutSectionView mb={mb}>
      <AboutContainerView>
        <AboutTextBlockView>
          <Title level={1} fontSize={"BIG"} mb={24}>
            Магазин фермерских продуктов с доставкой
          </Title>
          <P mb={10}>
            Все продукты изготавливаются под заказ. Фермеры начинают готовить
            продукты за день до отправки заказа клиентам. Именно поэтому мы
            принимаем заказы заранее и доставляем продукты максимально свежими.
          </P>
        </AboutTextBlockView>
        <AboutImageBlockView>
          <FarmerImg width={446} />
        </AboutImageBlockView>
      </AboutContainerView>
    </AboutSectionView>
  );
}

export default About;
