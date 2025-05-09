document.addEventListener("click", function (e) {
  // Find the nearest <a> element (for nested elements inside links)
  const anchor = e.target.closest("a");

  if (!anchor || !anchor.href) return;

  const href = anchor.href;

  // Match any medium.com link
  if (href.startsWith("https://medium.com/") && !href.includes("freedium.cfd")) {
    e.preventDefault(); // stop the default navigation
    const redirectUrl = `https://freedium.cfd/${href}`;
    window.location.href = redirectUrl;
  }
});
