import { Navigation, ThemeProvider } from '@deliciously.cooking/ui'

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
          <Navigation/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout
