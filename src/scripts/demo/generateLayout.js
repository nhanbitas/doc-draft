const validate = (dataObject) => {
  const whiteList = ["component", "description", "tabs", "currentTab"];

  const checkKeysInWhiteList = (dataObject, whiteList) => {
    const isInWhiteList = Object.keys(dataObject).every((key) => whiteList.includes(key));
    return isInWhiteList;
  };

  const containsScript = (input) => {
    const scriptPattern = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    return scriptPattern.test(input);
  };

  if (!checkKeysInWhiteList(dataObject, whiteList) || containsScript(dataObject.textContent)) {
    throw new Error("Invalid layout data ");
  }

  if (typeof dataObject.component !== "string" || containsScript(dataObject.component)) {
    throw new Error("Invalid layout data ");
  }

  if (typeof dataObject.description !== "string" || containsScript(dataObject.description)) {
    throw new Error("Invalid layout data ");
  }

  if (!Array.isArray(dataObject.tabs) || containsScript(dataObject.tabs)) {
    throw new Error("Invalid layout data ");
  }

  if (typeof dataObject.currentTab !== "string") {
    throw new Error("Invalid layout data ");
  }
};


const createTitle = (dataObject) => {
  const title = document.createElement("div");
  title.setAttribute("data-page-title", "");
  title.classList.add("flex", "flex-col", "gap-2", "py-4");
  title.innerHTML = `
    <h1 class="text-heading-06 text-gray-900">${dataObject.component}</h1>
    <div class="flex flex-wrap gap-x-3 gap-y-2">
      <span class="text-label-02 flex items-center gap-1"
        >Development:
          <span class="badge green small">Release</span>
      </span>
      <span class="text-label-02 flex items-center gap-1"
        >Documentation:
          <span class="badge blue small">3/5</span>
        </span>
    </div>
  `;
  return title;
};

const createTabList = (dataObject) => {
  const tabs = document.createElement("div");
  tabs.classList.add("tabs-nav", "tabs-md", "sticky", "top-0", "bg-white", "z-10", "shadow-nav-b-full");
  tabs.innerHTML = `
    ${dataObject.tabs
      .map((tab) => {
        const href = tab.toLowerCase();
        return `<a href="doc-draft/${href}.html" class="btn large tab-button tab-link ${
          tab === dataObject.currentTab ? "active" : ""
        }">${tab}</a>`;
      })
      .join("")}
  `;

  const tabLinks = tabs.querySelectorAll(".tab-link");
  tabLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      const href = this.getAttribute("href");
      window.parent.history.pushState(null, null, href)
    });
  });
  return tabs;
};

const createGithubEditLink = () => {
  const currentURL = window.location.pathname;
  const editLink = document.createElement("a");
  editLink.classList.add("github-edit-link");
  editLink.setAttribute("href", `https://github.com/dkh-1/opera-ui-docs/edit/test${currentURL}`);
  editLink.setAttribute("target", "_blank");
  editLink.innerHTML = `Edit this page on GitHub`;

  return editLink;
};

const generateLayout = (dataObject) => {
  document.title = dataObject.component;
  document.body.prepend(createTabList(dataObject));
  document.body.prepend(createTitle(dataObject));
  document.body.append(createGithubEditLink());
  document.body.classList.add("markdown-body");
};

try {
  document.addEventListener("DOMContentLoaded", () => {
    const dataObject = document.metadata;

    validate(dataObject);

    generateLayout(dataObject);
  });
} catch (error) {
  console.log(error);
}
