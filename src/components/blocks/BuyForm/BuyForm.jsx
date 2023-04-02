import React from "react";

import Title from "/src/components/ui/Title/Title";
import TextInput from "/src/components/ui/TextInput/TextInput";
import Button from "/src/components/ui/Button/Button";
import { StyledFieldset } from "/src/components/styled";

import {
  BuyFormTitleView,
  BuyFormValueView
} from "/src/components/blocks/BuyForm/style";

const BuyForm = React.forwardRef(function BuyForm(props, ref) {
  const { value, onUpdate, price, disabled, onOpenPopup } = props;

  return (
    <StyledFieldset ref={ref}>
      <Title fontSize={"EXTRA_SMALL"} mb={25}>
        Сделать заказ
      </Title>
      <TextInput
        placeholder={"Введите адрес доставки"}
        mb={20}
        value={value}
        onUpdate={onUpdate}
      />
      <BuyFormTitleView>Цена</BuyFormTitleView>
      <BuyFormValueView>{`${price} руб.`}</BuyFormValueView>
      <Button disabled={disabled} onClick={onOpenPopup}>
        Купить
      </Button>
    </StyledFieldset>
  );
});

export default BuyForm;
