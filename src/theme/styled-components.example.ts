/**
 * Example: Creating Custom Styled Components with Tamagui
 * 
 * This file shows how to create your own reusable styled components
 * using Tamagui's `styled()` function.
 */

import { styled, View, Text } from "tamagui"

/**
 * Example 1: Simple Styled Component
 * A basic badge component
 */
export const Badge = styled(View, {
  paddingHorizontal: "$sm",
  paddingVertical: "$xxs",
  borderRadius: "$full",
  backgroundColor: "$primary",
  alignSelf: "flex-start",
})

export const BadgeText = styled(Text, {
  fontSize: "$2",
  fontWeight: "$6",
  color: "$backgroundStrong",
})

/**
 * Example 2: Component with Variants
 * A button with different size and variant options
 */
export const CustomButton = styled(View, {
  // Base styles
  borderRadius: "$md",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",

  // Hover state
  hoverStyle: {
    opacity: 0.9,
  },

  // Press state
  pressStyle: {
    opacity: 0.8,
    scale: 0.98,
  },

  // Variants
  variants: {
    variant: {
      primary: {
        backgroundColor: "$primary",
      },
      secondary: {
        backgroundColor: "$secondary",
      },
      outline: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: "$primary",
      },
      ghost: {
        backgroundColor: "transparent",
      },
    } as const,

    size: {
      sm: {
        paddingHorizontal: "$sm",
        paddingVertical: "$xs",
      },
      md: {
        paddingHorizontal: "$md",
        paddingVertical: "$sm",
      },
      lg: {
        paddingHorizontal: "$lg",
        paddingVertical: "$md",
      },
    } as const,

    disabled: {
      true: {
        opacity: 0.5,
        cursor: "not-allowed",
        hoverStyle: {
          opacity: 0.5,
        },
        pressStyle: {
          opacity: 0.5,
          scale: 1,
        },
      },
    } as const,
  },

  // Default variants
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
})

/**
 * Example 3: Component with Pseudo States
 * An input field with focus and error states
 */
export const CustomInput = styled(View, {
  borderWidth: 1,
  borderColor: "$borderColor",
  borderRadius: "$md",
  paddingHorizontal: "$md",
  paddingVertical: "$sm",
  backgroundColor: "$backgroundStrong",

  focusStyle: {
    borderColor: "$primary",
    borderWidth: 2,
  },

  variants: {
    error: {
      true: {
        borderColor: "$error",
      },
    },
  } as const,
})

/**
 * Example 4: Responsive Component
 * A container that changes padding based on screen size
 */
export const ResponsiveContainer = styled(View, {
  width: "100%",
  paddingHorizontal: "$md",

  $gtSm: {
    paddingHorizontal: "$lg",
  },

  $gtMd: {
    paddingHorizontal: "$xl",
    maxWidth: 1200,
    marginHorizontal: "auto",
  },
})

/**
 * Example 5: Animated Component
 * A component with animation properties
 */
export const AnimatedCard = styled(View, {
  backgroundColor: "$backgroundStrong",
  borderRadius: "$lg",
  padding: "$lg",
  borderWidth: 1,
  borderColor: "$borderColor",

  animation: "quick",

  hoverStyle: {
    scale: 1.02,
    borderColor: "$primary",
  },

  pressStyle: {
    scale: 0.98,
  },
})

/**
 * Example 6: Conditional Styling
 * A component that changes based on props
 */
export const StatusIndicator = styled(View, {
  width: 12,
  height: 12,
  borderRadius: "$full",

  variants: {
    status: {
      online: {
        backgroundColor: "$primary500",
      },
      offline: {
        backgroundColor: "$neutral400",
      },
      busy: {
        backgroundColor: "$error",
      },
      away: {
        backgroundColor: "$accent500",
      },
    } as const,
  },

  defaultVariants: {
    status: "offline",
  },
})

/**
 * Usage Examples:
 */

/*
// Badge
<Badge>
  <BadgeText>New</BadgeText>
</Badge>

// CustomButton
<CustomButton variant="primary" size="lg" onPress={handlePress}>
  <Text color="$backgroundStrong">Click Me</Text>
</CustomButton>

<CustomButton variant="outline" size="md">
  <Text color="$primary">Outline Button</Text>
</CustomButton>

// CustomInput
<CustomInput error={hasError}>
  <TextInput placeholder="Enter text..." />
</CustomInput>

// ResponsiveContainer
<ResponsiveContainer>
  <Text>Content that responds to screen size</Text>
</ResponsiveContainer>

// AnimatedCard
<AnimatedCard>
  <Text>Hover or press me for animation</Text>
</AnimatedCard>

// StatusIndicator
<StatusIndicator status="online" />
<StatusIndicator status="busy" />
*/

/**
 * Best Practices for Creating Styled Components:
 * 
 * 1. Use token references ($primary, $md, etc.) instead of hardcoded values
 * 2. Define variants for different states and options
 * 3. Set default variants for common use cases
 * 4. Use TypeScript's `as const` for variant definitions
 * 5. Include hover and press styles for interactive components
 * 6. Use responsive styles with media queries ($gtMd, $gtLg, etc.)
 * 7. Keep components focused and single-purpose
 * 8. Export components from a central location for consistency
 */

