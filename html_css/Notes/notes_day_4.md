# Sheryians Coding School

## Notes Day 4

## Complete CSS Notes - Day 1

### Basics of CSS

#### What is CSS & Why it’s Important?
CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation of HTML documents. It allows developers to style web pages by defining colors, layouts, fonts, and spacing, ensuring better design and user experience.

### CSS Syntax & Structure
A CSS rule consists of a selector and a declaration block:

```css
selector {
    property: value;
}
```

---

## CSS Selectors

Selectors are used to target HTML elements.

### Adding CSS to HTML
There are three ways to apply CSS:
1. Inline CSS
2. Internal CSS
3. External CSS

### Selector Precedence (Specificity & Importance)
- Inline styles have the highest specificity.
- ID selectors (`#id`) have higher priority than class selectors (`.class`).
- Class selectors have higher priority than element selectors (`div, p`).
- The `!important` rule overrides all other styles.

---

## Text Styling Properties

### Font Properties
- `font-family`
- `font-size`
- `font-weight`
- `font-style`
- `line-height`

### Text Properties
- `color`
- `text-align`
- `text-decoration`
- `text-transform`
- `letter-spacing`

---

## Colors & Units in CSS

### Color Representation
- Named colors: `red`, `blue`, `green`
- RGB format: `rgb(255, 0, 0)`
- Hex format: `#ff0000`
- HSL format: `hsl(0, 100%, 50%)`
- RGBA format: `rgba(255, 0, 0, 0.5)` (adds transparency)

### CSS Units
- **Absolute Units**: `px`, `cm`, `mm`
- **Relative Units**: `%`, `rem`, `em`
- **Viewport Units**: `vw`, `vh`

---

## Box Model & Layout

### Box Properties
The CSS box model consists of:
- `content`
- `padding`
- `border`
- `margin`

### Border Properties
- `border-width`: Sets the thickness
- `border-style`: Defines the type (solid, dashed, dotted)
- `border-color`: Sets the color
- `border-radius`: Rounds corners

---

## Background & Shadows

### Background Properties
- `background-color`: Sets background color
- `background-image`: Adds an image
- `background-size`: Defines image size (`cover`, `contain`)
- `background-position`: Positions image
- `background-repeat`: Repeats image (`repeat`, `no-repeat`)
- `linear-gradient()`: Creates gradient backgrounds

### Shadow Effects
- `box-shadow`
- `text-shadow`

---

# Project Exercise 3: Styling The Page

### Topic Covered: CSS

#### Description
In this exercise, students will style the blog page created in Project Exercise 1 using CSS. They will:
- Add background colors to sections.
- Set text colors and choose appropriate fonts.
- Adjust text sizes, line heights, and font styles for readability.
- Apply padding and margins for proper spacing between elements.
- Utilize CSS selectors and the box model to structure and design the layout effectively.

#### Skills Covered
- CSS styling and applying selectors
- Text formatting (fonts, sizes, colors)
- Understanding and using padding/margins
- Mastering the box model for layout control
