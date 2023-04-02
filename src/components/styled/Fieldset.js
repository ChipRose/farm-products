import styled from "styled-components";

const Fieldset = styled.fieldset`
  padding: 0;
  margin: 0;
  border: none;
`;

const StyledFieldset = styled(Fieldset)`
  ${Fieldset};
  padding: 20px;
  margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : 0)};
  box-sizing: border-box;
  background: ${(props) => props.theme.color.contrast};
  border: 1px solid ${(props) => props.theme.color.neutralDark};
  box-shadow: 0 10px 20px ${(props) => props.theme.color.neutralDark};
`;

export { Fieldset, StyledFieldset };
