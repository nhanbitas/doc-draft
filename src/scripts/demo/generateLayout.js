const validate = (dataObject) => {
  const whiteList = ["component", "description", "tabs", "currentTab"];

  const checkKeysInWhiteList = (dataObject, whiteList) => {
    const isInWhiteList = Object.keys(dataObject).every((key) =>
      whiteList.includes(key)
    );
    return isInWhiteList;
  };

  const containsScript = (input) => {
    const scriptPattern = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    return scriptPattern.test(input);
  };

  if (
    !checkKeysInWhiteList(dataObject, whiteList) ||
    containsScript(dataObject.textContent)
  ) {
    throw new Error("Invalid layout data ");
  }

  if (
    typeof dataObject.component !== "string" ||
    containsScript(dataObject.component)
  ) {
    throw new Error("Invalid layout data ");
  }

  if (
    typeof dataObject.description !== "string" ||
    containsScript(dataObject.description)
  ) {
    throw new Error("Invalid layout data ");
  }

  if (!Array.isArray(dataObject.tabs) || containsScript(dataObject.tabs)) {
    throw new Error("Invalid layout data ");
  }

  if (typeof dataObject.currentTab !== "string") {
    throw new Error("Invalid layout data ");
  }
};

const generateLayout = (dataObject) => {
  const htmlLayout = `
<div data-page-title class="flex flex-col gap-2 px-6 py-4">
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
</div>


<div class="tabs-nav tabs-md sticky top-0 bg-white px-6 shadow-sm">
  ${dataObject.tabs
    .map((tab) => {
      const href = tab.toLowerCase();
      return `<a href="${href}.html" class="tab-button ${
        tab === dataObject.currentTab ? "active" : ""
      }">${tab}</a>`;
    })
    .join("")}
</div>
`;

  const sharedLayout = document.createElement("div");
  sharedLayout.innerHTML = htmlLayout;
  sharedLayout.classList.add("shared-layout");
  document.body.prepend(sharedLayout);

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
