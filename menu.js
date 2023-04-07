
const menuButton = document.getElementById("menulogo");
const menuPanel = document.getElementById("menupanel");

let isMenuVisible = false;

menuButton.addEventListener("click", () => {
  if (isMenuVisible) {
	// hide the menu panel
	menuPanel.style.top = "-100%";
	menuPanel.style.visibility = "hidden";
  } else {
	// show the menu panel and move it to the top of the visible area
	menuPanel.style.top = "0";
	menuPanel.style.visibility = "visible";
	window.scrollTo(0, 0);
  }

  // toggle the visibility flag
  isMenuVisible = !isMenuVisible;
});
