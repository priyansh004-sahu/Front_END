# Sheryians Coding School  

## Notes Day 6  

---

## Day 4: Responsive with CSS  

### Responsive Design  

#### Mobile-First Approach  

**Purpose:**  
Prioritizes mobile user experience, improves performance, and keeps the codebase cleaner.  

**Techniques:**  
- Start styling for mobile devices first, without media queries.  
- Use `@media (min-width: value)` for larger screen styles.  

---

### Responsive Design  

#### @media Queries  

**Purpose:**  
Apply styles dynamically based on screen width or other device characteristics.  

**Techniques:**  
- `@media (min-width: value)`: Styles apply for screens **wider** than the given value.  
- `@media (max-width: value)`: Styles apply for screens **narrower** than the given value.  
- Define breakpoints as **SCSS variables** for better maintainability.  

---

### Responsive Design  

#### Grid  

**Purpose:**  
Provides two-dimensional layouts with **rows and columns** for complex designs.  

**Techniques:**  
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 10px;
