/**
 * Minimal Accessibility Toolbar
 * Simplified version - only essential features
 */

(function() {
  'use strict';

  const STORAGE_KEY = 'a11y-settings';

  // Default settings
  const defaults = {
    fontSize: 'normal',
    contrast: 'normal'
  };

  // Load saved settings
  function loadSettings() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : { ...defaults };
    } catch (e) {
      return { ...defaults };
    }
  }

  // Save settings
  function saveSettings(settings) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (e) {
      console.warn('Could not save accessibility settings');
    }
  }

  // Apply settings to body
  function applySettings(settings) {
    const body = document.body;

    // Remove old classes
    body.classList.remove('font-small', 'font-large', 'font-xlarge', 'high-contrast');

    // Apply font size
    if (settings.fontSize === 'small') {
      body.classList.add('font-small');
    } else if (settings.fontSize === 'large') {
      body.classList.add('font-large');
    } else if (settings.fontSize === 'xlarge') {
      body.classList.add('font-xlarge');
    }

    // Apply contrast
    if (settings.contrast === 'high') {
      body.classList.add('high-contrast');
    }

    // Update active buttons
    updateActiveButtons(settings);
  }

  // Update button active states
  function updateActiveButtons(settings) {
    const panel = document.getElementById('a11y-panel');
    if (!panel) return;

    // Font size buttons
    panel.querySelectorAll('[data-action="font-size"]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.value === settings.fontSize);
    });

    // Contrast buttons
    panel.querySelectorAll('[data-action="contrast"]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.value === settings.contrast);
    });
  }

  // Handle button clicks
  function handleAction(action, value) {
    const settings = loadSettings();

    if (action === 'font-size') {
      settings.fontSize = value;
    } else if (action === 'contrast') {
      settings.contrast = value;
    } else if (action === 'reset') {
      Object.assign(settings, defaults);
    }

    saveSettings(settings);
    applySettings(settings);
  }

  // Initialize toolbar
  function init() {
    const toggle = document.querySelector('.a11y-toggle');
    const panel = document.getElementById('a11y-panel');

    if (!toggle || !panel) return;

    // Toggle panel visibility
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      panel.hidden = expanded;
    });

    // Close panel when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.a11y-toolbar')) {
        toggle.setAttribute('aria-expanded', 'false');
        panel.hidden = true;
      }
    });

    // Handle button clicks
    panel.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', () => {
        handleAction(btn.dataset.action, btn.dataset.value);
      });
    });

    // Apply saved settings on load
    const settings = loadSettings();
    applySettings(settings);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
