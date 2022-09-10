import { Button, Card, Typography } from "shared/components/atoms";
import styled from "styled-components";

export const Container = styled(Card)``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Title = styled(Typography)`
  margin-bottom: 34px;
`;

export const SubmitButton = styled(Button)`
  margin-left: auto;
  margin-top: 34px;
`;