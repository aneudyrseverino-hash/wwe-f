document.addEventListener('DOMContentLoaded', async () => {
  const headerTarget = document.querySelector('[data-shared-header]');
  const footerTarget = document.querySelector('[data-shared-footer]');
  const basePath = './';

  const ensureBootstrapStyles = () => {
    if (document.querySelector('link[data-bootstrap-shared]')) {
      return;
    }

    const bootstrapLink = document.createElement('link');
    bootstrapLink.rel = 'stylesheet';
    bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
    bootstrapLink.setAttribute('data-bootstrap-shared', 'true');
    document.head.appendChild(bootstrapLink);
  };

  ensureBootstrapStyles();
  const homePath = '../index.html';
  const historyPath = '../historia/historia.html';
  const luchadoresPath = '../luchadores/luchadores.html';
  const currentPath = window.location.pathname.split('/').pop() || 'luchadores.html';

  const setNavigationLinks = (container) => {
  const homeLink = container.querySelector('[data-home-link]');
  const homeNavLink = container.querySelector('[data-nav-link="home"]');
  const historyNavLink = container.querySelector('[data-nav-link="history"]');
  const luchadoresNavLink = container.querySelector('[data-nav-link="luchadores"]');

  if (homeLink) { 
    homeLink.setAttribute('href', homePath);
  }

  if (homeNavLink) {
    homeNavLink.setAttribute('href', homePath); 
  }

  if (historyNavLink) {
    historyNavLink.setAttribute('href', historyPath);
  }

  if (luchadoresNavLink) {
    luchadoresNavLink.setAttribute('href', luchadoresPath);
  }
};

  const initializeHeaderInteractions = (container) => {
    const navbarToggler = container.querySelector('.navbar-toggler');
    const navbarContent = container.querySelector('.navbar-collapse');
    const toggleIcon = navbarToggler ? navbarToggler.querySelector('.toggle-icon') : null;

    const setToggleIconState = (isExpanded) => {
      if (!navbarToggler || !toggleIcon) return;
      navbarToggler.setAttribute('aria-expanded', String(isExpanded));
      toggleIcon.textContent = isExpanded ? 'X' : '☰';
      toggleIcon.classList.toggle('text-primary', isExpanded);
    };

    if (navbarToggler && navbarContent && toggleIcon) {
      navbarToggler.addEventListener('click', (event) => {
        event.preventDefault();
        const isOpen = navbarContent.classList.toggle('mobile-open');
        setToggleIconState(isOpen);
      });

      navbarContent.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
          if (window.innerWidth < 992) {
            navbarContent.classList.remove('mobile-open');
            setToggleIconState(false);
          }
        });
      });
    }

    const navLinks = container.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      const href = link.getAttribute('href') || '';
      const isHome = href.includes('index.html') || href === '#';
      const isHistory = href.includes('historia') || href.includes('/historia/');
      const isLuchadores = href.includes('luchadores.html') || href.includes('/luchadores/');

      if (isHome && (currentPath === 'inicio.html' || currentPath === '' || currentPath === 'index.html')) {
        link.classList.add('active');
      } else if (isHistory && (currentPath === 'historia.html' || currentPath.includes('historia'))) {
        link.classList.add('active');
      } else if (isLuchadores && (currentPath === 'luchadores.html' || currentPath.includes('luchadores'))) {
        link.classList.add('active');
      }
    });

    if (navbarToggler && navbarContent && toggleIcon) {
      window.addEventListener('resize', () => {
        if (window.innerWidth >= 992) {
          navbarContent.classList.remove('mobile-open');
          setToggleIconState(false);
        }
      });
    }
  };

  const initializeFooterYear = (container) => {
    const yearTarget = container.querySelector('#current-year');
    if (yearTarget) {
      yearTarget.textContent = new Date().getFullYear();
    }
  };

  if (headerTarget) {
    try {
      const response = await fetch(`${basePath}header.html`);
      const html = await response.text();
      headerTarget.innerHTML = html;
      setNavigationLinks(headerTarget);
      initializeHeaderInteractions(headerTarget);
    } catch (error) {
      console.error('No se pudo cargar el header compartido:', error);
    }
  }

  if (footerTarget) {
    try {
      const response = await fetch(`${basePath}footer.html`);
      const html = await response.text();
      footerTarget.innerHTML = html;
      initializeFooterYear(footerTarget);
    } catch (error) {
      console.error('No se pudo cargar el footer compartido:', error);
    }
  }
});

