import styled from "styled-components";

export default () => (
  <Header>
    <Nav>
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Contact</a>
    </Nav>
  </Header>
);

const Header = styled.header`
  min-height: 60px;
  grid-columns: 1 / -1;
  align-items: center;
  box-shadow: ${props => props.theme.boxShadows.level2};
  background: ${props => props.theme.colors.midnightBlack};
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: white;
    margin: 0 1rem;
    text-decoration: none;
  }
`;
// keep it big enough to look at with a place holder now.
// when the screen is greater than 920 px, show the header should be displayed with all links.
// the links are centered.
// the padding shouldnt be soo big. make it crisp, saving room for the real shit.
// the header component should hold a collection of link components.
// 1 full grid row
