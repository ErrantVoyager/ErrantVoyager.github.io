document.addEventListener("DOMContentLoaded", function() {
  const hostname = window.location.hostname;

  document.querySelectorAll("a[href]").forEach(link => {
    const href = link.getAttribute("href");

    if (href.startsWith("http") && !href.includes(hostname)) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});