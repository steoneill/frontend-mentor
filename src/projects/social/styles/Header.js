import styled from "styled-components"

export let Header = styled.header`
  background: ${p => p.theme.topBg};
  width: 100%;

  padding: 40px 0 150px;
`

export let HeaderContent = styled.section`
  max-width: ${p => p.theme.maxWidth};
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export let HeaderH1 = styled.h1`
  color: ${p => p.theme.textPrimary};
`

export let HeaderCopy = styled.p`
  color: ${p => p.theme.textSecondary};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`
