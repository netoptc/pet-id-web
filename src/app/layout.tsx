import StyledComponentsRegistry from "@/lib/registry"
import ThemeClient from "./theme"

import '../styles/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <ThemeClient>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </ThemeClient>
      </body>
    </html>
  )
}