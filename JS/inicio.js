tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "surface-variant": "#353535",
                        "on-error-container": "#ffdad6",
                        "tertiary-fixed": "#e2e2e2",
                        "on-background": "#e2e2e2",
                        "outline": "#ae8883",
                        "on-secondary": "#303030",
                        "on-tertiary": "#2f3131",
                        "outline-variant": "#5d3f3c",
                        "on-surface-variant": "#e7bdb8",
                        "secondary-fixed-dim": "#c8c6c5",
                        "tertiary-fixed-dim": "#c6c6c7",
                        "on-primary-fixed-variant": "#93000c",
                        "inverse-primary": "#c00013",
                        "primary-container": "#e21b21",
                        "secondary": "#c8c6c5",
                        "surface-container-low": "#1b1b1b",
                        "primary-fixed-dim": "#ffb4ab",
                        "surface-tint": "#ffb4ab",
                        "on-secondary-fixed": "#1b1b1c",
                        "background": "#131313",
                        "surface-container": "#1f1f1f",
                        "on-primary-fixed": "#410002",
                        "surface-container-highest": "#353535",
                        "surface-bright": "#393939",
                        "inverse-on-surface": "#303030",
                        "primary-fixed": "#ffdad6",
                        "on-tertiary-fixed": "#1a1c1c",
                        "error-container": "#93000a",
                        "tertiary-container": "#727373",
                        "on-tertiary-container": "#fafafa",
                        "on-secondary-container": "#b7b5b4",
                        "on-surface": "#e2e2e2",
                        "surface-dim": "#131313",
                        "inverse-surface": "#e2e2e2",
                        "tertiary": "#c6c6c7",
                        "secondary-fixed": "#e5e2e1",
                        "on-primary-container": "#fff8f7",
                        "on-primary": "#690006",
                        "error": "#ffb4ab",
                        "on-error": "#690005",
                        "surface-container-high": "#2a2a2a",
                        "secondary-container": "#474746",
                        "on-tertiary-fixed-variant": "#454747",
                        "surface-container-lowest": "#0e0e0e",
                        "on-secondary-fixed-variant": "#474746",
                        "primary": "#ffb4ab",
                        "surface": "#131313"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.125rem",
                        "lg": "0.25rem",
                        "xl": "0.5rem",
                        "full": "0.75rem"
                    },
                    "spacing": {
                        "margin-desktop": "64px",
                        "base": "8px",
                        "margin-mobile": "20px",
                        "gutter": "24px",
                        "container-max": "1440px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Anton"],
                        "headline-md": ["Anton"],
                        "label-bold": ["Archivo Narrow"],
                        "display-lg": ["Anton"],
                        "body-lg": ["Archivo Narrow"],
                        "label-sm": ["Archivo Narrow"],
                        "body-md": ["Archivo Narrow"],
                        "headline-lg-mobile": ["Anton"]
                    },
                    "fontSize": {
                        "headline-lg": ["48px", {"lineHeight": "48px", "fontWeight": "400"}],
                        "headline-md": ["32px", {"lineHeight": "32px", "fontWeight": "400"}],
                        "label-bold": ["14px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "700"}],
                        "display-lg": ["72px", {"lineHeight": "72px", "letterSpacing": "0.02em", "fontWeight": "400"}],
                        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "500"}],
                        "label-sm": ["12px", {"lineHeight": "16px", "fontWeight": "500"}],
                        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "headline-lg-mobile": ["32px", {"lineHeight": "36px", "fontWeight": "400"}]
                    }
                },
            },
        }

        function openModal(title, img, desc) {
            const modal = document.getElementById('infoModal');
            const modalImg = document.getElementById('modalImg');
            const modalTitle = document.getElementById('modalTitle');
            const modalDesc = document.getElementById('modalDesc');

            if (!modal || !modalImg || !modalTitle || !modalDesc) return;
            modalTitle.innerText = title;
            modalImg.src = img;
            modalDesc.innerText = desc;
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('infoModal');
            if (!modal) return;
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        window.openModal = openModal;
        window.closeModal = closeModal;

        document.addEventListener('DOMContentLoaded', () => {
            const modal = document.getElementById('infoModal');
            const modalImg = document.getElementById('modalImg');
            const modalTitle = document.getElementById('modalTitle');
            const modalDesc = document.getElementById('modalDesc');

            if (modal) {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) closeModal();
                });
            }

            const track = document.getElementById('carouselTrack');
            const nextBtn = document.getElementById('nextBtn');
            const prevBtn = document.getElementById('prevBtn');

            if (nextBtn && track) {
                nextBtn.addEventListener('click', () => {
                    track.scrollBy({ left: 424, behavior: 'smooth' });
                });
            }

            if (prevBtn && track) {
                prevBtn.addEventListener('click', () => {
                    track.scrollBy({ left: -424, behavior: 'smooth' });
                });
            }

            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarContent = document.getElementById('navbarContent');
            const toggleIcon = navbarToggler ? navbarToggler.querySelector('.toggle-icon') : null;

            const setToggleIconState = (isExpanded) => {
                if (!navbarToggler || !toggleIcon) return;
                navbarToggler.setAttribute('aria-expanded', String(isExpanded));
                toggleIcon.textContent = isExpanded ? 'close' : 'menu';
                toggleIcon.classList.toggle('text-primary', isExpanded);
            };

            if (navbarToggler && navbarContent && toggleIcon) {
                navbarToggler.addEventListener('click', () => {
                    const isOpen = navbarContent.classList.toggle('mobile-open');
                    setToggleIconState(isOpen);
                });

                window.addEventListener('resize', () => {
                    if (window.innerWidth >= 992) {
                        navbarContent.classList.remove('mobile-open');
                        setToggleIconState(false);
                    }
                });
            }

            const header = document.querySelector('header');
            window.addEventListener('scroll', () => {
                if (!header) return;
                if (window.scrollY > 50) {
                    header.classList.add('py-2');
                    header.classList.remove('py-4');
                } else {
                    header.classList.add('py-4');
                    header.classList.remove('py-2');
                }
            });
        });

        