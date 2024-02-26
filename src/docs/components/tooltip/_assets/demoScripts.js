document.addEventListener("HTMLParsed", () => {
  const downloadElement = document.querySelector("#download");

  Opera.createTooltip(downloadElement, {
    content: "Download document",
    position: "right",
    delay: 1000,
  });

  const definitionTooltip = document.querySelector("#definition");
  const definitionTooltipConfig = {
    type: "toggle",
    position: "top-right",
    content:
      "Definition tooltips allow for a brief definition of a term or a term that is not in the main body of the text.",
    btnLeft: {
      content: "Dismiss",
      action: "dismiss",
    },
    btnRight: {
      content: "View",
      action: "scrollTo",
      scrollTarget: "page-title",
    },
  };

  Opera.createTooltip(definitionTooltip, definitionTooltipConfig);

  const linkTooltip = document.querySelector("#home-link");
  const linkTooltipConfig = {
    type: "toggle",
    position: "top-right",
    content:
      "Jump right into building with Opera—use the CDN, install it via the package manager, or download the source code",
    btnRight: {
      content: "Learn more",
      action: "openNewTab",
      href: "https://demo.bitas.net/ui/docs/",
    },
  };

  Opera.createTooltip(linkTooltip, linkTooltipConfig);
});
