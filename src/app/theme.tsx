"use client"

import { PublicHeader } from "@/components/PublicHeader";
import defaultTheme from "@/themes/default";
import { ThemeProvider } from "styled-components";

export default function ThemeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PublicHeader/>
      {children}
    </ThemeProvider>
  )
} 