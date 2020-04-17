import React from "react"
import SEO from "../components/seo"
import FrontendLogo from "../images/frontendMentorLogo"
import styled from "styled-components"

let Container = styled.div`
  background: white;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  margin: 40px auto;
  padding: 30px 15px;

  h1 {
    color: #2a4365;
  }

  svg {
    margin: 0 auto;
  }
`

let AppWrapper = styled.section`
  background: #edf2f7;
  display: flex;
  justify-content: center;
  height: 100vh;
`

const IndexPage = () => (
  <AppWrapper>
    <SEO title="Home" />
    <Container>
      <FrontendLogo />
      <h1>
        Frontend Mentor projects by{" "}
        <a href="https://steoneill.dev">Ste O'Neill</a>
      </h1>
    </Container>
  </AppWrapper>
)

export default IndexPage
