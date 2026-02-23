# B13-A04

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans :

<!-- getElementById() -->

Selects a single element by its ID.
Returns only one element.
IDs must be unique.

<!-- getElementsByClassName() -->

Selects elements by class name.
Returns a live HTMLCollection.
Can return multiple elements.

<!-- querySelector() -->

Selects the first matching element using a CSS selector.
Returns only one element.

<!-- querySelectorAll() -->

Selects all matching elements using a CSS selector.
Returns a NodeList.

### 2. How do you create and insert a new element into the DOM?

Ans :To create and insert a new element into the DOM:
Use document.createElement() to create an element.
Add content or attributes.
Use appendChild() or append() to insert it into the DOM.

<!-- Example: -->

const newDiv = document.createElement("div");
newDiv.textContent = "Hello World";
document.body.appendChild(newDiv);

<!-- Steps: -->

Create element
Add content
Insert into parent element

### 3. What is Event Bubbling? And how does it work?

Ans :Event Bubbling is a process where an event starts from the target element and then bubbles up to its parent elements.

<!-- Example: -->

If you click a button inside a div:
First → button event runs
Then → div event runs
Then → body event runs

<!-- JS -->

button.addEventListener("click", () => {
console.log("Button clicked");
});
div.addEventListener("click", () => {
console.log("Div clicked");
});

If the button is clicked:
Button message shows first
Then div message shows
This is called Event Bubbling.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Ans :Event Delegation is a technique where instead of adding event listeners to multiple child elements, you add a single event listener to their parent element.

It works because of event bubbling.

<!-- Why it is useful: -->

Improves performance
Uses less memory
Works for dynamically added elements
Cleaner and more efficient code

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Ans :preventDefault()

Prevents the default behavior of an element.

<!-- Example: -->

Stops a form from submitting
Stops a link from opening

stopPropagation()

Stops the event from bubbling up to parent elements.

<!-- Example: -->

If you click a link inside a div:
preventDefault() → link will not open
stopPropagation() → div click event will not run
