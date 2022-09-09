import styled from "styled-components";
import { Typography } from "../Typography";

export const Container = styled.div``;

export const Title = styled(Typography)`
  margin-bottom: 7px;
`;

export const Input = styled.input`
  border-radius: 4px;
  padding: 6px 10px;
  border: 1px solid ${({ theme: { colors } }) => colors.opaqueText};
`;
