'use client'

import type { LinkProps } from '@chakra-ui/next-js'
import { Link } from '@chakra-ui/next-js'

import type React from 'react'

export const NextLink: React.FC<LinkProps> = (props) => {
  return <Link {...props}/>
}
