import { useColorMode } from "@chakra-ui/react"
import { useEffect } from "react"

export const useColorSync = () => {
  const { colorMode } = useColorMode()
  useEffect(() => {
    // Update Tailwind's dark mode class on the root element
    if (colorMode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

  }, [colorMode])

  return colorMode
}