import { extendTheme } from "@chakra-ui/react"
import { ButtonStyles as Button } from "./components/buttonStyles"
import { LinkStyles as Link } from "./components/linkStyles"

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  styles: {
    global: {
      "body": {
        fontFamily: "Source Sans Pro",
        bgColor: "black",
        bgRepeat: "no-repeat",
        // bgImage: radial-gradient(circle at left, #dd00ff99, transparent 20%),radial-gradient(ellipse at 10% 20%, #d89a0099, transparent 60%)
        bg: "radial-gradient(circle at left, #dd00ff99, transparent 20%),radial-gradient(ellipse at 20% 40%, #d89a0099, transparent 60%),radial-gradient(circle at 70% 80%, #2e2d2d, transparent 30%)",
      },
    }
  },
  colors: {
    brand: {
      100: "#f5d21f",
      200: "#17151f",
      300: "#32334c",
      400: "#969696",
      500: "#07070d",
    },
  },
  components: {
    Button,
    Link,
  }
})

export default theme