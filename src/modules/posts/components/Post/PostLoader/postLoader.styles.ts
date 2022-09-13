import styled from "styled-components";

export const TextLoader = styled.div<{ width: number }>`
  background-color: #eee;
  width: ${(props) => props.width}%;
  height: 16px;
  border-radius: 16px;
  margin-top: 24px;
`;
