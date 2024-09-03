document.addEventListener('DOMContentLoaded', function() {
    const formPages = document.querySelectorAll('.form-page');
    const nextBtns = document.querySelectorAll('.next-btn');
    const prevBtns = document.querySelectorAll('.prev-btn');
    const addRowBtn = document.getElementById('addRowBtn');
    const tableBody = document.querySelector('#authorizedPersonsTable tbody');
    const dots = document.querySelectorAll('.dot');

    let currentPage = 0;
    showPage(currentPage);

    nextBtns.forEach(button => {
        button.addEventListener('click', function() {
            currentPage++;
            showPage(currentPage);
        });
    });

    prevBtns.forEach(button => {
        button.addEventListener('click', function() {
            currentPage--;
            showPage(currentPage);
        });
    });

    addRowBtn.addEventListener('click', function() {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td><input type="text" name="authPersonName[]" required></td>
            <td><input type="text" name="authPersonDesignation[]" required></td>
            <td><input type="text" name="authPersonMobile[]" required></td>
            <td><input type="email" name="authPersonEmail[]" required></td>
            <td><button type="button" class="remove-btn">Remove</button></td>
        `;
        tableBody.appendChild(newRow);
        addRemoveListener();
    });

    function addRemoveListener() {
        const removeBtns = document.querySelectorAll('.remove-btn');
        removeBtns.forEach(button => {
            button.addEventListener('click', function() {
                button.closest('tr').remove();
            });
        });
    }

    function showPage(page) {
        formPages.forEach((formPage, index) => {
            formPage.style.display = index === page ? 'block' : 'none';
        });

        // Update dot appearance
        updateDots(page);
    }

    function updateDots(page) {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === page);
        });
    }
});
