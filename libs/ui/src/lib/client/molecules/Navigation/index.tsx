'use client'

import { Link } from '@chakra-ui/next-js'
import { Box, Button, Container, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Grid, GridItem, Icon, IconButton, Input, Text, useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import { ChefHatIcon, LogInIcon, MenuIcon, XIcon } from 'lucide-react'
import { type FC } from 'react'
import { NextLink } from '../../atoms/NextLink'
import { ThemeSwitch } from '../../atoms/ThemeSwitch'
import { Sidemenu } from '../Sidemenu'

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false })
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box as="nav" py={5}>
      <Container maxW="container.xl">

        <Grid templateColumns="repeat(12, 1fr)" gap={5} alignItems="center">
          <GridItem colSpan={{ base: 1, lg: 2 }}>
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
                  <Text fontSize="md" as="span">
                    deliciously
                  </Text>
                )}
              </Flex>
            </Link>
          </GridItem>
          <GridItem colSpan={{ base: 11, lg: 10 }}>
            <Flex alignItems="center" gap={2}>
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
                            deliciously
                          </Text>
                        </Flex>
                      </DrawerHeader>
                      <DrawerBody>
                        <Sidemenu/>
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
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export { Navigation }
