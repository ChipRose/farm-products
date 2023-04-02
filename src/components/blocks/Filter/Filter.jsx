import React from "react";

import Checkbox from "/src/components/ui/Checkbox/Checkbox";
import Title from "/src/components/ui/Title/Title";
import { StyledFieldset, Ul } from "/src/components/styled";

import { FilterItemView } from "./style";

const Filter = React.forwardRef((props, ref) => {
  const { products, onUpdate, filterState, filterList } = props;

  return (
    <StyledFieldset mb={18} ref={ref}>
      <Title fontSize={"EXTRA_SMALL"} mb={25}>
        {products?.length ? "Выберите продукты" : "Пополняем ассортимент"}
      </Title>
      {products?.length ? (
        <Ul>
          {filterList.map(({ name, id }, index) => (
            <FilterItemView key={index}>
              <Checkbox
                name={name}
                value={id}
                incomeValue={id}
                index={index}
                id={`checkbox-${id}`}
                checked={filterState[index].state}
                onChange={onUpdate}
              />
            </FilterItemView>
          ))}
        </Ul>
      ) : null}
    </StyledFieldset>
  );
});

export default Filter;
