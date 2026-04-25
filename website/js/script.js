/**
 * Street Vendor QR App – static site scripts
 * Plain JS: nav toggle, footer year, smooth scroll
 */

(function () {
  'use strict';

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var siteNav = document.getElementById('siteNav');
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      siteNav.classList.toggle('is-open');
      var isOpen = siteNav.classList.contains('is-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // Optional: close nav when a link is clicked (for single-page or anchor use)
  if (siteNav) {
    siteNav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && window.innerWidth <= 768) {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // How it works: tab switching (For Vendors / For Customers)
  var tabButtons = document.querySelectorAll('.how-tab');
  var panels = document.querySelectorAll('.how-panel');
  function switchToPanel(panelId) {
    if (!panelId) return;
    tabButtons.forEach(function (b) {
      b.classList.remove('is-active');
      b.setAttribute('aria-selected', 'false');
    });
    var activeBtn = document.querySelector('.how-tab[data-panel="' + panelId + '"]');
    if (activeBtn) {
      activeBtn.classList.add('is-active');
      activeBtn.setAttribute('aria-selected', 'true');
    }
    panels.forEach(function (panel) {
      panel.classList.toggle('is-hidden', panel.id !== panelId);
    });
  }
  if (tabButtons.length && panels.length) {
    tabButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        switchToPanel(btn.getAttribute('data-panel'));
      });
    });
    if (window.location.hash === '#users') {
      switchToPanel('panel-customers');
    }
  }

  // Home: feature highlights carousel
  var carousel = document.getElementById('featureCarousel');
  if (carousel) {
    var slides = carousel.querySelectorAll('.carousel-slide');
    var prevBtn = document.getElementById('carouselPrev');
    var nextBtn = document.getElementById('carouselNext');
    var dotsContainer = document.getElementById('carouselDots');
    var currentIndex = 0;
    var total = slides.length;
    var autoInterval;

    function showSlide(i) {
      currentIndex = (i + total) % total;
      slides.forEach(function (slide, idx) {
        slide.classList.toggle('is-active', idx === currentIndex);
      });
      var dots = dotsContainer.querySelectorAll('.carousel-dot');
      dots.forEach(function (dot, idx) {
        dot.classList.toggle('is-active', idx === currentIndex);
      });
    }

    if (dotsContainer && total > 0) {
      for (var d = 0; d < total; d++) {
        (function (idx) {
          var dot = document.createElement('button');
          dot.type = 'button';
          dot.className = 'carousel-dot' + (idx === 0 ? ' is-active' : '');
          dot.setAttribute('aria-label', 'Slide ' + (idx + 1));
          dot.addEventListener('click', function () {
            showSlide(idx);
            resetAuto();
          });
          dotsContainer.appendChild(dot);
        })(d);
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        showSlide(currentIndex - 1);
        resetAuto();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        showSlide(currentIndex + 1);
        resetAuto();
      });
    }

    function resetAuto() {
      if (autoInterval) clearInterval(autoInterval);
      if (total > 0) {
        autoInterval = setInterval(function () {
          showSlide(currentIndex + 1);
        }, 5000);
      }
    }
    if (total > 0) resetAuto();
  }

  // Dark mode toggle (uses theme CSS vars)
  var themeToggle = document.getElementById('themeToggle');
  var themeIcon = document.querySelector('.theme-icon');
  var THEME_KEY = 'svqr-theme';

  function applyTheme(isDark) {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  function updateThemeUI() {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (themeIcon) {
      themeIcon.textContent = isDark ? '\u2600' : '\u263D';
    }
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Toggle dark mode');
    }
  }

  if (themeToggle) {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark') {
      applyTheme(true);
    }
    updateThemeUI();

    themeToggle.addEventListener('click', function () {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      isDark = !isDark;
      applyTheme(isDark);
      localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
      updateThemeUI();
    });
  }
})();
