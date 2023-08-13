'use client'

import { Link } from '@chakra-ui/next-js'
import { Box, Button, Container, Flex, Icon, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { ChefHatIcon, ShieldCloseIcon } from 'lucide-react'
import type { FC } from 'react'
import { NextLink } from '../../atoms/NextLink'
import { ThemeSwitch } from '../../atoms/ThemeSwitch'

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
  return (
    <Box as="nav" py={5}>
      <Container maxW="container.xl">
        <Flex w="full" gap={5} alignItems="center" >
          <Link variant="logo" href="/">
            <Flex alignItems="center" gap={2}>
              <Box bg="logo-bg" rounded="xl" h={10} w={10} display="flex" alignItems="center" justifyContent="center" transform="rotate(45deg)" >
                <Icon color="logo-fg" transform="rotate(-45deg)" as={ChefHatIcon} boxSize={6}/>
              </Box>
              <Text as="span">
                deliciously.cooking
              </Text>
            </Flex>
          </Link>
          <Box flexGrow={1}>
            <Input variant="search" placeholder="Find awesome and tasty recipes" type="search"/>
          </Box>
          <Flex gap={2} alignItems="center">
            {/* TODO: Avatar as a logged in user */}
            <Button as={NextLink} variant="primary" size="md" href="/login">Login</Button>
            <ThemeSwitch/>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export { Navigation }
