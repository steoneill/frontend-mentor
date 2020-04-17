import styled from "styled-components"

export let Main = styled.main`
  margin: 0 auto;
  margin-top: -110px;
  max-width: ${p => p.theme.maxWidth};
  display: grid;
  padding: 0 15px;

  grid-template-columns: 1fr;
  grid-gap: 30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
