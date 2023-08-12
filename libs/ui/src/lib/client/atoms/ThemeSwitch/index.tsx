'use client'
import { Box, IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from 'lucide-react'
import type { FC } from 'react'

interface ThemeSwitchProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost'
}

const ThemeSwitch: FC<ThemeSwitchProps> = ({ variant }) => {
  const { toggleColorMode, colorMode } = useColorMode()
  const ariaLabel = colorMode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
  return (
    <Box>
      <IconButton aria-label={ariaLabel} variant={variant ?? 'ghost'} onClick={toggleColorMode} p={1}>
        {colorMode === 'dark'
          ? (
            <SunIcon size={16}/>
            )
          : <MoonIcon size={16}/>}
      </IconButton>
    </Box>
  )
}

export { ThemeSwitch }
