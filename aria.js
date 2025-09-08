// How do you make a custom toggle button accessible? //

// Use aria-pressed to indicate toggle state
// <button> supports Enter + Space by default, so no extra work needed.

//Use aria-controls="elementId" if it directly affects a region (e.g., collapsing a panel).



<button aria-pressed="false" aria-label="Toggle dark mode" id="darkModeToggle">
  🌙
</button>


  const btn = document.getElementById("darkModeToggle");
  btn.addEventListener("click", () => {
    const isPressed = btn.getAttribute("aria-pressed") === "true";
    btn.setAttribute("aria-pressed", String(!isPressed));
    document.body.classList.toggle("dark", !isPressed);
  });


 // I’d make a toggle button accessible by using a <button> element and managing its state with the aria-pressed attribute. 
 // That way, screen readers announce whether 
 // it’s pressed or not. It’s automatically keyboard-accessible via Enter/Space, 
 // and I’d ensure the button updates both visually and programmatically when toggled. 
 // If it affects other content, I’d also connect it with aria-controls for extra clarity.

