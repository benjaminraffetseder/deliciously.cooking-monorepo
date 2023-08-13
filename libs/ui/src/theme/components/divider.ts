import { defineStyleConfig } from '@chakra-ui/react'

export const Divider = defineStyleConfig({
  variants: {
    default: {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'divider-default',
      opacity: 1,
    },
  },

  defaultProps: {
    variant: 'default',
  },
})
