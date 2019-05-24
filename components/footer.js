import styled from "styled-components";

export default () => <Footer>footer</Footer>;

const Footer = styled.footer`
  min-height: 120px;
  grid-columns: 1 / -1;
  background: ${props => props.theme.colors.midnightBlack};
  box-shadow: ${props => props.theme.boxShadows.level2};
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

  @media screen and (min-width: 1224px) {
    right: 3rem;
    left: 3rem;
  }
`;
