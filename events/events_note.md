# HTML Events - Complete Guide

A comprehensive guide to understanding JavaScript events, event handling, and event propagation.

---

## Table of Contents

1. [Three Ways to Add Event Listeners](#three-ways-to-add-event-listeners)
2. [Event Object Properties](#event-object-properties)
3. [Event Propagation](#event-propagation)
4. [Event Bubbling](#event-bubbling)
5. [Event Capturing](#event-capturing)
6. [Stopping Event Propagation](#stopping-event-propagation)
7. [Preventing Default Behavior](#preventing-default-behavior)
8. [Event Delegation](#event-delegation)

---

## Three Ways to Add Event Listeners

### 1. HTML Attribute (Not Recommended)

```javascript
// Directly in HTML
onclick = "functionName()";
```

**Pros:** Simple and quick
**Cons:** Mixes HTML with JavaScript, poor maintainability, harder to manage multiple events

### 2. DOM Property (Old Method)

```javascript
document.getElementById("camera").onclick = function () {
  alert("Camera clicked");
};
```

**Pros:** Separates logic from HTML
**Cons:** Can only add one event listener per event type (overwrites previous listeners)

### 3. addEventListener() Method (Best Way) ✓

```javascript
element.addEventListener("event", functionName, useCapture);
```

**Pros:**

- Can add multiple event listeners to the same element
- Better control over event propagation
- More flexible and modern
- Recommended approach

**Syntax:**

```javascript
element.addEventListener(
  "click",
  function (e) {
    // Your code here
  },
  false
); // false = bubbling, true = capturing
```

---

## Event Object Properties

When an event occurs, JavaScript automatically passes an **event object** to the callback function. This object contains useful information about the event.

### Common Event Object Properties

| Property           | Description                                         |
| ------------------ | --------------------------------------------------- |
| `type`             | Type of event (e.g., "click", "mouseover")          |
| `timestamp`        | Time when the event occurred                        |
| `defaultPrevented` | Whether preventDefault() was called                 |
| `target`           | The element that triggered the event                |
| `toElement`        | The element the mouse moved to                      |
| `srcElement`       | The source element (older property)                 |
| `currentTarget`    | The element with the event listener                 |
| `clientX`          | Horizontal coordinate of mouse relative to viewport |
| `clientY`          | Vertical coordinate of mouse relative to viewport   |
| `screenX`          | Horizontal coordinate of mouse relative to screen   |
| `screenY`          | Vertical coordinate of mouse relative to screen     |
| `altKey`           | Whether Alt key was pressed                         |
| `ctrlKey`          | Whether Ctrl key was pressed                        |
| `shiftKey`         | Whether Shift key was pressed                       |
| `keyCode`          | Code of the key pressed                             |

**Example:**

```javascript
element.addEventListener("click", function (e) {
  console.log(e.type); // "click"
  console.log(e.target); // The clicked element
  console.log(e.clientX); // Mouse X position
  console.log(e.timestamp); // Time of event
});
```

---

## Event Propagation

Event propagation describes how events travel through the DOM (Document Object Model) when an event occurs on an element.

When you click on an element, the event doesn't just trigger that element's handler. Instead, it travels through the DOM in two phases:

1. **Capturing Phase** (from top to bottom)
2. **Bubbling Phase** (from bottom to top)

### Flow Diagram

```
Document (Window)
    ↓
  HTML
    ↓
  Body
    ↓
  UL (Parent)
    ↓
  LI
    ↓
  IMG (Target/Source)
```

---

## Event Bubbling

**Definition:** The event starts from the innermost element (target) and propagates upward (bubbles up) to its parent elements.

**Default Behavior:** Most events bubble up by default

**When to use:** `addEventListener("event", function, false)` or omit third parameter

### Example: Event Bubbling

```javascript
// Parent element
document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log("clicked inside the ul");
  },
  false // bubbling phase (default)
);

// Child element
document.getElementById("bike").addEventListener(
  "click",
  function (e) {
    console.log("Bike clicked");
  },
  false // bubbling phase
);
```

### Output When Clicking Bike:

```
Bike clicked
clicked inside the ul
```

**Explanation:**

1. Click happens on bike image
2. Bike's event listener triggers → "Bike clicked"
3. Event bubbles up to parent `<ul>`
4. Parent's event listener triggers → "clicked inside the ul"

### Visual Representation

```
Event Bubbling (Upward Direction):
IMG ──→ LI ──→ UL ──→ Body ──→ HTML ──→ Document
 ↑
Click here
```

---

## Event Capturing

**Definition:** The event starts from the outermost element (document/window) and propagates downward to the target element.

**When to use:** `addEventListener("event", function, true)` - set third parameter to `true`

**Note:** Capturing is less commonly used than bubbling

### Example: Event Capturing

```javascript
document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log("capturing phase: clicked ul");
  },
  true // capturing phase
);

document.getElementById("bike").addEventListener(
  "click",
  function (e) {
    console.log("capturing phase: bike clicked");
  },
  true // capturing phase
);
```

### Output When Clicking Bike:

```
capturing phase: clicked ul
capturing phase: bike clicked
```

**Explanation:**

1. Event starts from `<ul>` (outermost)
2. Parent's listener triggers → "capturing phase: clicked ul"
3. Event moves down to bike image
4. Bike's listener triggers → "capturing phase: bike clicked"

### Visual Representation

```
Event Capturing (Downward Direction):
Document ──→ HTML ──→ Body ──→ UL ──→ LI ──→ IMG
                                        Click here ↓
```

---

## Stopping Event Propagation

### e.stopPropagation()

**Purpose:** Prevents the event from bubbling up to parent elements or capturing down to child elements

**Syntax:**

```javascript
e.stopPropagation();
```

### Example

```javascript
document.getElementById("bike").addEventListener(
  "click",
  function (e) {
    console.log("Bike clicked");
    e.stopPropagation(); // Stops event from bubbling to parent
  },
  false
);

document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log("clicked inside the ul");
  },
  false
);
```

### Output When Clicking Bike:

```
Bike clicked
```

**Explanation:** The parent's event listener never fires because `stopPropagation()` prevented the event from bubbling up.

### Without stopPropagation():

```
Bike clicked
clicked inside the ul
```

---

## Preventing Default Behavior

### e.preventDefault()

**Purpose:** Prevents the default action of an event from occurring

**Common Uses:**

- Stop form submission
- Prevent link navigation
- Stop page scroll on space key

**Syntax:**

```javascript
e.preventDefault();
```

### Example: Preventing Link Navigation

```javascript
document.getElementById("google").addEventListener(
  "click",
  function (e) {
    e.preventDefault(); // Prevents navigating to google.com
    e.stopPropagation(); // Stops event from bubbling
    console.log("google clicked");
    // Could redirect somewhere else or show a message
  },
  false
);
```

### Output When Clicking Google Link:

```
google clicked
```

**What happened:**

- Link was NOT navigated to
- Default behavior was prevented
- Custom action occurred instead

---

## Event Delegation

**Definition:** A technique where you attach a single event listener to a parent element instead of attaching listeners to multiple child elements.

**Why use it:**

- More efficient (fewer event listeners)
- Works with dynamically added elements
- Cleaner code

**How it works:** Use `e.target` to identify which child element was clicked

### Example: Event Delegation

```javascript
document.querySelector("#images").addEventListener("click", function (e) {
  console.log(e.target.tagName); // Shows which element was clicked

  if (e.target.tagName === "IMG") {
    console.log(e.target.id); // Shows the image ID
    let removeIt = e.target.parentNode;
    removeIt.remove(); // Removes the <li> containing the image
  }
});
```

### How It Works Step by Step:

1. User clicks on any image inside the `<ul>`
2. Event bubbles up to the `<ul>` (parent)
3. Parent's event listener triggers
4. Check if clicked element is an `<IMG>` using `e.target.tagName`
5. If it's an image, log its ID
6. Remove the parent `<li>` element

### Example Flow:

```
Click on Bike Image
    ↓
Event bubbles to UL
    ↓
Check: Is target an IMG? → YES
    ↓
Get image ID → "bike"
    ↓
Get parent node (LI) → Remove it
    ↓
Bike image and its container disappear
```

### Benefits:

| Without Delegation                  | With Delegation                   |
| ----------------------------------- | --------------------------------- |
| Add listener to each image          | Add listener to parent once       |
| 5 images = 5 listeners              | 5 images = 1 listener             |
| Dynamic images won't have listeners | Dynamic images work automatically |
| More memory usage                   | Less memory usage                 |

---

## Quick Reference Cheat Sheet

```javascript
// Three ways to add events
element.onclick = function () {}; // Old way
element.addEventListener("click", func); // Best way (bubbling)
element.addEventListener("click", func, true); // Capturing

// Event object properties
e.target; // Element that triggered the event
e.type; // Type of event ("click", "mouseover", etc.)
e.preventDefault(); // Stop default behavior
e.stopPropagation(); // Stop event from bubbling/capturing

// Event delegation
if (e.target.tagName === "IMG") {
  // Do something with the image
}

// Propagation phases
false; // Bubbling phase (default)
true; // Capturing phase
```

---
