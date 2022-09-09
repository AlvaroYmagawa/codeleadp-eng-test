import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid ${({ theme: { colors } }) => colors.opaqueText};
  padding: 23px 30px;
`;
