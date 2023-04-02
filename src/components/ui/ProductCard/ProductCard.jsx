import React from "react";
import Title from "/src/components/ui/Title/Title";
import Tabs from "/src/components/ui/Tabs/Tabs";

import {
  ProductCardView,
  ProductCardImageBlockView,
  ProductCardTextBlockView
} from "./style";

function ProductCard(props) {
  const {
    image,
    title,
    description,
    characteristics,
    properties,
    price,
    weight
  } = props.product;

  const tabsData = [
    {
      title: "Описание",
      content: `<div class="product__desription-block"><p>${description}</p></div>
          <p class="product__price"> ${price} руб./${weight} гр. </p>`
    },
    {
      title: "Характеристики",
      content: `${characteristics}`
    },
    {
      title: "Свойства",
      content: `${properties}`
    }
  ];

  return (
    <ProductCardView>
      <ProductCardImageBlockView>
        <img src={image} alt={title} />
      </ProductCardImageBlockView>
      <ProductCardTextBlockView>
        <Title level={3} fontSize={"SMALL"} mb={16}>
          {title}
        </Title>
        <Tabs tabs={tabsData} isHtml />
      </ProductCardTextBlockView>
    </ProductCardView>
  );
}

export default ProductCard;
