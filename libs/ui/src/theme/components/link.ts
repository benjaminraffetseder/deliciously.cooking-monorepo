export const Link = {
  baseStyle: {
    color: 'btn-link-fg',
    _hover: {
      textDecoration: 'none',
      color: 'btn-link-fg-hover',
    },
  },
  sizes: {
    sm: {
      fontSize: 'xs',
    },
    md: {
      fontSize: 'sm',
    },
    lg: {
      fontSize: 'lg',
    },
  },
  variants: {
    link: {
      color: 'btn-link-fg',
      _hover: {
        textDecoration: 'none',
        color: 'btn-link-fg-hover',
      },
    },
    logo: {
      color: 'btn-link-logo-fg',
      fontWeight: 'bold',
      fontSize: 'xl',
      _hover: {
        color: 'btn-link-logo-fg-hover',
      },
    },
    danger: {
      color: 'btn-danger-bg',
      _hover: {
        color: 'btn-danger-bg-hover',
      },
    },
  },
  defaultProps: {
    variant: 'link',
    size: 'md',
  },
}
