import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { BiHeart } from "react-icons/bi";

import { OutOfProductContainer, OutOfProductParagraph } from "./style";

function OutOfProductPage() {
  const theme = useContext(ThemeContext);

  return (
    <OutOfProductContainer>
      <BiHeart size={50} color={theme.color.highlight} />
      <OutOfProductParagraph>
        {`Продукты были очень вкусные и их раскупили.`}
      </OutOfProductParagraph>
      <OutOfProductParagraph>
        {`Не волнуйтесь, новая поставка уже в пути!`}
      </OutOfProductParagraph>
    </OutOfProductContainer>
  );
}

export default OutOfProductPage;
