// Explain how you’d make a modal dialog accessible.



{/* role="dialog" → announces to screen readers that this is a dialog. */}

{/* aria-modal="true" → tells assistive tech that interaction is limited to this modal. */}

{/* aria-labelledby → connects to modal title. */}

{/* aria-describedby → connects to description text */}

{/* Use aria-hidden="true" or visually hide background content while modal is active. */}

<button id="openModal">Open Modal</button>

<div role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-desc" hidden>
  <h2 id="modal-title">Delete File</h2>
  <p id="modal-desc">Are you sure you want to delete this file? This action cannot be undone.</p>
  
  <button id="confirmDelete">Yes, Delete</button>
  <button id="closeModal">Cancel</button>
</div>

// To make a modal accessible, I’d start with semantic roles and attribute
// s — role="dialog", aria-modal="true", and connect the title and description with aria-labelledby
//  and aria-describedby. Next, I’d implement focus management: trap focus inside the modal, 
//  move focus to the modal when it opens, and return focus to the trigger when it closes. 
//  Keyboard accessibility is crucial — Esc to close, Tab navigation within the modal. 
//  Finally, I’d hide background content from screen readers with aria-hidden and ensure the modal works
//   with zoom, screen readers, and without a mouse. This ensures a modal that’s usable for everyone.
