// Global variables:
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

document.addEventListener("HTMLParsed",  () => {
  const icons = document.querySelectorAll('.far-icon-container');
  icons.forEach((icon) => {
    icon.classList.add('cursor-pointer', 'hover:bg-gray-100');
    icon.addEventListener('click', () => {
      const classNameForITag = icon.getElementsByTagName('svg')[0].className.baseVal.split(' ')[1];
      //handle copy to clipboard
      navigator.clipboard
        .writeText(`<i class="far ${classNameForITag}"></i>`)
        .then(() => {
          const tempContent = icon.getElementsByTagName('p')[0].textContent;
          icon.getElementsByTagName('p')[0].textContent = 'Copied';
          setTimeout(() => {
            icon.getElementsByTagName('p')[0].textContent = tempContent;
          }, 1000);
        })
        .catch((err) => {
          console.error('error:', err);
        });
    });
  });



  //
  const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 82) {
      // stickyHeading.classList.remove('hidden');
      scrollToTopBtn.classList.remove('translate-y-10');
      scrollToTopBtn.classList.add('-translate-y-6');
    } else {
      // stickyHeading.classList.add('hidden');
      scrollToTopBtn.classList.remove('-translate-y-6');
      scrollToTopBtn.classList.add('translate-y-10');
    }
  });
})