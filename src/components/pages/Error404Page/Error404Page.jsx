import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { BiSearchAlt } from "react-icons/bi";
import Title from "/src/components/ui/Title/Title";

import { Error404PageContainer } from "./style";

function Error404Page() {
  const theme = useContext(ThemeContext);

  return (
    <Error404PageContainer>
      <BiSearchAlt size={50} color={theme.color.highlight} />
      <Title level={1} align={"center"} fontSize={"SMALL"}>
        Ошибка 404. Страница не существует.
      </Title>
    </Error404PageContainer>
  );
}

export default Error404Page;
