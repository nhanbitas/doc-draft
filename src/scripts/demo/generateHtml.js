// If not in Iframe redirect to docs with URLSearchParams
// In the docs, check the URLSearchParams and add to the Iframe
if (window.self == window.top) {
  const redirect = () => {
    const url = window.location.pathname;
    const homePageHref = `${window.location.origin}/doc-draft/src/docs/?path=${encodeURIComponent(url).replace(/\//g, "%2F")}`;
    window.location.href = homePageHref;
  };
  
  redirect();
} else {
  const addMeta = (name, content) => {
    const meta = document.createElement("meta");
    meta.setAttribute("name", name);
    meta.setAttribute("content", content);
    document.head.appendChild(meta);
    return meta;
  };

  const addLinkStylesheet = (href) => {
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", href);
    document.head.appendChild(link);
    return link;
  };

  const addScript = (src, defer = false) => {
    const script = document.createElement("script");
    script.setAttribute("src", src);
    defer && script.setAttribute("defer", "");
    document.head.appendChild(script);
    return script;
  };

  const addScriptAsync = (src, defer = false) => {
    return new Promise((resolve, reject) => {
      const script = addScript(src, defer);
      // script.async = true;
      script.onload = resolve;
      script.onerror = reject;
    });
  };

  // Meta tags already added in md-page.js
  //... already added by md-page.js, if needed more, add here

  // Add favicon
  const faviconLink = document.createElement("link");
  faviconLink.rel = "icon";
  faviconLink.href = "/doc-draft/src/lib/favicon.ico";
  const headElement = document.querySelector("head");
  headElement.appendChild(faviconLink);

  // Link stylesheets
  addLinkStylesheet("/doc-draft/src/styles/output.css");
  addLinkStylesheet("/doc-draft/src/styles/index.css");
  addLinkStylesheet("/doc-draft/src/lib/highlight.js/theme.css");

  // Scripts
  // Import scripts after converting markdown to html because these scripts depend on the html content
  // Because of needed html to run all scripts, we need async script handler
  const addDocScript = async () => {
    // Convert markdown to html and layout based on data
    await addScriptAsync("/doc-draft/src/lib/mdConverter/md-page.js", true);
    await addScriptAsync("/doc-draft/src/scripts/demo/generateLayout.js");

    // Import highlight js, we need handle highlight before generate icon
    await addScriptAsync("/doc-draft/src/lib/highlight.js/highlight.min.js");

    // Import demo code, because of the effect of demo-code.js on info-pane.js, we need async script handler
    await addScriptAsync("/doc-draft/src/scripts/demo/info-pane.js");
    await addScriptAsync("/doc-draft/src/scripts/demo/demo-code.js");

    // Import font after highlight to generate icon. If not, the example will svg tag instead of i tag
    addScript("/doc-draft/src/lib/font-awesome/fontawesome.min.js");
    addScript("/doc-draft/src/lib/font-awesome/regular.js");

    // After output.js is loaded, dispatch DOMContentLoaded event for make instances
    addScript("/doc-draft/src/scripts/output.js").onload = () => {
      document.dispatchEvent(new Event("DOMContentLoaded"));
      document.dispatchEvent(new Event("HTMLParsed"));
    };
  };

  addDocScript();
}
