import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: "Source Sans Pro",
    body: "Source Code Pro",
  },
  colors: {
    brand: {
      100: "#f5d21f",
      200: "#08070e",
      300: "#32334c",
      400: "#969696",
    },
  },
  components: {
    Link: {
      defaultProps: {
        textDecor: "none",
      }
    }
  }
})

export default theme