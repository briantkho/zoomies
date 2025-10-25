/**
 * Common Tamagui Components
 *
 * This file exports commonly used Tamagui components for convenience.
 * Import from here to have consistent imports throughout your app.
 */

// Re-export core Tamagui components
export {
  View,
  Text,
  Stack,
  YStack,
  XStack,
  ZStack,
  Button,
  Input,
  Image,
  ScrollView,
  Circle,
  Square,
  Theme,
  useTheme,
  styled,
  createStyledContext,
  TamaguiProvider,
} from "tamagui"

// Re-export utilities
export {
  Container,
  Card,
  Section,
  Row,
  Column,
  Heading,
  Title,
  Subtitle,
  Body,
  Caption,
  SPACING,
  RADIUS,
  SHADOWS,
  responsive,
} from "./tamagui-utils"
