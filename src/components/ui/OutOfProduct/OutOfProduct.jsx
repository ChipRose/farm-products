import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { BiHeart } from "react-icons/bi";

import { OutOfProductContainerView, OutOfProductParagraphView } from "./style";

function OutOfProduct() {
  const theme = useContext(ThemeContext);

  return (
    <OutOfProductContainerView>
      <BiHeart size={50} color={theme.color.highlight} />
      <OutOfProductParagraphView>
        {`Продукты были очень вкусные и их раскупили.`}
      </OutOfProductParagraphView>
      <OutOfProductParagraphView>
        {`Не волнуйтесь, новая поставка уже в пути!`}
      </OutOfProductParagraphView>
    </OutOfProductContainerView>
  );
}

export default OutOfProduct;
