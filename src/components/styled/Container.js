import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.theme.width};
  padding: 0 ${(props) => props.theme.indent};
  margin: 0 auto;
  box-sizing: border-box;
`;

export default Container;
