export const ButtonStyles = {
  baseStyle: {
    fontWeight: 'bold',
    _active: {
      borderColor: 'none',
    },
  },
  sizes: {},
  variants: {
    primary: props => ({
      bg: 'brand.100',
      color: 'black',
      _hover: {
        boxShadow: 'md',
        color: 'white',
        bg: 'brand.300',
      },
    }),
    secondary: props => ({
      bg: '#7b2d46',
      color: 'white',
      _hover: {
        bg: 'brand.100',
        boxShadow: 'md',
        color: 'black',
      },
    }),
    hamburger: props => ({
      color: 'white',
      backgroundColor: 'brand.500',
      _hover: {
        backgroundColor: '#1f1f38',
      },
    }),
    iconButton: props => ({
      color: 'brand.400',
      _hover: {
        color: 'brand.100',
      },
      _active: {
        borderColor: 'none',
        borderOutline: 'none',
      },
    }),
  },
};
