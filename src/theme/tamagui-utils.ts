/**
 * Tamagui Styling Utilities
 *
 * This file provides convenient utilities and best practices for using Tamagui
 * throughout your app. Import these utilities to maintain consistency.
 */

import { styled } from "tamagui"
import { View, Text as TamaguiText, XStack, YStack } from "tamagui"

/**
 * Common spacing tokens - use these throughout your app
 *
 * Examples:
 * - <Box p="$md" /> - padding: 16px
 * - <Box m="$lg" /> - margin: 24px
 * - <Box gap="$sm" /> - gap: 12px
 */
export const SPACING = {
  xxxs: "$xxxs", // 2
  xxs: "$xxs", // 4
  xs: "$xs", // 8
  sm: "$sm", // 12
  md: "$md", // 16
  lg: "$lg", // 24
  xl: "$xl", // 32
  xxl: "$xxl", // 48
  xxxl: "$xxxl", // 64
} as const

/**
 * Common radius tokens - use these for border radius
 *
 * Examples:
 * - <Box borderRadius="$md" /> - border-radius: 8px
 * - <Box borderRadius="$full" /> - border-radius: 999px (pill shape)
 */
export const RADIUS = {
  none: "$none", // 0
  xs: "$xs", // 2
  sm: "$sm", // 4
  md: "$md", // 8
  lg: "$lg", // 12
  xl: "$xl", // 16
  xxl: "$xxl", // 24
  full: "$full", // 999
} as const

/**
 * Pre-styled container components for common layouts
 */

/**
 * Container - A centered container with max width
 * Use for page-level layouts
 */
export const Container = styled(View, {
  width: "100%",
  maxWidth: 1200,
  marginHorizontal: "auto",
  paddingHorizontal: "$md",
})

/**
 * Card - A styled card component
 * Use for content blocks, forms, etc.
 */
export const Card = styled(View, {
  backgroundColor: "$backgroundStrong",
  borderRadius: "$lg",
  padding: "$lg",
  borderWidth: 1,
  borderColor: "$borderColor",
  shadowColor: "$shadowColor",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 8,
})

/**
 * Section - A section with vertical spacing
 * Use to separate content sections
 */
export const Section = styled(YStack, {
  gap: "$md",
  paddingVertical: "$lg",
})

/**
 * Row - A horizontal flex container with gap
 * Use for horizontal layouts with consistent spacing
 */
export const Row = styled(XStack, {
  gap: "$md",
  alignItems: "center",
})

/**
 * Column - A vertical flex container with gap
 * Use for vertical layouts with consistent spacing
 */
export const Column = styled(YStack, {
  gap: "$md",
})

/**
 * Pre-styled text components for common typography
 */

/**
 * Heading - Large heading text
 */
export const Heading = styled(TamaguiText, {
  fontFamily: "$heading",
  fontSize: "$9",
  fontWeight: "$7",
  color: "$color",
  lineHeight: "$9",
})

/**
 * Title - Medium title text
 */
export const Title = styled(TamaguiText, {
  fontFamily: "$heading",
  fontSize: "$7",
  fontWeight: "$6",
  color: "$color",
  lineHeight: "$7",
})

/**
 * Subtitle - Smaller subtitle text
 */
export const Subtitle = styled(TamaguiText, {
  fontFamily: "$body",
  fontSize: "$5",
  fontWeight: "$6",
  color: "$color",
  lineHeight: "$5",
})

/**
 * Body - Regular body text
 */
export const Body = styled(TamaguiText, {
  fontFamily: "$body",
  fontSize: "$4",
  fontWeight: "$4",
  color: "$color",
  lineHeight: "$4",
})

/**
 * Caption - Small caption text
 */
export const Caption = styled(TamaguiText, {
  fontFamily: "$body",
  fontSize: "$2",
  fontWeight: "$4",
  color: "$colorTransparent",
  lineHeight: "$2",
})

/**
 * Helper function to create responsive values
 *
 * Example:
 * <Box padding={responsive({ xs: "$sm", md: "$lg", xl: "$xxl" })} />
 */
export const responsive = <T>(values: { xs?: T; sm?: T; md?: T; lg?: T; xl?: T; xxl?: T }) => values

/**
 * Common elevation/shadow styles
 */
export const SHADOWS = {
  sm: {
    shadowColor: "$shadowColor",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: "$shadowColor",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  lg: {
    shadowColor: "$shadowColor",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  xl: {
    shadowColor: "$shadowColor",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
} as const
