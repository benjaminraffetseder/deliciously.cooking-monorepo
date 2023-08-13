import './global.css'
import { Box, Container, Grid, GridItem, Navigation, Sidemenu, ThemeProvider } from '@deliciously.cooking/ui'

export const metadata = {
  title: 'deliciously.cooking',
  description: 'Find the best recipes for your next meal.',
}

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Box h="100vh" w="100%" display="flex" flexDir="column" gap={5} >
            <Navigation/>
            <Container
              flexGrow={1}
              maxW="container.xl"
            >
              <Grid templateColumns="repeat(12, 1fr)" gap={5}>
                <GridItem as="aside" display={{ base: 'none', lg: 'block' }} colSpan={{ base: 0, md: 2 }}>
                  <Sidemenu/>
                </GridItem>
                <GridItem as="main" colSpan={{ base: 12, lg: 10 }} >
                  {children}
                </GridItem>
              </Grid>
            </Container>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
