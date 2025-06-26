
# Dr. Neo Hair Restoration - Design System

This design system ensures consistent visual identity and user experience across the Dr. Neo website and all related digital touchpoints.

## 🎨 Brand Colors

### Primary Palette
- **Primary Yellow (#FAE151)**: Main CTA buttons, key highlights
- **Secondary Brown (#625046)**: Navigation, secondary buttons, text accents  
- **Accent Gold (#A87B23)**: Premium features, borders, icons

### Extended Color Scale
Each primary color includes a complete scale from 50-950 for various use cases:
- 50-200: Backgrounds, subtle accents
- 300-500: Main brand colors
- 600-800: Hover states, active states
- 900-950: Text, borders, shadows

### Semantic Colors
- **Success**: #16a34a (treatment confirmations, success states)
- **Warning**: #f59e0b (important notices, cautions)
- **Error**: #dc2626 (form errors, alert states)
- **Info**: #3b82f6 (informational content, tooltips)

## 📝 Typography

### Font Family
**Primary**: Test Söhne (Apple-style, premium feel)
**Fallback**: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

### Type Scale
- **Heading 1**: 48px-72px (Hero sections)
- **Heading 2**: 36px-48px (Section headers)
- **Heading 3**: 30px-36px (Subsections)
- **Body Large**: 18px (Important body text)
- **Body**: 16px (Standard body text)
- **Small**: 14px (Captions, fine print)

### Font Weights
- Light (300): Subtle text, disclaimers
- Normal (400): Body text
- Medium (500): Navigation, labels
- Semibold (600): Headings, buttons
- Bold (700): Strong emphasis

## 🎯 Spacing System

Based on 8px grid system for consistent rhythm:
- **4px (0.25rem)**: Fine adjustments
- **8px (0.5rem)**: Small gaps
- **16px (1rem)**: Standard spacing
- **24px (1.5rem)**: Component padding
- **32px (2rem)**: Section spacing
- **48px-96px**: Large section gaps

## 🎭 Shadows & Elevation

### Apple-inspired Shadow System
- **Small**: Subtle card elevation
- **Medium**: Standard component elevation
- **Large**: Modal, dropdown elevation
- **Apple**: Signature Apple-style shadows for premium feel

## 🔘 Border Radius

- **Small (2px)**: Input fields, small buttons
- **Medium (8px)**: Cards, standard buttons
- **Large (16px)**: Hero sections, large cards
- **Extra Large (24px)**: Premium components

## 🎬 Animation & Motion

### Duration
- **Fast (150ms)**: Micro-interactions, hover states
- **Normal (300ms)**: Standard transitions
- **Slow (500ms)**: Page transitions, complex animations

### Easing
- **Apple Cubic Bezier**: cubic-bezier(0.25, 0.1, 0.25, 1) for premium feel
- **Ease Out**: Standard for most transitions
- **Ease In Out**: Complex state changes

## 🧩 Component Guidelines

### Buttons
```css
/* Primary CTA Button */
.dr-neo-button-primary {
  background: #FAE151;
  color: #1d1d1f;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 300ms ease-out;
}

/* Secondary Button */
.dr-neo-button-secondary {
  background: #625046;
  color: white;
  /* Same dimensions as primary */
}
```

### Cards
```css
.dr-neo-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  border: 1px solid #e5e5e5;
}
```

### Form Inputs
```css
.dr-neo-input {
  border: 1px solid #d4d4d4;
  border-radius: 8px;
  padding: 12px 16px;
  transition: all 150ms ease-out;
}

.dr-neo-input:focus {
  border-color: #FAE151;
  box-shadow: 0 0 0 2px rgba(250, 225, 81, 0.2);
}
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px - 1280px
- **Large Desktop**: > 1280px

### Layout
- **Container Max Width**: 1200px
- **Side Padding**: 24px (mobile), 48px (desktop)
- **Section Spacing**: 64px (mobile), 96px (desktop)

## ♿ Accessibility

### Color Contrast
- All text meets WCAG AA standards (4.5:1 ratio minimum)
- Interactive elements meet AAA standards (7:1 ratio)

### Focus States
- Visible focus rings on all interactive elements
- High contrast focus indicators
- Keyboard navigation support

## 🎨 Usage Examples

### CSS Custom Properties
```css
/* Using design tokens */
.custom-component {
  background: var(--color-primary-500);
  padding: var(--spacing-6);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-apple);
}
```

### Utility Classes
```html
<!-- Using pre-built component classes -->
<button class="dr-neo-button-primary">Book Consultation</button>
<div class="dr-neo-card">Card content</div>
<input class="dr-neo-input" placeholder="Enter email">
```

### TypeScript Integration
```typescript
import { designTokens, createComponentStyles } from '@/lib/design-tokens';

// Generate dynamic styles
const buttonClass = createComponentStyles.button('primary', 'lg');
const headingClass = createComponentStyles.heading(1);
```

## 🏗️ Implementation

1. **Import design tokens**: All tokens available as CSS custom properties
2. **Use utility classes**: Pre-built classes for common components
3. **TypeScript support**: Type-safe access to all design tokens
4. **Component generators**: Dynamic style generation for complex components

This design system ensures the Dr. Neo brand maintains its premium, medical-grade aesthetic while providing excellent user experience across all devices and touchpoints.
