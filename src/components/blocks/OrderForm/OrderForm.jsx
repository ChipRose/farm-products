import React, { useState, useRef, useEffect } from "react";

import Filter from "/src/components/blocks/Filter/Filter";
import BuyForm from "/src/components/blocks/BuyForm/BuyForm";
import Popup from "/src/components/ui/Popup/Popup";
import { useProducts } from "/src/context/ProductsHook";

import { Form } from "./style";

const OrderForm = React.forwardRef(function OrderForm(props, ref) {
  const {
    handleUpdateFilter,
    filterState = [],
    filterList = [],
    totalPrice = 0,
    text = "",
    setHeight,
    handleUpdateText
  } = props;

  const { products } = useProducts();
  const [openPopup, setOpenPopup] = useState(false);
  const filterRef = useRef();
  const formRef = useRef();

  const handleOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  useEffect(() => {
    const orderFormHight =
      filterRef && formRef
        ? filterRef.current?.offsetHeight + formRef.current?.offsetHeight + 18
        : 0;
    setHeight(orderFormHight);
  });

  const shoppingList = filterState
    ? filterState.filter((item) => item.state === true)
    : [];

  return (
    <>
      <Form ref={ref}>
        <Filter
          ref={filterRef}
          products={products}
          onUpdate={(evt) => handleUpdateFilter(evt)}
          filterState={filterState}
          filterList={filterList}
        />
        <BuyForm
          ref={formRef}
          price={totalPrice}
          value={text}
          disabled={totalPrice === 0 || !text}
          onUpdate={(evt) => handleUpdateText(evt)}
          onOpenPopup={handleOpenPopup}
        />
      </Form>
      <Popup
        isShow={openPopup}
        onClosePopup={handleClosePopup}
        shoppingList={shoppingList}
        totalPrice={totalPrice}
      />
    </>
  );
});

export default OrderForm;
