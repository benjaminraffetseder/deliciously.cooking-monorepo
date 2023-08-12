import { Container, Button, ThemeSwitch, Text } from '@deliciously.cooking/ui'

export default async function Index () {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */

  return (
    <Container maxW="container.xl">
      <Text as="h1" fontSize="xl" fontWeight="bold" textAlign="center" my={10}>
        Welcome to deliciously.cooking!
      </Text>
    </Container>
  )
}
