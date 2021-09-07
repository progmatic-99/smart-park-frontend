import { whiten } from "@chakra-ui/theme-tools"

export const ButtonStyles = {
  baseStyle: {
    font: "heading",
    fontWeight: "bold",
  },
  sizes: {},
  variants: {
    primary: (props) => ({
      bg: "brand.100",
      color: "black",
      _hover: {
        boxShadow: "md",
        bg: whiten("brand.100", 50),
      }
    }),
    secondary: (props) => ({
      bg: "brand.400",
      color: "white",
      _hover: {
        bg: whiten("brand.400", 60),
        boxShadow: "md",
        color: "black"
      }
    }),
    hamburger: (props) => ({
      color: "white",
      border: "1px solid",
      borderColor: "white",
    }),
    iconButton: (props) => ({
      color: "brand.400",
      _hover: {
        bg: "brand.300"
      }
    }),
  }
}
