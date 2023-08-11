'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../theme'

export interface ProviderProps {
  children: React.ReactNode
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  )
}

export default Provider
