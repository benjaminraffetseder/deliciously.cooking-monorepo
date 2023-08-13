'use client'

import { Link } from '@chakra-ui/next-js'
import { Box, Button, Container, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Icon, IconButton, Input, Text, VStack, useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import { BookMarkedIcon, ChefHatIcon, CogIcon, CompassIcon, HomeIcon, LogInIcon, MenuIcon, SettingsIcon, XIcon } from 'lucide-react'
import { useRef, type FC } from 'react'
import { NextLink } from '../../atoms/NextLink'
import { ThemeSwitch } from '../../atoms/ThemeSwitch'
import React from 'react'

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box as="nav" py={5}>
      <Container maxW="container.xl">
        <Flex w="full" gap={5} alignItems="center" >
          <Link variant="logo" href="/">
            <Flex alignItems="center" gap={4}>
              <Box
                bg="logo-bg"
                rounded="xl"
                h={{
                  base: 8, md: 10,
                }}
                w={{
                  base: 8, md: 10,
                }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                transform="rotate(45deg)"
              >
                <Icon color="logo-fg" transform="rotate(-45deg)" as={ChefHatIcon} boxSize={{ base: 5, md: 6 }}/>
              </Box>
              {!isMobile &&
                (
                  <Text as="span">
                    deliciously.cooking
                  </Text>
                )}
            </Flex>
          </Link>
          <Box flexGrow={1}>
            <Input variant="search" placeholder="Find awesome and tasty recipes" type="search"/>
          </Box>
          {!isMobile && (
            <Flex gap={2} alignItems="center">
              {/* TODO: Avatar as a logged in user */}
              <Button as={NextLink} variant="primary" size="md" href="/login">Login</Button>
              <ThemeSwitch/>
            </Flex>
          )}
          {isMobile && (
            <>
              <IconButton aria-label="Menu" variant="ghost" bg="transparent" _hover={{ bg: 'transparent' }} icon={isOpen ? <XIcon/> : <MenuIcon/>} onClick={onOpen}/>
              <Drawer
                isOpen={isOpen}
                placement="bottom"
                onClose={onClose}
              >
                <DrawerOverlay/>
                <DrawerContent py={1}>
                  <DrawerHeader>
                    <Flex alignItems="center" gap={4}>
                      <Box
                        bg="logo-bg"
                        rounded="xl"
                        h={{
                          base: 8, md: 10,
                        }}
                        w={{
                          base: 8, md: 10,
                        }}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        transform="rotate(45deg)"
                      >
                        <Icon color="logo-fg" transform="rotate(-45deg)" as={ChefHatIcon} boxSize={{ base: 5, md: 6 }}/>
                      </Box>
                      <Text as="span">
                        deliciously.cooking
                      </Text>
                    </Flex>
                  </DrawerHeader>
                  <DrawerBody>
                    <VStack alignItems="flex-start" spacing={5}>
                      <Text color="auchico" fontSize="xl" fontWeight="bold">Discover</Text>
                      <NextLink fontSize="lg" href="/">Home</NextLink>
                      <NextLink fontSize="lg" href="/browse">Browse</NextLink>
                      <NextLink fontSize="lg" href="/categories">Categories</NextLink>
                      <NextLink fontSize="lg" href="/chefs">Chefs</NextLink>
                    </VStack>
                    <VStack mt={5} alignItems="flex-start" spacing={5} >
                      <Text color="auchico" fontSize="xl" fontWeight="bold">Library</Text>
                      <NextLink fontSize="lg" href="/for-you">For you</NextLink>
                      <NextLink fontSize="lg" href="/favourites">Favourites</NextLink>
                      <NextLink fontSize="lg" href="/cookbook">My Cookbook</NextLink>
                    </VStack>
                  </DrawerBody>
                  <DrawerFooter>
                    <Flex justifyContent="center" alignItems="center" gap={2} w="full">
                      <IconButton size="md" aria-label="Login" variant="ghost" icon={<LogInIcon size={16}/>} onClick={onClose} as={NextLink} href="/login"/>
                      <ThemeSwitch size="md"/>
                      <IconButton size="md" aria-label="Close" variant="ghost" icon={<XIcon size={16}/>} onClick={onClose}/>
                    </Flex>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </>
          )}
        </Flex>
      </Container>
    </Box>
  )
}

export { Navigation }
