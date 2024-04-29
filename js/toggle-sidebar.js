document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.querySelector('.content__toggle');
    var sidebar = document.querySelector('.sidebar');

    toggle.addEventListener('click', function() {
        sidebar.classList.toggle('closed');
    });
});
