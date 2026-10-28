/**
 * MAIN INTERACTIVITY SCRIPT
 * High-performance, accessible, vanilla JavaScript
 * Handles navigation, mobile drawer, project links, copy-to-clipboard,
 * skills filtering, and form handling.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Navigation & Header Sticky Effects
  initHeader();
  
  // 2. Mobile Drawer Navigation
  initMobileDrawer();
  
  // 3. Scroll Spy (Active nav link tracking)
  initScrollSpy();
  
  // 4. Skills Filtering Tabs
  initSkillsFilter();

  // 5. Project Cards Link Validator & Interactions
  initProjectLinks();
  
  // 6. Copy Email & Quick Actions
  initCopyActions();
  
  // 7. Contact Form Handling
  initContactForm();

  // 8. Modal & Placeholder Banner
  initModalAndBanner();

  // 9. Intersection Observer for Scroll Animations
  initScrollAnimations();
});

/* --------------------------------------------------------------------------
   1. Header Scroll Effect
   -------------------------------------------------------------------------- */
function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* --------------------------------------------------------------------------
   2. Mobile Drawer Navigation
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('drawerBackdrop');
  const closeBtn = document.getElementById('closeDrawerBtn');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuBtn || !drawer || !backdrop) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    backdrop.classList.add('active');
    drawer.setAttribute('aria-hidden', 'false');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
    drawer.setAttribute('aria-hidden', 'true');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  menuBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  // Close when clicking any nav link
  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* --------------------------------------------------------------------------
   3. Scroll Spy for Active Navigation Links
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav .mobile-nav-link');

  if (!sections.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Update desktop links
        desktopLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        // Update mobile links
        mobileLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

/* --------------------------------------------------------------------------
   4. Skills Filtering
   -------------------------------------------------------------------------- */
function initSkillsFilter() {
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.skill-card');

  if (!tabs.length || !cards.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab button
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const category = tab.getAttribute('data-category');

      // Filter cards
      cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. Project Cards Link Validator & Interactions
   Requirement: "Each project card should have buttons for GitHub repository
   and Live Demo only when valid URLs are provided."
   -------------------------------------------------------------------------- */
function initProjectLinks() {
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    const projectId = card.getAttribute('data-project-id');
    const repoBtn = card.querySelector('[data-action="repo"]');
    const demoBtn = card.querySelector('[data-action="demo"]');

    // Check project data if available
    let projectData = null;
    if (typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.projects) {
      projectData = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    }

    // Configure GitHub Repo Button
    if (repoBtn) {
      let targetUrl = repoBtn.getAttribute('href');
      if (projectData && projectData.githubUrl) {
        targetUrl = projectData.githubUrl;
      }

      const isValidUrl = targetUrl && targetUrl !== '#' && targetUrl.startsWith('http') && !targetUrl.includes('[YOUR-');

      if (isValidUrl) {
        repoBtn.setAttribute('href', targetUrl);
        repoBtn.setAttribute('target', '_blank');
        repoBtn.setAttribute('rel', 'noopener noreferrer');
      } else {
        // Display toast when clicked informing user it's an editable placeholder
        repoBtn.addEventListener('click', (e) => {
          e.preventDefault();
          showToast(`Repository link is being prepared for ${projectData?.title || 'this project'}.`);
        });
      }
    }

    // Configure Live Demo Button
    if (demoBtn) {
      let demoUrl = demoBtn.getAttribute('href');
      if (projectData && projectData.demoUrl) {
        demoUrl = projectData.demoUrl;
      }

      const isValidDemo = demoUrl && demoUrl !== '#' && demoUrl.startsWith('http') && !demoUrl.includes('[YOUR-');

      if (isValidDemo) {
        demoBtn.setAttribute('href', demoUrl);
        demoBtn.setAttribute('target', '_blank');
        demoBtn.setAttribute('rel', 'noopener noreferrer');
      } else {
        // Hide or configure gracefully when no valid live demo is provided
        demoBtn.style.opacity = '0.55';
        demoBtn.setAttribute('title', 'Live demo deployment in progress');
        demoBtn.addEventListener('click', (e) => {
          e.preventDefault();
          showToast(`Live demo for ${projectData?.title || 'this project'} is in preparation. Check GitHub repository for setup!`);
        });
      }
    }
  });

  // Certifications verification links
  const certLinks = document.querySelectorAll('.cert-verify-link');
  certLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const certName = link.getAttribute('data-cert') || 'Certificate';
      const href = link.getAttribute('href');
      if (!href || href === '#' || href.includes('[YOUR_')) {
        e.preventDefault();
        showToast(`${certName}: Physical/Digital certificate available on request during interviews.`);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6. Copy Email & Quick Actions
   -------------------------------------------------------------------------- */
function initCopyActions() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const emailLink = document.getElementById('emailLink');

  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    // Extract email from email link or PORTFOLIO_DATA
    let email = 'vaishaliniselvam@gmail.com';
    if (emailLink) {
      const href = emailLink.getAttribute('href');
      if (href && href.startsWith('mailto:')) {
        email = href.replace('mailto:', '').trim();
      }
    }

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for older browsers
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
      }

      // Visual feedback
      const originalHtml = copyBtn.innerHTML;
      copyBtn.innerHTML = `
        <svg class="icon icon-xs" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>Copied!</span>
      `;
      copyBtn.style.borderColor = 'var(--accent-emerald)';
      copyBtn.style.color = '#34d399';

      showToast(`Copied ${email} to clipboard!`);

      setTimeout(() => {
        copyBtn.innerHTML = originalHtml;
        copyBtn.style.borderColor = '';
        copyBtn.style.color = '';
      }, 2500);

    } catch (err) {
      showToast(`Email address: ${email}`);
    }
  });
}

/* --------------------------------------------------------------------------
   7. Contact Form Handling
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const messageInput = document.getElementById('contactMessage');

    let isValid = true;

    // Reset error states
    document.querySelectorAll('.form-group').forEach(grp => grp.classList.remove('has-error'));

    // Validate Name
    if (!nameInput.value.trim()) {
      nameInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
      emailInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      messageInput.closest('.form-group').classList.add('has-error');
      isValid = false;
    }

    if (!isValid) {
      showToast('Please fill in all required fields accurately.');
      return;
    }

    // Prepare mailto link
    const recipient = (typeof PORTFOLIO_DATA !== 'undefined' && PORTFOLIO_DATA.personal?.email) 
      ? PORTFOLIO_DATA.personal.email 
      : 'vaishaliniselvam@gmail.com';

    const subject = encodeURIComponent(subjectInput.value.trim() || `Portfolio Inquiry from ${nameInput.value.trim()}`);
    const body = encodeURIComponent(
      `Name: ${nameInput.value.trim()}\n` +
      `Email: ${emailInput.value.trim()}\n\n` +
      `Message:\n${messageInput.value.trim()}`
    );

    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

    showToast('Launching your email client...');
    
    // Launch mail client
    window.location.href = mailtoUrl;

    // Optional reset
    setTimeout(() => {
      form.reset();
    }, 1000);
  });
}

/* --------------------------------------------------------------------------
   8. Modal & Placeholder Banner
   -------------------------------------------------------------------------- */
function initModalAndBanner() {
  const modal = document.getElementById('checklistModal');
  const openModalBtn = document.getElementById('openPlaceholderGuideBtn');
  const footerChecklistBtn = document.getElementById('footerChecklistBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const gotItBtn = document.getElementById('gotItBtn');

  const banner = document.getElementById('placeholderBanner');
  const closeBannerBtn = document.getElementById('closePlaceholderBannerBtn');

  const openModal = () => {
    if (modal) {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    if (modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  if (openModalBtn) openModalBtn.addEventListener('click', openModal);
  if (footerChecklistBtn) footerChecklistBtn.addEventListener('click', openModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (gotItBtn) gotItBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Banner close
  if (closeBannerBtn && banner) {
    closeBannerBtn.addEventListener('click', () => {
      banner.style.display = 'none';
    });
  }

  // Update current year in footer automatically
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* --------------------------------------------------------------------------
   9. Intersection Observer Scroll Animations
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in');
  if (!animatedElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   10. Toast Notification Utility
   -------------------------------------------------------------------------- */
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;

  clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.classList.add('show');

  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
