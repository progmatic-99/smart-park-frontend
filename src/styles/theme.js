import { extendTheme } from "@chakra-ui/react"
import { ButtonStyles as Button } from "./components/buttonStyles"

const theme = extendTheme({
  styles: {
    global: {
      body: {
        // color: "#08070e",
        // bg: "rgb(47,16,58)",
        // bgGradient: "linear-gradient(16deg, rgba(47,16,58,1) 0%, rgba(51,38,29,1) 50%, rgba(12,11,13,1) 100%);" 
      },
    }
  },
  fonts: {
    heading: "Source Sans Pro",
    body: "Source Code Pro",
  },
  colors: {
    brand: {
      100: "#f5d21f",
      200: "#17151f",
      300: "#32334c",
      400: "#969696",
    },
  },
  components: {
    Button,
  }
})

export default theme