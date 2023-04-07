import React, { useState, useRef, useEffect } from "react";

import { useProducts } from "/src/context/ProductsHook";
import OrderForm from "/src/components/blocks/OrderForm/OrderForm";
import Slider from "/src/components/blocks/Slider/Slider";
import OutOfProduct from "/src/components/ui/OutOfProduct/OutOfProduct";

import {
  OrderPageView,
  OrderContainerView,
  OrderFormWrapperView,
  OrderCatalogWrapperView
} from "./style";

function OrderPage() {
  const { products } = useProducts();

  const filterList = products?.length
    ? products.map(({ title, id, price }) => ({
        name: title,
        id: id,
        price: price,
        state: id === 0 ? true : false
      }))
    : [];

  const [filterState, setFilterState] = useState(filterList);
  const [totalPrice, setTotalPriсe] = useState(filterList[0]?.price);
  const [text, setText] = useState("");
  const [catalogHeight, setCatalogHeight] = useState(null);
  const [buyPanelHeight, setBuyPanelHeight] = useState(null);
  const [swiperRef, setSwiperRef] = useState(null);
  const orderFormRef = useRef();
  const windowHight = useRef(window.innerHeight);

  const handleOnTextInput = (evt) => {
    setText(evt.target.value);
  };

  const handleOnChangeProduct = (position) => {
    const updatedCheckedState = filterState.map((item, index) => {
      let filterItem = {};
      if (index === Number(position.target.value)) {
        filterItem = { ...item, state: !item.state };
        if (item.state === false) swiperRef.slideTo(index, 0);
      } else {
        filterItem = item;
      }
      return filterItem;
    });

    setFilterState(updatedCheckedState);
    const countPrice = updatedCheckedState.reduce((currentSum, nextValue) => {
      return nextValue.state
        ? currentSum + Number(nextValue.price)
        : currentSum;
    }, 0);

    setTotalPriсe(countPrice);
  };

  useEffect(() => {
    const catalogWrapperHeight =
      windowHight.current - 180 >= buyPanelHeight
        ? windowHight.current - 260
        : buyPanelHeight;
    catalogWrapperHeight && setCatalogHeight(catalogWrapperHeight);
  }, [catalogHeight]);

  return (
    <OrderPageView height={catalogHeight}>
      {products?.length ? (
        <OrderContainerView>
          <OrderFormWrapperView>
            <OrderForm
              setHeight={setBuyPanelHeight}
              ref={orderFormRef}
              handleUpdateFilter={handleOnChangeProduct}
              filterState={filterState}
              filterList={filterList}
              totalPrice={totalPrice}
              text={text}
              handleUpdateText={handleOnTextInput}
            />
          </OrderFormWrapperView>
          <OrderCatalogWrapperView height={catalogHeight} minHeight={buyPanelHeight}>
            <Slider onSwiper={setSwiperRef} />
          </OrderCatalogWrapperView>
        </OrderContainerView>
      ) : (
        <OutOfProduct />
      )}
    </OrderPageView>
  );
}

export default OrderPage;
