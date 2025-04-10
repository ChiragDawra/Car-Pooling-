// Scroll-triggered animations using Intersection Observer
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('hidden');
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.animate-on-scroll').forEach(elem => {
    // add 'hidden' class initially for animation
    elem.classList.add('hidden');
    observer.observe(elem);
  });
  
  // Booking form – Pricing estimator mockup
  document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simple mock calculation for fare estimate
    const fare = (5 + Math.random() * 15).toFixed(2);
    const resultElem = document.getElementById('estimateResult');
    resultElem.textContent = `Estimated Fare: $${fare}`;
  });
  
  // Tabbed content for features/benefits
  const featTabs = document.querySelectorAll('.features-tabs .tab');
  const featPanels = document.querySelectorAll('.features-panels .tab-panel');
  featTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // deactivate all tabs and panels
      featTabs.forEach(t => t.classList.remove('active'));
      featPanels.forEach(panel => panel.classList.remove('active'));
      // activate selected tab and corresponding panel
      tab.classList.add('active');
      const targetId = tab.getAttribute('data-tab');
      document.getElementById(targetId).classList.add('active');
    });
  });
  
  // Authentication Modal logic
  const authBtn = document.getElementById('authBtn');
  const authModal = document.getElementById('authModal');
  const closeBtn = document.querySelector('.close-btn');
  const authTabs = document.querySelectorAll('.auth-tabs .tab');
  const formsSlider = document.querySelector('.forms-slider');
  
  // Open modal
  authBtn.addEventListener('click', () => {
    authModal.classList.add('active');
  });
  // Close modal when clicking X or outside modal content
  closeBtn.addEventListener('click', () => {
    authModal.classList.remove('active');
  });
  authModal.addEventListener('click', (e) => {
    if (e.target === authModal) {
      authModal.classList.remove('active');
    }
  });
  // Switch between Login and Sign Up tabs in modal
  authTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      authTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      if (tab.getAttribute('data-tab') === 'signup') {
        formsSlider.style.transform = 'translateX(-50%)';
      } else {
        formsSlider.style.transform = 'translateX(0%)';
      }
    });
  });
  // Modal form submissions (demo only)
  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Logged in (demo)!");
    authModal.classList.remove('active');
    this.reset();
  });
  document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Signed up (demo)!");
    authModal.classList.remove('active');
    this.reset();
  });
  