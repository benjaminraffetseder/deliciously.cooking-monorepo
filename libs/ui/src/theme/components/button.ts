export const Button = {
  baseStyle: {
    borderRadius: 'md',
    fontWeight: 'normal',
    textTransform: 'none',
  },
  sizes: {
    sm: {
      fontSize: 'xs',
      h: 7,
      px: 4,
      py: 0,
    },
    md: {
      fontSize: 'sm',
      h: 9,
      px: 4,
      py: 2,
    },
    lg: {
      fontSize: 'lg',
      h: 12,
      px: 8,
      py: 4,
    },
  },
  variants: {
    primary: {
      backgroundColor: 'btn-primary-bg',
      color: 'btn-primary-fg',
      _hover: {
        backgroundColor: 'btn-primary-bg-hover',
      },
    },
    outline: {
      backgroundColor: 'btn-outline-bg',
      color: 'btn-outline-fg',
      border: '1px solid',
      borderColor: 'btn-outline-fg',
      _hover: {
        backgroundColor: 'btn-outline-bg-hover',
        color: 'btn-outline-fg-hover',
      },
    },
    danger: {
      backgroundColor: 'btn-danger-bg',
      color: 'btn-danger-fg',
      _hover: {
        backgroundColor: 'btn-danger-bg-hover',
      },
    },
  },
  defaultProps: {
    variant: 'primary',
    size: 'sm',
  },
}
