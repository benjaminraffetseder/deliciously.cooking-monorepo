'use client'

import { Link } from '@chakra-ui/next-js'
import { Box, Container, Flex, Icon, Text } from '@chakra-ui/react'
import { ChefHatIcon } from 'lucide-react'
import type { FC } from 'react'

interface NavigationProps {

}

const Navigation: FC<NavigationProps> = () => {
  return (
    <Box as="nav" py={5}>
      <Container maxW="container.xl">
        <Flex w="full" >
          <Link variant="logo" href="/">
            <Flex alignItems="center" gap={2} >
              <Icon color="btn-primary-bg" as={ChefHatIcon} boxSize={8}/>
              <Text as="span">
                deliciously.cooking
              </Text>
            </Flex>
          </Link>
        </Flex>
      </Container>
    </Box>
  )
}

export { Navigation }
