document.addEventListener("HTMLParsed", () => {
  // Get all the groupCheckboxes
  const groupCheckboxes = document.querySelectorAll("input[data-checkbox-group]");

  // Add event listeners to the groupCheckboxes
  groupCheckboxes.forEach((groupCheckbox) => {
    groupCheckbox.addEventListener("change", function () {
      updateChildCheckboxes(groupCheckbox);
      updateParentCheckboxes(groupCheckbox);
    });
  });

  function updateChildCheckboxes(checkbox) {
    const checkboxName = checkbox.getAttribute("name");
    const childCheckboxes = document.querySelectorAll(
      `input[data-checkbox-group][data-checkbox-group-parent="${checkboxName}"]`
    );

    if (checkbox.checked) {
      // Select all child groupCheckboxes
      childCheckboxes.forEach((childCheckbox) => {
        childCheckbox.checked = true;
        childCheckbox.indeterminate = false;
        // Recursively update children of current child checkbox
        updateChildCheckboxes(childCheckbox);
      });
    } else {
      // Unselect all child groupCheckboxes
      childCheckboxes.forEach((childCheckbox) => {
        childCheckbox.checked = false;
        childCheckbox.indeterminate = false;
        // Recursively update children of current child checkbox
        updateChildCheckboxes(childCheckbox);
      });
    }
  }

  function updateParentCheckboxes(checkbox) {
    const parentCheckboxName = checkbox.getAttribute("data-checkbox-group-parent");
    const parentCheckbox = document.querySelector(`input[data-checkbox-group][name="${parentCheckboxName}"]`);

    // Check if there is a parent checkbox
    if (parentCheckbox) {
      const siblingCheckboxes = document.querySelectorAll(
        `input[data-checkbox-group][data-checkbox-group-parent="${parentCheckboxName}"]`
      );

      let allSiblingsChecked = true;
      let anySiblingsChecked = false;
      let anySiblingsIndeterminate = false;

      siblingCheckboxes.forEach((siblingCheckbox) => {
        if (siblingCheckbox.checked) {
          anySiblingsChecked = true;
        } else if (siblingCheckbox.indeterminate) {
          anySiblingsIndeterminate = true;
          allSiblingsChecked = false;
        } else {
          allSiblingsChecked = false;
        }
      });

      parentCheckbox.checked = allSiblingsChecked;
      parentCheckbox.indeterminate = !allSiblingsChecked && (anySiblingsChecked || anySiblingsIndeterminate);

      // Update the parent of parentCheckbox recursively
      updateParentCheckboxes(parentCheckbox);
    }
  }
});
