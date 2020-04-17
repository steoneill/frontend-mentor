import * as React from "react"
import { ThemeProvider } from "styled-components"

let lightMode = {
  topBg: "hsl(225, 100%, 98%)",
  bg: "hsl(0, 0%, 100%)",
  cardBg: "hsl(227, 47%, 96%)",
  textPrimary: "hsl(230, 17%, 14%)",
  textSecondary: "hsl(228, 12%, 44%)",
  maxWidth: "1330px",
  fb: "hsl(195, 100%, 50%)",
  twitter: "hsl(203, 89%, 53%)",
  ig: "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
}

export let Theme = ({ children }) => (
  <ThemeProvider theme={lightMode}>{children}</ThemeProvider>
)
