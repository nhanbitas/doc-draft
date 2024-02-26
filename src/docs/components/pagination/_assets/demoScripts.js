document.addEventListener("HTMLParsed",  () => {
   // Get current page
    const pagination = document.querySelector('#pagination-demo');
    pagination.onchange = (event) => {
        const currentPage = pagination._instance.getCurrentPage() || event.detail.currentPage;
        document.querySelector('#current-page').textContent = currentPage;
    };

    // Set current page
    const paginationSetpage = document.querySelector('#pagination-demo-setpage');
    const inputSetpage = document.querySelector('#input-setpage');
    const btnSetpage = document.querySelector('#btn-setpage');
    btnSetpage.addEventListener('click', () => {
        paginationSetpage._instance.setCurrentPage(inputSetpage.value);
        inputSetpage.value = '';
    });

    // Append page
    const ul = document.querySelector('#test-append-page');
    const addBtn = document.querySelector('#add');
    addBtn.addEventListener('click', () => {
        const li = document.createElement('li');
        const newPage = ul._instance.endPage + 1;
        li.classList.add('pagination-item');
        li.setAttribute('data-page', newPage);
        li.innerHTML = newPage;
        ul._instance.appendPage(li);
    });

    ul.onchange = (e) => console.log(e.detail.currentPage);
})