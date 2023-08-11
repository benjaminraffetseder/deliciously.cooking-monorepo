import { extendTheme } from '@chakra-ui/react'
import { semanticTokens } from './colors'
import { components } from './components'
import { styles } from './globals'

export const theme = extendTheme({
  semanticTokens,
  styles,
  components,
})
