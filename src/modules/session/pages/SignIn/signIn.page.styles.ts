import styled, { keyframes } from "styled-components";
import { Typography, Button } from "shared/components/atoms";

const logoAnimation = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1; }
`;

const formAnimation = keyframes`
  from { height: 0;  opacity: 0 }
  to { height: 200px; opacity: 1; }
`;

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
  height: 0;  opacity: 0;
  flex-direction: column;
  animation: ${formAnimation} ease 1s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
`;

export const Logo = styled.img`
  position: relative;
  max-width: 607px;
  margin-bottom: 5rem;
  animation: ${logoAnimation} ease-in 1.5s;
`;

export const Title = styled(Typography)`
  margin-bottom: 30px;
`;

export const SubmitButton = styled(Button)`
  margin-left: auto;
  margin-top: 27px;
`;
