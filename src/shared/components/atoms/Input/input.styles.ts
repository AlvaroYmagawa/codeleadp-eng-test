import styled from "styled-components";


export const Input = styled.input`
  border-radius: 4px;
  padding: 6px 10px;
  border: 1px solid ${({ theme: { colors } }) => colors.opaqueText};
`;
