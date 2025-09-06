---
description: Ensure all UI components support both light and dark themes with proper styling
author: Global Rule
version: 1.0
tags: ["theming", "ui", "accessibility", "dark-mode", "behavioral"]
globs: ["**/*.{js,jsx,ts,tsx,vue,svelte}", "**/*.css", "**/*.scss"]
---

# Theme Compliance Rule

## 🎨 CRITICAL: ALL COMPONENTS MUST SUPPORT THEMES

When creating or modifying UI components, you **MUST** ensure theme compatibility:

### ✅ ALWAYS DO THIS

- Include both light and dark theme styles
- Use theme-aware color variables/classes
- Test component appearance in both themes
- Respect system theme preferences when possible

### Framework Examples

**Tailwind CSS:**
```jsx
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  Content
</div>
```

**CSS Variables:**
```css
.component {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}
```

**Styled Components:**
```jsx
const Component = styled.div`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
`;
```

### ❌ NEVER DO THIS

- Hard-code light-only colors
- Ignore dark theme styling
- Create components that break in theme switches
