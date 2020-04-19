import * as React from "react"
import styled from "styled-components"

let Card = styled.section`
  background: ${p => p.theme.cardBg};
  position: relative;
  padding: 30px 60px;
`

let CardTop = styled.div`
  position: absolute;
  border-radius: 0 5px 5px 0;
  background: ${p => p.theme[p.type]};
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  height: 5px;
`

let CardContent = styled.div`
  display: flex;
  flex-direction: column;
  color: ${p => p.theme.textPrimary};
  
`

export let CardComponent = ({ type }) => (
  <Card>
    <CardTop type={type} />
    <CardContent>
      <p>@nathanf</p>
      <h2>1987</h2>
      <p>FOLLOWERS</p>
      <p></p>
    </CardContent>
  </Card>
)
