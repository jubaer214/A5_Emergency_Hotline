1. Difference Between Selection Methods

--getElementById → Selects one element by ID, returns single element or null. Fastest.
--getElementsByClassName → Selects elements by class, returns a live HTMLCollection (auto-updates). Need index to access one.
--querySelector → Selects the first element matching a CSS selector, returns single element or null. Very flexible.
--querySelectorAll → Selects all elements matching a CSS selector, returns a static NodeList (doesn’t auto-update).

2. Create & Insert New Element
--Create: document.createElement("div") → exists only in memory.
--Insert: Use methods like appendChild, prepend, before, after to place it in the DOM.

3. Event Bubbling
--Event starts at the target element and bubbles up through parents (button → div → body → document).
--Useful because it allows event delegation.

4. Event Delegation
--Attach one listener to a parent, handle events from children via bubbling.
--Benefits: fewer listeners, works for dynamically added elements, saves memory.

5. preventDefault() vs stopPropagation()
--preventDefault() → Stops browser’s default action (e.g., prevent link navigation or form submission).
--stopPropagation() → Stops event bubbling, so parent handlers don’t fire.