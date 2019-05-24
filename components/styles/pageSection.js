import styled from "styled-components";

const PageSection = styled.section`
  display: grid;
  grid-gap: 1rem;
  margin: 0;
  transition: margin 0.3s;

  @media only screen and (min-width: 1224px) {
    margin: 1rem 3rem 3rem;
  }
`;

export default PageSection;
