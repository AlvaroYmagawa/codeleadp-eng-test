import { Card, Typography } from "shared/components/atoms";
import styled from "styled-components";

export const Container = styled(Card)`
  max-width: 661px;
  margin: 0 auto;
  padding: 34px 49px;
`;

export const Message = styled(Typography)`
  font-size: 22px;
  margin-bottom: 50px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;
