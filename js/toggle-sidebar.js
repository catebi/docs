document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.querySelector('.toggle');
    var sidebar = document.querySelector('.navigation-sidebar');

    toggle.addEventListener('click', function() {
        sidebar.classList.toggle('-closed');
    });
});
