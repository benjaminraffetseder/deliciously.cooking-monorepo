'use client'
import { Box, Button, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from 'lucide-react'
import type { FC } from 'react'

interface indexProps {}

const ThemeSwitch: FC<indexProps> = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <Box>
      <Button variant="outline" onClick={toggleColorMode}>
        {colorMode === 'dark'
          ? (
            <SunIcon size={16}/>
            )
          : <MoonIcon size={16}/>}
      </Button>
    </Box>
  )
}

export { ThemeSwitch }
