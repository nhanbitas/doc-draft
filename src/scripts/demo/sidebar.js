import sidebarItems from "../../data/sidebar-data.js";

const setUrlAndPushInIframe = (href) => {
  history.pushState(null, null, href);
  const iframe = document.getElementById("mainIframe");
  iframe.src = href;
};

// Handle URLSearchParams, in the docs, check the URLSearchParams and add to the Iframe
const queryParams = new URLSearchParams(window.location.search);
const pathParam = queryParams.get("path");
if (pathParam) {
  const encodedUrl = pathParam.replace("%2F", /\//g);
  setUrlAndPushInIframe(encodedUrl);
}

// render sidebar items
const sidebar = document.body.querySelector("#sidebar-content");
sidebarItems.forEach((element) => {
  const itemHTML = `
  <div class="py-4">
  <h2 class="text-heading-02 px-4 text-gray-900">${element.category}</h2>
  <ul class="flex flex-col py-2">
  ${element.items
    .map((item) => {
      let href = "";
      if (element.category === "Components") {
        href = `/doc-draft/src/docs/components/${item.link}/variants.html`;
      } else if (element.category === "Foundations") {
        href = `/doc-draft/src/docs/foundations/${item.link}/variants.html`;
      } else {
        href = `/doc-draft/src/docs/introduction/${item.link}/`;
      }
      return `
    <li class="inline-flex flex-wrap gap-x-2 gap-y-1 border-l-2 border-transparent py-1 pl-[0.875rem] pr-4">
      <a
        href="${href}"
        class="text-body-compact-02 relative leading-5 text-gray-500 hover:text-gray-900"
        target="mainIframe"
        >${item.title}</a
      >${item.status}
    </li>
    `;
    })
    .join("")} 
  </ul>
</div>
<hr class="mx-4 border-gray-200" />
  `;
  sidebar.innerHTML += itemHTML;
});

// handle item click
const navbarLinks = document.querySelectorAll("#sidebar-content li a");
navbarLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const href = this.getAttribute("href");
    setUrlAndPushInIframe(href);
  });
});

// handle active links
const links = document.querySelectorAll("#sidebar-wrapper a");
const iframe = document.querySelector('iframe[name="mainIframe"]');

function toggleActiveLink(event) {
  links.forEach((link) => {
    link.classList.remove("text-orange-500", "hover:text-orange-500");
    link.parentElement.classList.remove("border-orange-500", "bg-gray-50");
    link.classList.add("text-gray-500");
    link.parentElement.classList.add("border-transparent");
    if (link === event.target) {
      link.classList.remove("text-gray-500");
      link.parentElement.classList.remove("border-transparent");
      link.classList.add("text-orange-500", "hover:text-orange-500");
      link.parentElement.classList.add("border-orange-500", "bg-gray-50");
    }
  });
}

links.forEach((link) => {
  if (iframe.src === link.href) {
    link.classList.remove("text-gray-500");
    link.parentElement.classList.remove("border-transparent");
    link.classList.add("text-orange-500", "hover:text-orange-500");
    link.parentElement.classList.add("border-orange-500", "bg-gray-50");
  }
  link.addEventListener("click", toggleActiveLink);
});

// handle toggle sidebar
window.addEventListener("DOMContentLoaded", (event) => {
  const sidebarToggle = document.body.querySelector("#sidebar-toggle-default");

  if (sidebarToggle) {
    // Make the sidebar toggle state persistent between refreshes
    if (localStorage.getItem("sb|sidebar-toggle") === "true") {
      document.body.classList.toggle("sb-sidenav-toggled");
    }

    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
      localStorage.setItem("sb|sidebar-toggle", document.body.classList.contains("sb-sidenav-toggled"));
    });
  }

  window.addEventListener("blur", (event) => {
    if (window.innerWidth < 896 && document.body.classList.contains("sb-sidenav-toggled")) {
      document.body.classList.remove("sb-sidenav-toggled");
      localStorage.setItem("sb|sidebar-toggle", document.body.classList.contains("sb-sidenav-toggled"));
    }
  });
});
