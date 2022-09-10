import styled from "styled-components";
import { Typography, Button } from "shared/components/atoms";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 5%;
`;

export const Form = styled.form`
  max-width: 500px;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  max-width: 300px;
  margin-bottom: 3rem;
`;

export const Title = styled(Typography)`
  margin-bottom: 30px;
`;

export const SubmitButton = styled(Button)`
  margin-left: auto;
  margin-top: 27px;
`;
