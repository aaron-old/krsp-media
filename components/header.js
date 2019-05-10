import styled from "styled-components";

export default () => (
  <Header>
    <nav>
      <a>Home</a>
      <a>About</a>
      <a>Contact</a>
    </nav>
  </Header>
);
const Header = styled.header`
  min-height: 60px;
  grid-columns: 1 / -1;
  box-shadow: 0 0 0.4em ${props => props.theme.colors.darkChicken};
  background: ${props => props.theme.colors.midnightBlack};
`;

// keep it big enough to look at with a place holder now.
// when the screen is greater than 920 px, show the header should be displayed with all links.
// the links are centered.
// the padding shouldnt be soo big. make it crisp, saving room for the real shit.
// the header component should hold a collection of link components.
// 1 full grid row
