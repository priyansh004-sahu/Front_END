# Sheryians Coding School  

## Notes Day 5  

## Day 2: More About CSS  

### Understanding Background Properties  
CSS provides various background properties to enhance the visual appeal of web pages. These properties allow developers to control the background image, size, positioning, and repeating behavior.  

### Background-size  
Defines how a background image is scaled within an element:  
- `background-size: cover;` → The image covers the entire element, maintaining its aspect ratio.  
- `background-size: contain;` → The image scales to fit inside the element while maintaining its aspect ratio.  
- `background-size: 50% 50%;` → The image is resized to 50% of the width and height of the element.  

### Background-image  
Used to set an image as the background of an element.  

### Background-repeat  
Controls whether the background image repeats and how:  
- `background-repeat: repeat;` (default) → Image repeats both horizontally and vertically.  
- `background-repeat: no-repeat;` → Image does not repeat.  
- `background-repeat: repeat-x;` → Image repeats horizontally.  
- `background-repeat: repeat-y;` → Image repeats vertically.  

### Background-position  
Defines the starting position of a background image:  
- `background-position: center;` → Centers the image.  
- `background-position: top left;` → Positions the image at the top-left.  
- `background-position: 50% 50%;` → Places the image in the middle.  

### Linear-gradient  
Creates a smooth transition of colors in a straight line.  

### Radial-gradient  
Creates a circular gradient effect.  

### px vs %  
- `px` (Pixels): A fixed unit of measurement. Useful when you need precise control over an element’s size.  
- `%` (Percentage): Relative to the parent container. Useful for responsive designs.  

### Working with Positional Properties  

#### `position: absolute`  
CSS position properties define how an element is positioned within its container.  
- Removes the element from the normal document flow and positions it relative to the nearest positioned ancestor (or the viewport if no positioned ancestor exists).  

#### `position: relative`  
Positions an element relative to its normal position.  

#### `transform: translate`  
Moves an element without affecting surrounding elements.  

## Introduction to Flexbox for Alignment & Structure  
Flexbox is a powerful layout system in CSS that helps in aligning and distributing elements efficiently.  

## Two-Column Layout with Flexbox  
### Project Exercise 4: Two-Column Layout with Flexbox  

## Project Exercise 3: Styling The Page  

### What TO Do  
- **HTML First, Simple Structure**: Create basic HTML with divs (header, nav, sidebar, main, footer) and placeholder text.  
- **Link CSS**: Connect `styles.css` to your HTML in `<head>`.  
- **Display Exploration**: Try `display: block`, `inline`, `inline-block`, `none`, `flex`, `grid` on elements. See the changes.  
- **Flexbox for 2 Columns**: Use `display: flex` on `body`. Experiment with `flex-direction`, `justify-content`, `align-items`. Use `flex-grow: 1` for main content.  
- **Use Inspect Element**: Crucial! Use browser tools to see CSS and experiment live.  
- **One Property at a Time**: Change one CSS rule, then check the browser.  
- **Read Solution Comments**: Understand why the solution code works.  
- **Ask Questions**: Get help when stuck!  

### What NOT to Do  
- **Don't Start Complex**: Focus on layout basics first, styling later.  
- **Don't Overwhelm Yourself**: Focus on `display`, Flexbox, positioning, `overflow` for now.  
- **Don't Skip Inspect Element**: It's essential for learning.  
- **Don't Fear Experimenting**: Breaking things is part of learning.  
- **Don't Just Copy Solution**: Try yourself first, then understand the solution.  
