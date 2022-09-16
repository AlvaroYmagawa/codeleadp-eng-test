import styled from "styled-components";
import { Card, Icon, Typography } from "shared/components/atoms";

export const Container = styled(Card)`
  padding: 0;
`;

export const ContentConainer = styled.div`
  padding: 24px 30px;
`;

export const HeaderIcon = styled(Icon)`
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.primaryText};

  &:hover {
    opacity: 0.6;
  }
`;

export const DeleteIcon = styled(HeaderIcon)``;

export const EditIcon = styled(HeaderIcon)`
  margin-left: 24px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  padding: 24px 30px;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.primary};
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(Typography)`
  flex: 1;
  color: ${({ theme: { colors } }) => colors.primaryText};
`;

export const Username = styled(Typography)``;

export const CreatedAt = styled(Typography)``;

export const Content = styled(Typography)`
  margin-top: 18px;
  font-size: 18px;
  white-space: pre-line;
`;
