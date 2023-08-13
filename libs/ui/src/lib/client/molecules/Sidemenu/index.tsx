'use client'
import { VStack } from '@chakra-ui/react'
import type { FC } from 'react'
import { Text } from '../../atoms/Text'
import { NextLink } from '../../atoms/NextLink'

interface SidemenuProps {}

const Sidemenu: FC<SidemenuProps> = () => {
  return (
    <>
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
    </>
  )
}

export { Sidemenu }
