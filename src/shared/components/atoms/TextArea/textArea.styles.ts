import styled from "styled-components";
import { Typography } from "../Typography";

export const Container = styled.div`
  width: 100%;
`;

export const Title = styled(Typography)`
  margin-bottom: 7px;
`;

export const TextArea = styled.textarea`
  border-radius: 4px;
  width: 100%;
  min-height: 74px;
  padding: 6px 10px;
  border: 1px solid ${({ theme: { colors } }) => colors.opaqueText};
`;
