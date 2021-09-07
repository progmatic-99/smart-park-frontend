import { extendTheme } from "@chakra-ui/react"
import { ButtonStyles as Button } from "./components/buttonStyles"
import { LinkStyles as Link } from "./components/linkStyles"

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  styles: {
    global: {
      body: {
        bgColor: "black",
        // bgImage: radial-gradient(circle at left, #dd00ff99, transparent 20%),radial-gradient(ellipse at 10% 20%, #d89a0099, transparent 60%)
        bgGradient: "radial(circle to-l, #dd00ff99, transparent 20%),radial(ellipse to-r to-tr, #d89a0099, transparent 60%)",
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
    Link,
  }
})

export default theme