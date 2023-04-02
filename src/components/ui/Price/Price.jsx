import React from "react";

function Price({ price, weight }) {
  return (
    <span>
      `${price} руб./ ${weight} гр.`
    </span>
  );
}

export default Price;
