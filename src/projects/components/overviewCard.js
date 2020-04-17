import * as React from "react"
import styled from "styled-components"

let OverviewCardComp = styled.section`
  background: ${p => p.theme.cardBg};
`

export let OverviewCard = () => <OverviewCardComp />
