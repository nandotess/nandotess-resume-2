// On page load.
document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.nt-content');
    const collapseIconWrapper = document.querySelectorAll('.nt-editor-collapse-line');
    const lineCodeCollapsable = document.querySelectorAll('.nt-editor-collapse-line.nt-active + .nt-editor-line-code');

    // Toogle content class on scroll

    window.addEventListener('scroll', (e) => window.scrollY ? content.classList.add('nt-scrolled') : content.classList.remove('nt-scrolled'));

    // Collapse icon - show/hide on mouse over

    [...collapseIconWrapper].forEach(el => {
        el.addEventListener('mouseover', (e) => collapseIconWrapper.forEach(el => el.classList.add('nt-hover')));
        el.addEventListener('mouseout', (e) => collapseIconWrapper.forEach(el => el.classList.remove('nt-hover')));
    });

    // Collapse lines - show/hide on mouse click

    [...collapseIconWrapper].forEach(el => {
        if (el.classList.contains('nt-active')) {
            el.addEventListener('click', (e) => {
                el.closest('.nt-editor-group').classList.toggle('nt-collapsed');
                el.classList.toggle('nt-collapsed');
            });
        }
    });

    [...lineCodeCollapsable].forEach(el => {
        el.addEventListener('click', (e) => {
            if (el.previousElementSibling.classList.contains('nt-collapsed')) {
                el.closest('.nt-editor-group').classList.remove('nt-collapsed');
                el.previousElementSibling.classList.remove('nt-collapsed');
            }
        });
    });
});
