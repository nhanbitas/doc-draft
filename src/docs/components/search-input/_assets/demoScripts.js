document.addEventListener("HTMLParsed",  () => {
    const searchInputs = document.querySelectorAll('input[type="search"]');

    searchInputs.forEach((searchInput) => {
      const clearButton = searchInput.parentNode.querySelector('button');

      searchInput.addEventListener('input', function () {
        if (searchInput.value.length > 0) {
          clearButton.classList.remove('hidden');
        } else {
          clearButton.classList.add('hidden');
        }
      });

      clearButton.addEventListener('click', function () {
        searchInput.value = '';
        clearButton.classList.add('hidden');
        searchInput.focus();
      });
    });
})