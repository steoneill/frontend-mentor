import * as React from "react"
import { Theme } from "./styles/theme"
import { CardComponent as Card } from "../components/card"
import { Header, HeaderContent, HeaderH1, HeaderCopy, Main } from "./styles"
let Social = () => (
  <Theme>
    <Header>
      <HeaderContent>
        <div>
          <HeaderH1>Social Media Dashboard</HeaderH1>
          <HeaderCopy>Total Followers: 23,004</HeaderCopy>
        </div>
        <div>Toggle here</div>
      </HeaderContent>
    </Header>
    <Main>
      <Card type={"fb"} />
      <Card type="twitter" />
      <Card type="ig" />
    </Main>
  </Theme>
)

export default Social
