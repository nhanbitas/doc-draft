document.addEventListener("HTMLParsed", () => {
  // Single select
  const singleSelect = document.querySelector("#single-select");
  const singleSelectContainer = document.querySelector("#single-select-container");

  singleSelect.onchange = (event) => {
    singleSelectContainer.innerHTML = `This is content of ${event.detail.value}`;
  };

  // Multiple select
  const multiSelect = document.querySelector("#multi-select");
  const multiSelectContainer = document.querySelector("#multi-select-container");

  multiSelect.onchange = (event) => {
    multiSelectContainer.innerHTML = `This is content of [${event.detail.value}]`;
  };
});
