# DOM (Document Object Model)

## Definition

The **Document Object Model (DOM)** is a programming interface for web documents.  
It represents an HTML page as a structured tree of nodes and objects, allowing JavaScript to **interact with, access, and modify** the page’s structure, style, and content.

---

## Example HTML

```html
<html>
  <body>
    <h1>Hello har</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

## Corresponding DOM Tree

```
Document
 └── html
      └── body
           ├── h1
           │    └── "Hello har" (text node)
           └── p
                └── "This is a paragraph." (text node)
```

---

## Primary entry: `document`

- `document` is the root object used to query and manipulate the DOM.

---

## Selection APIs:

- `document.getElementById(id)`
  - Returns a single `Element` or `null`. Fast for known IDs.
- `document.getElementsByClassName(classNames)`
  - Returns an `HTMLCollection` of matching `Element`s. Accepts a space-separated string of classes that all must be present. `HTMLCollection` is typically _live_.
- `document.getElementsByTagName(tagName)`
  - Returns an `HTMLCollection` (live) of elements with that tag.
- `document.querySelector(selector)`
  - Returns the first `Element` matching the CSS selector, or `null`.
- `document.querySelectorAll(selector)`
  - Returns a `NodeList` of all matches. For `querySelectorAll` the `NodeList` is _static_ (snapshot).

---

## HTMLCollection vs NodeList

- **HTMLCollection**
  - Contains `Element` nodes only.
  - Usually _live_: reflects DOM updates (e.g., `getElementsByClassName`, `children`).
  - Indexed (0..n-1) and in some environments can be accessed by name/id.
- **NodeList**
  - Contains `Node` objects (Element, Text, Comment depending on source).
  - Can be _live_ (`childNodes`) or _static_ (`querySelectorAll`).
  - Modern `NodeList` supports `forEach`; older browsers may not.

---

## Live vs Static

- Live collections update automatically when the DOM changes.  
  Example sources: `getElementsByClassName()`, `getElementsByTagName()`, `element.children`, `childNodes`.
- Static collections do not change after they are created.  
  Example: `querySelectorAll()` returns a static `NodeList`.
- Consequence: iterating and mutating a _live_ collection can skip or repeat items if you modify the DOM while iterating forward. Use a reverse loop or convert to an array first.

---

## Common usage patterns and examples

- getElementsByClassName (live):

```javascript
const items = document.getElementsByClassName("item"); // HTMLCollection
```

- querySelector (single):

```javascript
const firstItem = document.querySelector(".item"); // first matching Element or null
```

- querySelectorAll (static NodeList):

```javascript
const links = document.querySelectorAll("a.external"); // NodeList snapshot
```

- Convert NodeList/HTMLCollection to Array:

```javascript
const arr = Array.from(document.querySelectorAll(".item"));
const arr2 = [...document.getElementsByClassName("item")]; // works if iterable
```

- Iteration patterns:
  - Standard for loop:
  ```javascript
  for (let i = 0; i < list.length; i++) {
    /* ... */
  }
  ```
  - Reverse loop (safe for removals on live lists):
  ```javascript
  for (let i = list.length - 1; i >= 0; i--) {
    list[i].remove();
  }
  ```
  - for...of (works for NodeList and HTMLCollection in modern browsers):
  ```javascript
  for (const el of list) {
    /* ... */
  }
  ```
  - forEach (NodeList supports forEach; HTMLCollection may not in older engines):
  ```javascript
  nodeList.forEach((el) => {
    /* ... */
  });
  ```

---

## Best practices

- Use `getElementById` for single known IDs (fastest).
- For class-only lookups, `getElementsByClassName` can be slightly faster than `querySelectorAll` for simple queries, but differences are usually negligible in modern browsers.
- For complex selection or convenience, prefer `querySelector` / `querySelectorAll`.
- Cache NodeList/HTMLCollection if reused and DOM doesn't change. If DOM can change and you need fresh results, query again.
- Avoid reading layout properties (e.g., `offsetHeight`, `getBoundingClientRect`) repeatedly inside mutation loops — it can force synchronous reflow.

---

## Exercises

1. Select the first element with class "card" inside `#main` and add class `active`.  
   **Answer:**

```javascript
const el = document.querySelector("#main .card");
if (el) el.classList.add("active");
```

2. Remove all elements with class `temp` safely.  
   **Answer (static NodeList):**

```javascript
document.querySelectorAll(".temp").forEach((el) => el.remove());
```
