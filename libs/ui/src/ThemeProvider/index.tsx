'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../theme'

export interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  return (
    <ChakraProvider theme={theme} >
      {props.children}
    </ChakraProvider>
  )
}

export default ThemeProvider
