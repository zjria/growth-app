document.addEventListener('DOMContentLoaded', () => {
    const faqContent = document.querySelector('.faq-content');
    faqContent.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header');



        if (!groupHeader) return;
        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        // Toggle Icons
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Toggle Vigibility
        groupBody.classList.toggle('open');


        // Close Other Open FAQ Body
        const otherGroups = faqContent.querySelectorAll('.faq-group');

        otherGroups.forEach((otherGroup) => {
            if (otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');

                otherGroupBody.classList.remove('open');

                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-flus');
            }
        })
    });
});

// Mobile Hamburger Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
});