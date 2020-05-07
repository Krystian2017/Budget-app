import styled from "styled-components";

export const Header = styled.header`
  color: ${({ theme: { colors }, primary }) =>
    primary ? colors.gray.light : colors.green.normal};
  background-color: transparent;
  padding: padding: ${({ theme }) =>
    `${theme.spacing.sm / 2}px ${theme.spacing.sm}px`};
  };
  width: 80%;
  margin: 0 auto;  
`;

export const Heading = styled.h1`
  text-align: center;
`;

export const Paragraph = styled.p`
  color: #000;
`;

export const LinkGit = styled.a`
  text-decoration: none;
  color: ${({ theme: { colors }, primary }) =>
    primary ? colors.gray.light : colors.green.normal};
`;
