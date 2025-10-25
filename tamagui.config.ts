import { shorthands } from "@tamagui/shorthands"
import { createFont, createTamagui, createTokens } from "tamagui"

// Import your existing spacing and color values
import { colors as appColors } from "./src/theme/colors"
import { spacing } from "./src/theme/spacing"

/**
 * Create custom space tokens based on your app's spacing system
 * These can be used throughout your app with shorthand props like:
 * - m="$md" (margin: 16)
 * - p="$lg" (padding: 24)
 * - gap="$sm" (gap: 12)
 */
const customSpacing = {
  true: spacing.md, // default spacing when you use just space={true}
  ...spacing,
}

/**
 * Create custom size tokens for consistent sizing
 * Use with width, height, size props
 */
const customSizes = {
  ...customSpacing,
  full: "100%",
  auto: "auto",
}

/**
 * Create custom radius tokens for border radius
 */
const customRadius = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  full: 999,
}

/**
 * Create custom z-index tokens
 * Tamagui requires zIndex to use the same keys as spacing
 */
const customZIndex = {
  xxxs: 0,
  xxs: 1,
  xs: 2,
  sm: 3,
  md: 4,
  lg: 5,
  xl: 10,
  xxl: 100,
  xxxl: 1000,
}

/**
 * Create custom color tokens from your app's color palette
 */
const customColors = {
  ...appColors.palette,
  // Semantic colors
  text: appColors.text,
  textDim: appColors.textDim,
  background: appColors.background,
  border: appColors.border,
  tint: appColors.tint,
  tintInactive: appColors.tintInactive,
  separator: appColors.separator,
  error: appColors.error,
  errorBackground: appColors.errorBackground,
  transparent: appColors.transparent,
}

/**
 * Create custom tokens
 */
const customTokens = createTokens({
  space: customSpacing,
  size: customSizes,
  radius: customRadius,
  zIndex: customZIndex,
  color: customColors,
})

/**
 * Create a custom font configuration
 * This ensures consistent typography across your app
 */
const defaultFont = createFont({
  family: "SpaceGrotesk",
  size: {
    1: 10,
    2: 12,
    3: 14,
    4: 16,
    5: 18,
    6: 20,
    7: 24,
    8: 28,
    9: 32,
    10: 40,
    11: 48,
    12: 56,
    13: 64,
    14: 72,
    15: 80,
    16: 96,
    true: 16, // default size
  },
  lineHeight: {
    1: 14,
    2: 16,
    3: 18,
    4: 22,
    5: 24,
    6: 26,
    7: 30,
    8: 34,
    9: 38,
    10: 46,
    11: 54,
    12: 62,
    13: 70,
    14: 78,
    15: 86,
    16: 102,
    true: 22,
  },
  weight: {
    4: "400",
    5: "500",
    6: "600",
    7: "700",
    8: "800",
    true: "400",
  },
  letterSpacing: {
    4: 0,
    5: -0.5,
    6: -1,
    7: -1.5,
    8: -2,
    true: 0,
  },
  face: {
    400: { normal: "SpaceGrotesk_400Regular" },
    500: { normal: "SpaceGrotesk_500Medium" },
    600: { normal: "SpaceGrotesk_600SemiBold" },
    700: { normal: "SpaceGrotesk_700Bold" },
  },
})

/**
 * Configure Tamagui with your custom theme
 */
const config = createTamagui({
  tokens: customTokens,
  themes: {
    light: {
      background: appColors.background,
      backgroundHover: appColors.palette.neutral300,
      backgroundPress: appColors.palette.neutral400,
      backgroundFocus: appColors.palette.neutral300,
      backgroundStrong: appColors.palette.neutral100,
      backgroundTransparent: appColors.transparent,
      color: appColors.text,
      colorHover: appColors.text,
      colorPress: appColors.text,
      colorFocus: appColors.text,
      colorTransparent: appColors.transparent,
      borderColor: appColors.border,
      borderColorHover: appColors.palette.neutral500,
      borderColorPress: appColors.palette.neutral600,
      borderColorFocus: appColors.tint,
      placeholderColor: appColors.textDim,
      primary: appColors.palette.primary500,
      primaryHover: appColors.palette.primary600,
      secondary: appColors.palette.secondary500,
      accent: appColors.palette.accent500,
      error: appColors.error,
      success: appColors.palette.primary500,
      warning: appColors.palette.accent500,
      shadowColor: appColors.palette.neutral900,
      shadowColorHover: appColors.palette.neutral900,
      shadowColorPress: appColors.palette.neutral900,
      shadowColorFocus: appColors.palette.neutral900,
      // Add all palette colors for direct access
      ...appColors.palette,
    },
    dark: {
      background: appColors.palette.neutral800,
      backgroundHover: appColors.palette.neutral700,
      backgroundPress: appColors.palette.neutral600,
      backgroundFocus: appColors.palette.neutral700,
      backgroundStrong: appColors.palette.neutral900,
      backgroundTransparent: appColors.transparent,
      color: appColors.palette.neutral100,
      colorHover: appColors.palette.neutral100,
      colorPress: appColors.palette.neutral100,
      colorFocus: appColors.palette.neutral100,
      colorTransparent: appColors.transparent,
      borderColor: appColors.palette.neutral600,
      borderColorHover: appColors.palette.neutral500,
      borderColorPress: appColors.palette.neutral400,
      borderColorFocus: appColors.tint,
      placeholderColor: appColors.palette.neutral500,
      primary: appColors.palette.primary400,
      primaryHover: appColors.palette.primary300,
      secondary: appColors.palette.secondary400,
      accent: appColors.palette.accent400,
      error: appColors.error,
      success: appColors.palette.primary400,
      warning: appColors.palette.accent400,
      shadowColor: appColors.palette.neutral900,
      shadowColorHover: appColors.palette.neutral900,
      shadowColorPress: appColors.palette.neutral900,
      shadowColorFocus: appColors.palette.neutral900,
      // Add all palette colors for direct access
      ...appColors.palette,
    },
  },
  shorthands: {
    ...shorthands,
  } as const,
  fonts: {
    heading: defaultFont,
    body: defaultFont,
    mono: defaultFont,
  },
  media: {
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: "none" },
    pointerCoarse: { pointer: "coarse" },
  },
  settings: {
    // Enables @tamagui/babel-plugin for better tree-shaking
    // and compile-time optimization
    shouldAddPrefersColorThemes: true,
    themeClassNameOnRoot: true,
  },
})

// Enable auto-complete for props in your IDE
type AppConfig = typeof config

declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config
