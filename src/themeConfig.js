// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
// '#0A0A0A
const colors = {
  backgroundHome: '#0A0A0A',
  backgroundHomeSecondary: '#161616',
  backgroundNav: '#C4C4ED',
  textColor: '#FBFBFB',
  textSecondary: '#00C431',
  detailsPrimary: '#00FF40',
  detailsSecondary: '#00A429',
  borders: '#1A202C',
}

export const theme = extendTheme({ colors })