import React, { useEffect } from "react";

import Title from "/src/components/ui/Title/Title";
import Button from "/src/components/ui/Button/Button";

import {
  PopupView,
  PopupContentView,
  PopupShoppingListView,
  PopupItemView,
  PopupSubtitleView,
  PopupPriceView
} from "./style";

function Popup(props) {
  const { shoppingList, totalPrice, onClosePopup, isShow = true } = props;

  const handlerEsc = (evt) => {
    if (evt.key === "Escape") {
      onClosePopup && onClosePopup();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handlerEsc);
    return () => {
      document.removeEventListener("keydown", handlerEsc);
    };
  });

  return isShow ? (
    <PopupView>
      <Title fontSize={"MEDIUM"} mb={15}>
        Спасибо за покупку!
      </Title>
      <PopupContentView>
        <PopupSubtitleView>скоро Вам доставят:</PopupSubtitleView>
        <PopupShoppingListView>
          {shoppingList.length &&
            shoppingList.map((item, index) => (
              <PopupItemView key={index}>{item.name}</PopupItemView>
            ))}
        </PopupShoppingListView>
        <PopupSubtitleView>Стоимость покупки составила</PopupSubtitleView>
        <PopupPriceView>{`${totalPrice} руб.`}</PopupPriceView>
      </PopupContentView>
      <Button width={150} onClick={onClosePopup}>
        Закрыть
      </Button>
    </PopupView>
  ) : null;
}

export default Popup;
