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
        bg: "radial-gradient(circle at left, #dd00ff99, transparent 15%),radial-gradient(ellipse at 20% 40%, #d89a0099, transparent 60%),radial-gradient(circle at 70% 80%, #2e2d2d, transparent 5%),radial-gradient(circle at 50% 60%, #f5d21f, transparent 3%),radial-gradient(circle at 80% 20%, white, transparent 1%),radial-gradient(circle at 90% 80%, #f5d21f, transparent 1%),radial-gradient(circle at 20% 20%, white, transparent 1%),radial-gradient(circle at 10% 80%, white, transparent 0.5%),radial-gradient(circle at 90% 80%, #f5d21f, transparent 0.5%)",
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