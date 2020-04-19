import * as React from "react"
import { ThemeProvider } from "styled-components"

let defaults = {
  maxWidth: "1330px",
  fb: "hsl(195, 100%, 50%)",
  twitter: "hsl(203, 89%, 53%)",
  ig: "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
}

let generateTheme = darkMode => {
  if (darkMode) {
    return {
      ...defaults,
      topBg: "hsl(232, 19%, 15%)",
      bg: "hsl(230, 17%, 14%)",
      cardBg: "hsl(228, 28%, 20%)",
      textPrimary: "hsl(0, 0%, 100%)",
      textSecondary: "hsl(228, 34%, 66%)",
    }
  }

  return {
    ...defaults,
    topBg: "hsl(225, 100%, 98%)",
    bg: "hsl(0, 0%, 100%)",
    cardBg: "hsl(227, 47%, 96%)",
    textPrimary: "hsl(230, 17%, 14%)",
    textSecondary: "hsl(228, 12%, 44%)",
  }
}
export let Theme = ({ children, darkMode }) => (
  <ThemeProvider theme={generateTheme(darkMode)}>{children}</ThemeProvider>
)
