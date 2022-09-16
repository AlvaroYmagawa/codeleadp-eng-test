import { Button, Card, TextArea, Typography } from "shared/components/atoms";

import styled from "styled-components";

export const Container = styled(Card)`
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.element};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Content = styled(TextArea)`
  margin-top: 19px;
`;

export const Title = styled(Typography)`
  margin-bottom: 34px;
`;

export const SubmitButton = styled(Button)`
  margin-left: auto;
  margin-top: 34px;
`;
