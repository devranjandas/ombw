/* Wires config.js values into the page. No need to edit this file. */
(function () {
  var c = window.OMBW_CONFIG || {};

  // Fill text placeholders: <span data-config="DATES">
  document.querySelectorAll("[data-config]").forEach(function (el) {
    var key = el.getAttribute("data-config");
    if (c[key] != null) el.textContent = c[key];
  });

  // Build a wa.me link with a pre-filled message
  function waLink(message) {
    var num = (c.WHATSAPP_NUMBER || "").replace(/[^0-9]/g, "");
    return "https://wa.me/" + num + "?text=" + encodeURIComponent(message || "");
  }

  function setHref(id, href) {
    var el = document.getElementById(id);
    if (el) el.setAttribute("href", href);
  }

  // Registration buttons
  setHref("cta-register-hero", c.REGISTRATION_URL || "#");
  setHref("cta-register-final", c.REGISTRATION_URL || "#");

  // General WhatsApp buttons
  var general = waLink(c.WHATSAPP_MSG_GENERAL);
  setHref("cta-whatsapp-hero", general);
  setHref("cta-whatsapp-final", general);
  setHref("float-whatsapp", general);

  // Intro-talk WhatsApp button (different pre-filled message)
  setHref("cta-whatsapp-intro", waLink(c.WHATSAPP_MSG_INTRO_TALK));

  // Open external links in a new tab
  ["cta-register-hero", "cta-register-final", "cta-whatsapp-hero",
   "cta-whatsapp-final", "cta-whatsapp-intro", "float-whatsapp"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) { el.setAttribute("target", "_blank"); el.setAttribute("rel", "noopener"); }
  });

  // Intro video embed
  var iframe = document.getElementById("intro-video");
  if (iframe && c.VIDEO_EMBED_URL) iframe.setAttribute("src", c.VIDEO_EMBED_URL);
})();
