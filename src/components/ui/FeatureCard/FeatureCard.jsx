import React from "react";
import Title from "/src/components/ui/Title/Title";
import { P } from "/src/components/styled";

import {
  FeatureCardView,
  TopFeatureCardView,
  FeatureCardImageBlockView,
  FeatureCardStickerView
} from "./style";

function FeatureCard({ card }) {
  const { title, description, image, sticker, isPositive } = card;
  return (
    <FeatureCardView isPositive={isPositive ? 1 : 0} tabIndex="0">
      <TopFeatureCardView>
        <FeatureCardImageBlockView>{image}</FeatureCardImageBlockView>
        <div>
          <FeatureCardStickerView isPositive={isPositive ? 1 : 0}>
            {sticker}
          </FeatureCardStickerView>
          <Title level={3} fontSize={"EXTRA_SMALL"}>
            {title}
          </Title>
        </div>
      </TopFeatureCardView>
      <P>{description}</P>
    </FeatureCardView>
  );
}

export default FeatureCard;
