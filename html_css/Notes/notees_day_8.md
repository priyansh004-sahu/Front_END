# Sheryians Coding School

## Notes Day 7

### Day 5: Responsive with CSS

## SCSS (Sassy CSS)

### Relative Units

**Purpose:** Ensures scalable and responsive typography and spacing.

#### Techniques
- **%** - Percentage relative to parent
- **rem** - Root em, relative to `<html>` font size (preferred for global scaling)
- **em** - Relative to the current element’s font size.

#### Example:
```
S H E R Y I A N S  C O D I N G  S C H O O L
```

---

### Nesting

**Purpose:** Improves readability by grouping related styles together.

#### Techniques
- Nest selectors following HTML structure
- Limit nesting depth (max 3-4 levels).

#### Example:
```
S H E R Y I A N S  C O D I N G  S C H O O L


---

### Variables

**Purpose:** Store reusable values for consistency and easy updates.

#### Techniques
- Define global variables in `_variables.scss`
- Use `$variable-name: value;`

#### Example:
```
S H E R Y I A N S  C O D I N G  S C H O O L
```

---

### Mixins

**Purpose:** Create reusable blocks of CSS code for flexibility.

#### Techniques
- Define with `@mixin` and include with `@include`
- Use parameters for flexibility.

#### Example:
```
S H E R Y I A N S  C O D I N G  S C H O O L
```

---

### Partials & @import

**Purpose:** Helps organize and modularize SCSS files.

#### Techniques
- Store styles in `_variables.scss`, `_mixins.scss`, etc.
- Import using `@import 'filename';`

#### Example:
```
S H E R Y I A N S  C O D I N G  S C H O O L
```

---

## Performance Optimization

### Optimize Images

**Purpose:** Reduces file size for faster loading.

#### Techniques
- Use tools like TinyPNG, ImageOptim
- Choose appropriate formats: JPEG, PNG, WebP, SVG
- Resize images for different screen sizes
- Use responsive images with `srcset`.

#### Example:
```
S H E R Y I A N S  C O D I N G  S C H O O L
html {
font-size: 16px;
}
p {
font-size: 1.2rem; // Scales with root font size
}
```

---

### Lazy Loading

**Purpose:** Defers loading of offscreen images to improve performance.

#### Techniques
- Use `loading="lazy"` for `<img>` and `<iframe>`
- Use JavaScript Intersection Observer for advanced loading.

#### Example:
```
S H E R Y I A N S  C O D I N G  S C H O O L
```

