import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    variants: {
      search: {
        bg: 'transparent',
        border: 'none',
        _focus: {
          boxShadow: 'none',
        },
        fontWeight: 600,
        _placeholder: {
          color: 'btn-primary-bg',
          opacity: 1,
        },
      },
    },
  },
})

const searchVariant = definePartsStyle({
  field: {
    bg: 'input-search-bg',
    color: 'input-search-fg',
    border: 'none',
    fontSize: 'sm',
    py: 3,
    px: 3,
    rounded: 'xl',
    _focus: {
      boxShadow: 'none',
    },
    _placeholder: {
      color: 'input-search-placeholder',
      opacity: 1,
    },
    _hover: {
      bg: 'input-search-bg-hover',
    },
  },
})

export const Input = defineMultiStyleConfig({ baseStyle, variants: { search: searchVariant } })
