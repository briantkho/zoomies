import { FC } from "react"
import { View, Text, YStack, XStack, Button } from "tamagui"

import { Screen } from "@/components/Screen"
import {
  Container,
  Card,
  Section,
  Heading,
  Title,
  Body,
  SPACING,
  RADIUS,
  SHADOWS,
} from "@/theme/tamagui-utils"

const PRESS_STYLE = {
  opacity: 0.8,
  scale: 0.98,
} as const

export const HomeScreen: FC = function HomeScreen() {
  return (
    <Screen preset="scroll">
      <Container>
        <Section>
          {/* Example: Using Heading component */}
          <Heading>Welcome to Zoomies</Heading>

          {/* Example: Using Card with proper spacing */}
          <Card>
            <YStack gap={SPACING.md}>
              <Title>Tamagui Setup Complete!</Title>
              <Body>
                This is an example of using Tamagui with proper spacing and styling. All components
                use the centralized theme configuration.
              </Body>
            </YStack>
          </Card>

          {/* Example: Custom styled View with spacing tokens */}
          <View
            backgroundColor="$primary"
            padding={SPACING.lg}
            borderRadius={RADIUS.lg}
            {...SHADOWS.md}
          >
            <Text color="$backgroundStrong" fontSize="$6" fontWeight="$6">
              Colored Card with Shadow
            </Text>
            <Text color="$backgroundStrong" fontSize="$4" marginTop={SPACING.sm}>
              You can use spacing tokens like {SPACING.sm}, {SPACING.md}, {SPACING.lg}
            </Text>
          </View>

          {/* Example: Horizontal layout with XStack */}
          <XStack gap={SPACING.md} flexWrap="wrap">
            <Button
              backgroundColor="$primary"
              color="$backgroundStrong"
              paddingHorizontal={SPACING.lg}
              paddingVertical={SPACING.md}
              borderRadius={RADIUS.md}
              pressStyle={PRESS_STYLE}
            >
              Primary Button
            </Button>

            <Button
              backgroundColor="$secondary"
              color="$backgroundStrong"
              paddingHorizontal={SPACING.lg}
              paddingVertical={SPACING.md}
              borderRadius={RADIUS.md}
              pressStyle={PRESS_STYLE}
            >
              Secondary Button
            </Button>
          </XStack>

          {/* Example: Responsive spacing */}
          <YStack
            gap={SPACING.md}
            padding={SPACING.lg}
            backgroundColor="$background"
            borderRadius={RADIUS.md}
            borderWidth={1}
            borderColor="$borderColor"
          >
            <Text fontSize="$5" fontWeight="$6" color="$color">
              Spacing Examples
            </Text>
            <Text fontSize="$3" color="$colorTransparent">
              • xxxs: 2px
            </Text>
            <Text fontSize="$3" color="$colorTransparent">
              • xxs: 4px
            </Text>
            <Text fontSize="$3" color="$colorTransparent">
              • xs: 8px
            </Text>
            <Text fontSize="$3" color="$colorTransparent">
              • sm: 12px
            </Text>
            <Text fontSize="$3" color="$colorTransparent">
              • md: 16px
            </Text>
            <Text fontSize="$3" color="$colorTransparent">
              • lg: 24px
            </Text>
            <Text fontSize="$3" color="$colorTransparent">
              • xl: 32px
            </Text>
          </YStack>
        </Section>
      </Container>
    </Screen>
  )
}
