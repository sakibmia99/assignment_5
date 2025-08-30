1.Ans: querySelector and querySelectorAll are more flexible because they let you select elements using CSS selectors. querySelector returns only the first matching element, while querySelectorAll returns all matching elements as a static list. Unlike getElementsByClassName, the list from querySelectorAll doesn’t automatically update when the DOM changes.

2.Ans: Creating and inserting a new element into the DOM in JavaScript involves a few clear steps. Here’s how it works conceptually: 1.Create element: document.createElement('tagName') 2.Customize element: set text, classes, IDs, or attributes 3.Insert element: attach it to the parent in the DOM (appendChild or insertBefore)

3.Ans: Event bubbling is a concept in JavaScript’s event handling that describes how events propagate (or travel) through the DOM hierarchy. When an event occurs on a specific element, it first triggers on that element and then bubbles up to its parent elements, all the way to the document. This allows parent elements to also respond to the event. You can stop this propagation using event.stopPropagation().

4.Ans: it allows you to manage events for many child elements efficiently by using one listener on their parent.Less memory usage: You don’t need separate listeners for each child.Dynamic elements: Works for elements added to the DOM after the listener is attached.Simpler code: Easier to manage and maintain.
 
 5.Ans: preventDefault() and stopPropagation() are two distinct methods used in event handling within the DOM.
1.preventDefault() stops the default browser action associated with an event, such as following a link or submitting a form.
2.stopPropagation() stops the event from bubbling up (or capturing down) the DOM, preventing parent elements from receiving the event.