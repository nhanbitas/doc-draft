document.addEventListener('DOMContentLoaded', () => {
  const infoPanes = document.querySelectorAll('[data-info-pane]');

infoPanes.forEach((infoPane) => {
  // Add transition classes to the right pane
  infoPane.className = 'relative w-2/5 rounded-tr-2xl p-4 bg-gray-50 transition-[width] duration-300';

  // Create and append the separator element
  const separator = document.createElement('div');
  separator.setAttribute('data-info-pane-separator', '');
  separator.className = 'absolute -left-[0.5px] top-0 transform origin-center w-px h-full py-2';
  separator.innerHTML = '<div class="w-full h-full bg-gray-200"></div>';
  infoPane.appendChild(separator);

  // Create and append the expand button
  const expandButton = document.createElement('button');
  expandButton.setAttribute('data-info-pane-button', '');
  expandButton.className =
    'absolute btn icon-only xsmall rounded-full bg-gray-200 text-gray-900 hover:bg-gray-300 active:bg-gray-400 -left-2 top-5 transform origin-center';
  expandButton.innerHTML = '<i class="far fa-chevron-selector-horizontal w-3 h-3"></i>';
  infoPane.appendChild(expandButton);
});

const infoPaneButtons = document.querySelectorAll('[data-info-pane-button]');

infoPaneButtons.forEach((infoPaneButton) => {
  infoPaneButton.addEventListener('click', () => {
    const pane = infoPaneButton.parentNode;
    const paneLeft = pane.previousElementSibling;
    const elementsToToggle = pane.querySelectorAll(
      ':scope > :not([data-info-pane-button]):not([data-info-pane-separator])',
    );

    paneLeft.classList.add('transition-[width]', 'duration-300');
    elementsToToggle.forEach((element) => {
      element.classList.add('transition-opacity', 'duration-300');
    });

    const elementsHidden = elementsToToggle[0].classList.contains('hidden');
    if (elementsHidden) {
      pane.classList.toggle('w-2/5');
      pane.classList.toggle('w-[2rem]');
      paneLeft.classList.toggle('w-3/5');
      paneLeft.classList.toggle('w-[calc(100%_-_2rem)]');

      setTimeout(() => {
        elementsToToggle.forEach((element) => {
          element.classList.remove('hidden');
          setTimeout(() => {
            element.classList.remove('opacity-0');
            element.classList.add('opacity-100');
          }, 100);
        });
      }, 200);
    } else {
      elementsToToggle.forEach((element) => {
        element.classList.add('hidden');
        element.classList.remove('opacity-100');
        element.classList.add('opacity-0');
      });

      pane.classList.toggle('w-2/5');
      pane.classList.toggle('w-[2rem]');
      paneLeft.classList.toggle('w-3/5');
      paneLeft.classList.toggle('w-[calc(100%_-_2rem)]');
    }
  });
});
})
