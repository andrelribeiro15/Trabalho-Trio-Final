document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const filterToggle = document.getElementById('filter-toggle');
    const filterCard = document.getElementById('filter-card');

    // Garante que o sidebar comece fechado
    sidebar.classList.remove('active');

    menuToggle.addEventListener('click', function (e) {
        sidebar.classList.toggle('active');
        e.stopPropagation();
    });

    document.addEventListener('click', function (e) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });

    // Funcionalidade do botão "Filtros" (para pedidos.html e tecnico.html)
    if (filterToggle && filterCard) {
        filterToggle.addEventListener('click', function (e) {
            filterCard.style.display = filterCard.style.display === 'block' ? 'none' : 'block';
            e.stopPropagation();
        });

        document.addEventListener('click', function (e) {
            if (!filterCard.contains(e.target) && !filterToggle.contains(e.target)) {
                filterCard.style.display = 'none';
            }
        });
    }

    // Funcionalidade de hover para o acordeão
    const accordionCards = document.querySelectorAll('.accordion-card');
    accordionCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const target = this.getAttribute('data-bs-target');
            const collapseElement = document.querySelector(target);
            const bsCollapse = new bootstrap.Collapse(collapseElement, {
                toggle: false
            });
            bsCollapse.show();
        });

        card.addEventListener('mouseleave', function () {
            const target = this.getAttribute('data-bs-target');
            const collapseElement = document.querySelector(target);
            const bsCollapse = new bootstrap.Collapse(collapseElement, {
                toggle: false
            });
            bsCollapse.hide();
        });
    });
});